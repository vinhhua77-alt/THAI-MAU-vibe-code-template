/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Định nghĩa cấu trúc kết quả quyết định (Decision Result).
 * BUSINESS CONTEXT:
 * Decision Engine phải trả về kết quả rõ ràng, có thể hành động được:
 * - Flag: Cảnh báo gì?
 * - Score: Mức độ rủi ro bao nhiêu?
 * - Action: Ai phải làm gì?
 * - Explanation: Tại sao lại ra quyết định này?
 * 
 * WHY THIS EXISTS:
 * CEO/Ops Director không có thời gian đọc log kỹ thuật.
 * Họ cần câu trả lời trực tiếp: "Có vấn đề gì? Nghiêm trọng thế nào? Tôi phải làm gì?"
 * 
 * RISK IF WRONG:
 * Kết quả mơ hồ → Không ai hành động → Rule vô dụng.
 */

import { OperationalContext } from './decision.context';

/**
 * Mức độ nghiêm trọng của Flag
 * 
 * BUSINESS RATIONALE:
 * - CRITICAL: Phải xử lý ngay (< 15 phút), ảnh hưởng trực tiếp doanh thu/an toàn
 * - WARNING: Cần chú ý, xử lý trong ca (< 2 giờ)
 * - INFO: Thông tin tham khảo, không cần hành động ngay
 */
export type FlagSeverity = 'CRITICAL' | 'WARNING' | 'INFO';

/**
 * Evidence - Bằng chứng hỗ trợ quyết định
 * 
 * WHY THIS EXISTS:
 * Mọi quyết định phải trace được về dữ liệu gốc.
 * Khi SM hỏi "Tại sao hệ thống báo thiếu người?", 
 * phải chỉ được chính xác: "Vì lúc 12:15 chỉ có 3/7 người check-in"
 */
export interface Evidence {
    type: string;        // e.g., "actual_headcount"
    value: any;          // e.g., 3
    source: string;      // e.g., "Attendance System"
    timestamp: Date;     // Thời điểm thu thập
    confidence?: number; // 0-1, độ tin cậy (cho sensor data)
}

/**
 * Flag - Cảnh báo/Thông báo
 * 
 * BUSINESS INTENT:
 * Flag là "đèn đỏ" của hệ thống. Mỗi flag phải:
 * 1. Rõ ràng: Title ngắn gọn, description chi tiết
 * 2. Có bằng chứng: Evidence list để verify
 * 3. Có mức độ: Severity để ưu tiên xử lý
 */
export interface Flag {
    flagId: string;           // Unique ID để track
    ruleId: string;           // Rule nào tạo ra flag này
    severity: FlagSeverity;
    title: string;            // Ngắn gọn, < 50 chars
    description: string;      // Chi tiết, giải thích tình huống
    evidence: Evidence[];     // Bằng chứng hỗ trợ
    timestamp: Date;          // Thời điểm phát hiện
    context?: OperationalContext; // Context khi phát hiện
}

/**
 * Score Impact - Ảnh hưởng đến điểm số
 * 
 * WHY THIS EXISTS:
 * Nhiều rule cùng trigger → Cần tổng hợp thành điểm số tổng thể.
 * Ví dụ: AM-001 +50 điểm, LP-001 +30 điểm → shift_risk_score = 80 (CRITICAL)
 */
export interface ScoreImpact {
    shift_risk_score?: number;      // 0-100, rủi ro ca làm việc
    leader_efficiency_score?: number; // 0-100, hiệu quả leader
    store_health_score?: number;    // 0-100, sức khỏe cửa hàng
    compliance_score?: number;      // 0-100, tuân thủ SOP/5S
}

/**
 * Action Owner - Người chịu trách nhiệm hành động
 */
export type ActionOwner =
    | 'CEO'           // Quyết định chiến lược, crisis
    | 'OPS_DIRECTOR'  // Điều phối vùng, xử lý escalation
    | 'SM'            // Store Manager, xử lý cửa hàng
    | 'LEADER'        // Leader ca, xử lý tại chỗ
    | 'SYSTEM';       // Hệ thống tự động (ví dụ: tắt app delivery)

/**
 * Action - Hành động cần thực hiện
 * 
 * BUSINESS INTENT:
 * Mỗi flag phải kèm action cụ thể. Không được chỉ cảnh báo mà không nói phải làm gì.
 * 
 * EXAMPLE:
 * - Flag: "Thiếu nhân sự nghiêm trọng"
 * - Action: "SM điều động nhân sự dự phòng trong 15 phút"
 */
export interface Action {
    actionId: string;
    owner: ActionOwner;
    description: string;      // Mô tả hành động cụ thể
    deadline?: Date;          // Thời hạn hoàn thành (nếu có)
    escalationPath?: ActionOwner[]; // Escalate lên ai nếu không xử lý
    status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERRIDDEN';
}

