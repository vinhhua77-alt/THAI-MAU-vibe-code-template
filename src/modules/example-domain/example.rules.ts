/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Định nghĩa các quy tắc kiểm soát cho Example Domain.
 * BUSINESS CONTEXT: CEO yêu cầu kiểm soát chặt chẽ các giao dịch trên 50 triệu.
 */

import { BusinessRule } from '@/templates/RULE_TEMPLATE';

/**
 * RULE_ID: R-EX-001
 * BUSINESS INTENT: Chặn các yêu cầu có số tiền âm hoặc bằng 0.
 * RATIONALE: Tiền không thể âm trong nghiệp vụ này.
 */
export const ValidAmountRule: BusinessRule & { validate: (amount: number) => boolean } = {
    ID: 'R-EX-001',
    INTENT: 'Số tiền phải lớn hơn 0',
    FAILURE_MODE: 'BLOCK',
    validate: (amount: number) => amount > 0
};

/**
 * RULE_ID: R-EX-002
 * BUSINESS INTENT: Cảnh báo nếu số tiền vượt quá ngưỡng "VIP".
 * RATIONALE: Cần lưu ý các giao dịch lớn để chăm sóc khách hàng tốt hơn.
 */
export const LargeTransactionRule: BusinessRule & { validate: (amount: number) => boolean } = {
    ID: 'R-EX-002',
    INTENT: 'Nhận diện giao dịch lớn (> 50M)',
    FAILURE_MODE: 'WARN',
    validate: (amount: number) => amount > 50000000
};
