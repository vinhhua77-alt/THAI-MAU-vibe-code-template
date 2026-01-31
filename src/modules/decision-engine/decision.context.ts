/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Định nghĩa ngữ cảnh vận hành (Operational Context) cho Decision Engine.
 * BUSINESS CONTEXT: 
 * Mỗi quyết định của hệ thống phải hiểu rõ nó đang xử lý Store nào, Ca nào, Brand nào, 
 * Thời điểm nào để áp dụng đúng Rule và Threshold.
 * 
 * WHY THIS EXISTS:
 * - Rule AM-001 chỉ áp dụng cho QSR brands (DONDON, Đông Hỷ) trong Peak Hour
 * - Threshold khác nhau giữa Casual Dining (Đông Nguyên) và QSR (DONDON)
 * - Escalation path khác nhau giữa Mall-based và Street store
 * 
 * RISK IF WRONG:
 * Áp dụng sai Rule → Cảnh báo sai → Ops Director mất niềm tin vào hệ thống.
 */

/**
 * Brand types trong hệ sinh thái Thái Mậu
 */
export type BrandType =
    | 'DONDON'      // QSR, mall-based, traffic cao
    | 'DONG_NGUYEN' // Cơm gà truyền thống, casual dining
    | 'DONG_HY'     // Tiệm mì, nhịp độ nhanh
    | 'NGUYEN_FOOD'; // Central Kitchen + RTE

/**
 * Loại hình cửa hàng ảnh hưởng đến vận hành
 */
export type StoreType =
    | 'QSR'            // Quick Service Restaurant
    | 'CASUAL_DINING'  // Phục vụ bàn, thời gian chậm hơn
    | 'CENTRAL_KITCHEN'; // Nhà bếp trung tâm

/**
 * Vị trí cửa hàng ảnh hưởng đến traffic pattern
 */
export type LocationType =
    | 'MALL'       // Trung tâm thương mại, traffic theo giờ mall
    | 'STREET'     // Mặt phố, traffic theo giờ hành chính
    | 'FOOD_COURT'; // Khu ẩm thực, cạnh tranh cao

/**
 * Loại ca làm việc
 */
export type ShiftType =
    | 'MORNING'   // Ca sáng (thường 6h-14h)
    | 'AFTERNOON' // Ca chiều (thường 14h-22h)
    | 'EVENING';  // Ca tối (thường 18h-23h, overlap với afternoon)

/**
 * Ngữ cảnh Store
 * 
 * WHY THESE FIELDS:
 * - id: Để trace decision về đúng cửa hàng
 * - brand: Quyết định threshold và rule áp dụng
 * - type: Ảnh hưởng đến SOP và performance expectation
 * - location: Ảnh hưởng đến peak hour window và conversion rate
 * - capacity: Dùng để tính toán manpower ratio
 */
export interface StoreContext {
    id: string;
    name: string;
    brand: BrandType;
    type: StoreType;
    location: LocationType;
    capacity: {
        seatingCapacity?: number; // Số chỗ ngồi (nếu có)
        kitchenCapacity: number;  // Số đơn hàng/giờ tối đa
        staffCapacity: number;    // Số nhân viên tiêu chuẩn
    };
}

/**
 * Ngữ cảnh Ca làm việc
 * 
 * WHY THESE FIELDS:
 * - leaderId: Leader là linh hồn của ca, nhiều rule liên quan đến leader presence
 * - scheduledStaff: Để so sánh với actual headcount (Rule AM-001)
 * - peakHourExpected: Để kích hoạt các rule liên quan đến Peak Hour
 */
export interface ShiftContext {
    id: string;
    type: ShiftType;
    leaderId: string;
    leaderName: string;
    scheduledStaff: number;
    startTime: string; // ISO format "HH:mm"
    endTime: string;
    peakHourExpected: boolean;
}

/**
 * Ngữ cảnh Thời gian
 * 
 * WHY THESE FIELDS:
 * - current: Timestamp chính xác cho audit trail
 * - isPeakHour: Trigger cho tất cả Peak Hour rules (PK-001 đến PK-005)
 * - peakHourWindow: Để validate xem có đang trong khung giờ vàng không
 * - dayOfWeek: Một số rule khác nhau giữa weekday và weekend
 */
