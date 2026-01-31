# 📖 User Manual: Quy trình đăng ký Example

## 1. Mục đích
Tài liệu hướng dẫn nhân viên cách tạo và quản lý các bản ghi "Example" trong hệ thống.

## 2. Luồng nghiệp vụ (Business Flow)
1. **Khởi tạo**: Người dùng nhập tên và số tiền muốn đăng ký.
2. **Kiểm tra tự động**:
    - Hệ thống sẽ từ chối nếu số tiền không hợp lệ (số âm hoặc bằng 0).
    - Nếu số tiền lớn hơn 50,000,000 VND, hệ thống sẽ tự động gắn cờ "Giao dịch lớn" để kế toán kiểm tra lại sau.
3. **Hoàn tất**: Sau khi lưu thành công, bạn sẽ nhận được một Mã định danh (ID) duy nhất.

## 3. Câu hỏi thường gặp (FAQs)
- **Tại sao tôi không thể nhập số tiền bằng 0?**
    - Quy định nghiệp vụ yêu cầu mọi giao dịch phải có giá trị thực tế.
- **Tôi có cần làm gì thêm khi có cảnh báo "Giao dịch lớn"?**
    - Không, hệ thống chỉ ghi nhận để báo cáo. Bạn vẫn có thể tiếp tục làm việc bình thường.

## 4. Hỗ trợ
Nếu gặp lỗi hệ thống, vui lòng chụp lại màn hình có kèm **Mã lỗi (Code)** và gửi cho bộ phận IT.
