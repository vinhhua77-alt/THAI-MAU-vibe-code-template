/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Quản lý việc lưu trữ và truy xuất dữ liệu Example.
 * BUSINESS CONTEXT: Tách biệt logic lưu trữ để có thể thay đổi Database dễ dàng trong tương lai.
 */

import { ExampleData } from './example.types';

export class ExampleRepository {
    private storage: Map<string, ExampleData> = new Map();

    /**
     * WHY: Sử dụng Map để mô phỏng Database trong bộ nhớ cho nhanh.
     */
    public async save(data: ExampleData): Promise<void> {
        this.storage.set(data.id, data);
    }

    public async findById(id: string): Promise<ExampleData | undefined> {
        return this.storage.get(id);
    }
}
