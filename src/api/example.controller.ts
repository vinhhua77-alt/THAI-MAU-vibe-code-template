/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Tiếp nhận và phản hồi các yêu cầu từ phía Client cho domain Example.
 * BUSINESS CONTEXT: Tầng API chỉ làm nhiệm vụ điều phối, không chứa logic nghiệp vụ.
 */

import { ExampleService } from '@/modules/example-domain/example.service';
import { ExampleRepository } from '@/modules/example-domain/example.repo';
import { Logger } from '@/shared/logger';

// Khởi tạo Dependency (Tạm thời thủ công để đơn giản)
const exampleRepo = new ExampleRepository();
const exampleService = new ExampleService(exampleRepo);

export const ExampleController = {
    /**
     * ENDPOINT: POST /api/example
     * PURPOSE: Tiếp nhận yêu cầu tạo mới một Example.
     * BUSINESS FLOW:
     * 1. Nhận request từ Client.
     * 2. Gọi Service xử lý.
     * 3. Trả kết quả hoặc lỗi.
     */
    create: async (req: any, res: any) => {
        try {
            const result = await exampleService.create(req.body);
            return res.status(201).json(result);
        } catch (error: any) {
            Logger.error('API Error in ExampleController', error);
            return res.status(error.code ? 400 : 500).json({
                success: false,
                message: error.message,
                code: error.code
            });
        }
    }
};
