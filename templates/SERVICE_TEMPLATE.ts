/**
 * @TEMPLATE: SERVICE_TEMPLATE
 * DESCRIPTION: Mẫu chuẩn cho tầng Service xử lý nghiệp vụ.
 */

import { Logger } from '@/shared/logger';
import { BusinessError } from '@/shared/errors';

export class TemplateService {
    /**
     * BUSINESS LOGIC: [Tên nghiệp vụ]
     * WHY THIS EXISTS: [Giải thích lý do cần logic này]
     * 
     * @param input [Mô tả input]
     * @returns [Mô tả output]
     */
    public async executeTask(input: any): Promise<any> {
        try {
            Logger.info('Starting business task...', { context: 'TemplateService' });

            // BUSINESS STEP 1: [Mô tả bước nghiệp vụ]
            // Rationale: [Tại sao làm bước này?]

            // EDGE CASE: [Mô tả trường hợp biên]
            // Handling: [Cách xử lý]

            return { success: true };
        } catch (error) {
            // TECHNICAL VS BUSINESS ERROR
            // Phân biệt lỗi hệ thống và lỗi nghiệp vụ tại đây
            throw new BusinessError('TASK_FAILED', 'Mô tả lỗi cho người dùng hiểu');
        }
    }
}
