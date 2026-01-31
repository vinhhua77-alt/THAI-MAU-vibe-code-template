/**
 * @TEMPLATE: API_TEMPLATE
 * DESCRIPTION: Mẫu chuẩn cho tầng API/Controller.
 */

export const TemplateController = {
    /**
     * ENDPOINT: POST /example
     * PURPOSE: [Mục đích kinh doanh của endpoint này]
     * BUSINESS FLOW:
     * 1. Validate input
     * 2. Check Business Rules
     * 3. Call Service
     * 4. Return formatted response
     */
    handleRequest: async (req: any, res: any) => {
        // VALIDATION: [Mô tả các ràng buộc dữ liệu]

        // SIDE EFFECT: [Ghi log, gửi mail, notify...]
        // Rationale: Cần lưu vết để audit sau này

        try {
            // Execute logic
        } catch (error) {
            // Handle response
        }
    }
};
