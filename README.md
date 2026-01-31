# 🚀 Vibe Code Template - Standardized Foundation

## 🎯 Triết lý (Philosophy)
Hệ thống này được thiết kế theo tư duy **AI-First & CEO Ownership**:
1.  **AI viết code**: Dev không cần gõ từng dòng boilerplate. AI sẽ đảm nhận việc thực thi dựa trên "Vibe" (ý đồ) và "Standard" (chuẩn mực).
2.  **Người làm chủ nghiệp vụ**: CEO/BA/Architect phải đọc hiểu được logic mà không cần biết quá sâu về kỹ thuật. Code phải thể hiện rõ **TẠI SAO (WHY)** thay vì chỉ **CÁI GÌ (WHAT)**.

## 🛠 Non-Negotiables (Quy tắc bất di bất dịch)
Mọi đóng góp vào codebase này PHẢI tuân thủ:
- **File Header**: Mọi file `.ts`, `.js`, `.md` lớn phải có Header giải thích mục đích kinh doanh.
- **Comment WHY**: Business logic phức tạp phải có comment giải thích lý do tại sao chọn giải pháp đó (Business Intent).
- **Rule Enforcement**: Mọi quy tắc nghiệp vụ phải có ID định danh và Business Intent rõ ràng.
- **No Hardcoding**: Không được hardcode các tham số nghiệp vụ vào logic lõi.

## 🔄 Workflow chuẩn
- `main`: Nhánh ổn định, sẵn sàng sản xuất.
- `feature/[name]`: Nhánh phát triển tính năng mới. Phải passed lint và audit trước khi merge.
- 1 Module = 1 Domain. Mỗi module phải tự đóng gói (Self-contained).

## 📂 Cấu trúc thư mục
- `/src/modules`: Chứa logic nghiệp vụ theo từng Domain.
- `/src/api`: Tầng giao tiếp (Controllers/Gateways).
- `/src/shared`: Các tiện ích dùng chung (Logger, Errors).
- `/templates`: Các mẫu chuẩn để nhân bản nhanh.
- `/docs`: Tài liệu hướng dẫn cho kỹ thuật và người dùng.
