/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Định nghĩa kiểu dữ liệu cho domain Example.
 * BUSINESS CONTEXT: Đảm bảo tính nhất quán dữ liệu trong toàn bộ module.
 */

export interface ExampleData {
    id: string;
    name: string;
    amount: number;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface CreateExampleRequest {
    name: string;
    amount: number;
}