export interface TimeContext {
    current: Date;
    isPeakHour: boolean;
    peakHourWindow?: {
        start: string; // "11:30"
        end: string;   // "13:30"
    };
    dayOfWeek: number; // 0 = Sunday, 6 = Saturday
    isWeekend: boolean;
    isHoliday: boolean;
}

/**
 * Ngữ cảnh Sự kiện đặc biệt
 * 
 * WHY THIS EXISTS:
 * Một số rule cần được tạm dừng hoặc điều chỉnh threshold trong các sự kiện đặc biệt:
 * - Khai trương: Cho phép labor cost cao hơn
 * - Promotion: Waste spike là bình thường
 * - Maintenance: Tạm dừng equipment failure alerts
 */
export interface EventContext {
    hasPromotion: boolean;
    promotionType?: 'DISCOUNT' | 'COMBO' | 'LOYALTY';
    isGrandOpening: boolean; // Cửa hàng mới < 3 tháng
    maintenanceMode: boolean;
    specialEvent?: {
        name: string;
        type: 'HOLIDAY' | 'FESTIVAL' | 'CORPORATE_EVENT';
        expectedTrafficMultiplier: number; // 1.5 = 150% traffic
    };
}

/**
 * Operational Context - Tổng hợp toàn bộ ngữ cảnh
 * 
 * BUSINESS INTENT:
 * Đây là "bức tranh toàn cảnh" mà Decision Engine cần để đưa ra quyết định chính xác.
 * 
 * USAGE:
 * ```typescript
 * const context: OperationalContext = {
 *   store: { id: 'DONDON-001', brand: 'DONDON', ... },
 *   shift: { type: 'AFTERNOON', leaderId: 'L-123', ... },
 *   time: { current: new Date(), isPeakHour: true, ... },
 *   event: { hasPromotion: false, ... }
 * };
 * 
 * const decision = decisionEngine.evaluate(context, rawData);
 * ```
 */
export interface OperationalContext {
    store: StoreContext;
    shift: ShiftContext;
    time: TimeContext;
    event: EventContext;
}

/**
 * Context Filter - Dùng để lọc Rule có áp dụng không
 * 
 * WHY THIS EXISTS:
 * Không phải rule nào cũng chạy cho mọi context.
 * Ví dụ: AM-001 chỉ chạy khi isPeakHour = true và brand là QSR.
 * 
 * PERFORMANCE RATIONALE:
 * Lọc rule trước khi evaluate giúp tăng tốc độ xử lý,
 * quan trọng khi có 60+ rules.
 */
export interface ContextFilter {
    brands?: BrandType[];
    storeTypes?: StoreType[];
    shiftTypes?: ShiftType[];
    requiresPeakHour?: boolean;
    requiresWeekend?: boolean;
    excludeGrandOpening?: boolean; // Không áp dụng cho cửa hàng mới
}

/**
 * Helper function: Kiểm tra context có match filter không
 * 
 * @param context - Operational context hiện tại
 * @param filter - Filter của rule
 * @returns true nếu rule nên được evaluate
 */
export function matchesContext(
    context: OperationalContext,
    filter: ContextFilter
): boolean {
    // Check brand filter
    if (filter.brands && !filter.brands.includes(context.store.brand)) {
        return false;
    }

    // Check store type filter
    if (filter.storeTypes && !filter.storeTypes.includes(context.store.type)) {
        return false;
    }

    // Check shift type filter
    if (filter.shiftTypes && !filter.shiftTypes.includes(context.shift.type)) {
        return false;
    }

    // Check peak hour requirement
    if (filter.requiresPeakHour && !context.time.isPeakHour) {
        return false;
    }

    // Check weekend requirement
    if (filter.requiresWeekend && !context.time.isWeekend) {
        return false;
    }

    // Exclude grand opening stores
    if (filter.excludeGrandOpening && context.event.isGrandOpening) {
        return false;
    }

    return true;
}
