/**
 * @TEMPLATE: RULE_TEMPLATE
 * DESCRIPTION: Mẫu chuẩn cho Business Rules (Quy chuẩn nghiệp vụ).
 */

export interface BusinessRule {
    readonly ID: string;
    readonly INTENT: string;
    readonly FAILURE_MODE: 'BLOCK' | 'WARN' | 'SILENT';
}

/**
 * RULE_ID: R-XXX
 * BUSINESS INTENT: [Tại sao quy tắc này tồn tại?]
 * INPUT SIGNALS: [Các tín hiệu đầu vào để kiểm tra]
 * OUTPUT: [Kết quả kiểm tra]
 * OVERRIDE POLICY: [Ai có quyền ghi đè quy tắc này?]
 */
export const ExampleRule = {
    ID: 'R-001',
    INTENT: 'Ngăn chặn giao dịch vượt hạn mức để bảo vệ dòng tiền',
    FAILURE_MODE: 'BLOCK',

    validate: (amount: number, limit: number): boolean => {
        // LOGIC: Check if amount is within budget
        // Rationale: CEO wants to control daily spend strictly
        return amount <= limit;
    },

    onFailure: () => {
        // Quản lý cách thức báo lỗi khi rule bị vi phạm
        console.error('RULE_VIOLATED: Transaction exceeds allowed limit.');
    }
};