/**
 * Explanation - Giải thích quyết định
 * 
 * WHY THIS EXISTS:
 * CEO ownership mindset: Người ra quyết định phải hiểu TẠI SAO.
 * Không được chỉ nói "Rule triggered", phải giải thích:
 * - Tại sao rule này tồn tại (rationale)
 * - Dựa trên bằng chứng gì (evidence)
 * - Khuyến nghị làm gì (recommendation)
 */
export interface Explanation {
    summary: string;          // Tóm tắt 1 câu
    rationale: string;        // Lý do business
    evidence?: string;        // Bằng chứng (formatted)
    recommendation?: string;  // Khuyến nghị hành động
    riskIfIgnored?: string;   // Rủi ro nếu bỏ qua
}

/**
 * Score - Điểm số tổng hợp
 * 
 * BUSINESS INTENT:
 * Chuyển đổi nhiều rule thành 1 con số dễ hiểu.
 * Ví dụ: shift_risk_score = 85 → CRITICAL → Ops Director phải can thiệp ngay.
 */
export interface Score {
    type: 'shift_risk_score' | 'leader_efficiency_score' | 'store_health_score' | 'compliance_score';
    value: number;            // 0-100
    status: 'HEALTHY' | 'AT_RISK' | 'CRITICAL';
    threshold: {
        healthy: { min: number; max: number };
        atRisk: { min: number; max: number };
        critical: { min: number; max: number };
    };
    contributingRules: string[]; // Rule IDs đóng góp vào score này
}

/**
 * Rule Result - Kết quả từ 1 rule cụ thể
 * 
 * WHY THIS EXISTS:
 * Mỗi rule evaluate độc lập, trả về kết quả riêng.
 * Decision Engine sẽ tổng hợp tất cả RuleResult thành DecisionResult.
 */
export interface RuleResult {
    ruleId: string;
    triggered: boolean;       // Rule có kích hoạt không
    severity?: FlagSeverity;  // Nếu triggered
    flag?: Flag;              // Flag được tạo ra
    scoreImpact?: ScoreImpact; // Ảnh hưởng điểm số
    actions?: Action[];       // Hành động cần thực hiện
    explanation?: Explanation; // Giải thích
    timestamp: Date;
}

/**
 * Decision Result - Kết quả tổng hợp từ Decision Engine
 * 
 * BUSINESS INTENT:
 * Đây là output chính của toàn bộ hệ thống.
 * CEO/Ops Director nhìn vào đây để biết:
 * 1. Có vấn đề gì? (flags)
 * 2. Nghiêm trọng thế nào? (scores)
 * 3. Phải làm gì? (actions)
 * 4. Tại sao? (explanations)
 * 
 * AUDIT TRAIL:
 * Mỗi decision phải có decisionId để trace ngược lại.
 */
export interface DecisionResult {
    decisionId: string;           // Unique ID
    timestamp: Date;              // Thời điểm quyết định
    context: OperationalContext;  // Context khi quyết định

    // Kết quả chính
    flags: Flag[];                // Tất cả cảnh báo
    scores: Score[];              // Tất cả điểm số
    actions: Action[];            // Tất cả hành động

    // Chi tiết
    ruleResults: RuleResult[];    // Kết quả từng rule
    overallExplanation: string;   // Giải thích tổng quan

    // Metadata
    requestedBy: string;          // Ai yêu cầu decision này
    processingTimeMs: number;     // Thời gian xử lý (performance tracking)
}

/**
 * Decision Request - Input cho Decision Engine
 * 
 * WHY THIS EXISTS:
 * Chuẩn hóa cách gọi Decision Engine.
 */
export interface DecisionRequest {
    context: OperationalContext;
    rawData: any;                 // Raw operational data (POS, attendance, etc.)
    requestedBy: string;          // User ID hoặc "SYSTEM"
    requestType?: 'REAL_TIME' | 'BATCH' | 'AUDIT'; // Loại request
}

/**
 * Helper: Tạo Flag ID
 */
export function generateFlagId(ruleId: string): string {
    return `FLAG-${ruleId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Helper: Tạo Action ID
 */
export function generateActionId(ruleId: string): string {
    return `ACTION-${ruleId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Helper: Tạo Decision ID
 */
export function generateDecisionId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return `DECISION-${timestamp}-${random}`;
}

/**
 * Helper: Xác định Score Status dựa trên value
 */
export function determineScoreStatus(
    value: number,
    threshold: Score['threshold']
): Score['status'] {
    if (value >= threshold.critical.min && value <= threshold.critical.max) {
        return 'CRITICAL';
    }
    if (value >= threshold.atRisk.min && value <= threshold.atRisk.max) {
        return 'AT_RISK';
    }
    return 'HEALTHY';
}
