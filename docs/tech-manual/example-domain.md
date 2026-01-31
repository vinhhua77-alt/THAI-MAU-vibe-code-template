# 🛠 Technical Manual: Example Domain

## 1. Overview
Module này quản lý các giao dịch "Example" cơ bản, phục vụ việc minh họa cấu trúc Codebase.

## 2. Architecture
- **Service Layer**: `ExampleService` - Chứa luồng điều phối chính.
- **Rules Layer**: `example.rules.ts` - Định nghĩa các ràng buộc nghiệp vụ độc lập.
- **Repository Layer**: `ExampleRepository` - Quản lý dữ liệu (In-memory).

## 3. Business Rules
| Rule ID | Name | Intent | Failure Mode |
|---------|------|--------|--------------|
| R-EX-001 | Valid Amount | Đảm bảo tiền > 0 | BLOCK (Ngăn chặn) |
| R-EX-002 | Large Transaction | Nhận diện giao dịch > 50M | WARN (Cảnh báo log) |

## 4. Edge Cases Internal Handling
- **Negative Amount**: Sẽ bị chặn ngay lập tức bởi `ValidAmountRule`.
- **Very Large Amount**: Sẽ kích hoạt log cảnh báo `WARN` để AI hoặc Admin có thể kiểm tra định kỳ.

## 5. Implementation Notes
- Sử dụng `Map` để lưu trữ dữ liệu tạm thời. Trong thực tế cần thay bằng DB Client (Prisma, Mongoose...).
- Error Codes được trả về trực tiếp từ Rule ID để dễ truy vết.
