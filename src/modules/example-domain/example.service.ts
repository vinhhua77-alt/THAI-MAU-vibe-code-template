/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Thực hiện luồng nghiệp vụ cho Example.
 * BUSINESS CONTEXT: Đây là trái tim của module, nơi kết nối Rule, Repo và Logic.
 */

import { Logger } from '@/shared/logger';
import { BusinessError } from '@/shared/errors';
import { ExampleRepository } from './example.repo';
import { ValidAmountRule, LargeTransactionRule } from './example.rules';
import { CreateExampleRequest, ExampleData } from './example.types';

export class ExampleService {
    constructor(private repo: ExampleRepository) { }

    /**
     * BUSINESS LOGIC: Tạo một bản ghi Example mới.
     * WHY THIS EXISTS: Cho phép người dùng đăng ký thông tin giao dịch vào hệ thống.
     */
    public async create(request: CreateExampleRequest): Promise<ExampleData> {
        Logger.info('Creating new example transaction', { request });

        // STEP 1: Kiểm tra quy tắc bắt buộc
        // Rationale: Nếu tiền không hợp lệ thì không cần làm các bước sau.
        if (!ValidAmountRule.validate(request.amount)) {
            throw new BusinessError(ValidAmountRule.ID, ValidAmountRule.INTENT);
        }

        // STEP 2: Kiểm tra quy tắc cảnh báo
        if (LargeTransactionRule.validate(request.amount)) {
            Logger.warn('Large transaction detected. Flagging for review.', { amount: request.amount });
        }

        // STEP 3: Chuẩn bị dữ liệu và lưu
        const newData: ExampleData = {
            id: Math.random().toString(36).substr(2, 9),
            name: request.name,
            amount: request.amount,
            status: 'PENDING'
        };

        await this.repo.save(newData);

        Logger.info('Transaction saved successfully', { id: newData.id });
        return newData;
    }
}
