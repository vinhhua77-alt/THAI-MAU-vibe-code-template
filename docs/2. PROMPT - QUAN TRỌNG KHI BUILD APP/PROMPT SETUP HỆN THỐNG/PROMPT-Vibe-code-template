ROLE:
Bạn là Senior Software Architect + Business Analyst.
Nhiệm vụ của bạn là tạo một TEMPLATE CODEBASE CHUẨN HOÁ để làm nền tảng cho mọi dự án sau này.

MỤC TIÊU CUỐI:
Tạo ra MỘT THƯ MỤC TEMPLATE HOÀN CHỈNH, có thể:
- Đưa thẳng lên GitHub làm Template Repository
- Ép AI và Dev code đúng chuẩn ngay từ ngày 1
- Phù hợp với vibe coding + CEO ownership
- Không phụ thuộc framework cụ thể

========================
PHẠM VI CÔNG VIỆC
========================

1. TẠO CẤU TRÚC THƯ MỤC GỐC

Tạo một thư mục gốc tên là:
vibe-code-template/

Bên trong phải có đầy đủ các thư mục và file sau:

/src
  /modules
    /example-domain
      example.service.ts
      example.repo.ts
      example.rules.ts
      example.types.ts
      index.ts

  /api
    example.controller.ts

  /shared
    logger.ts
    errors.ts

  /config
    app.config.ts

/docs
  /tech-manual
    example-domain.md

  /user-manual
    example-domain.md

/templates
  FILE_HEADER.md
  SERVICE_TEMPLATE.ts
  RULE_TEMPLATE.ts
  API_TEMPLATE.ts

Ngoài ra ở root phải có:
README.md
.gitignore
.editorconfig
package.json
tsconfig.json

========================
2. YÊU CẦU NỘI DUNG FILE
========================

A. README.md
- Giải thích triết lý:
  - AI viết code
  - Người hiểu nghiệp vụ làm chủ hệ thống
- Non-negotiables:
  - Mọi file phải có File Header
  - Business logic phải có comment WHY
  - Rule phải có ID + Business Intent
- Workflow chuẩn: main / feature-*

B. FILE_HEADER.md
- Template comment cho đầu mỗi file
- Bắt buộc có:
  - BUSINESS PURPOSE
  - BUSINESS CONTEXT
  - INPUT / OUTPUT
  - NON-GOALS
  - ASSUMPTIONS
  - CHANGE RISK

C. SERVICE_TEMPLATE.ts
- Có ví dụ function nghiệp vụ
- Comment giải thích:
  - BUSINESS LOGIC
  - WHY THIS EXISTS
  - EDGE CASES
- Phân biệt rõ business vs technical

D. RULE_TEMPLATE.ts
- Có RULE ID
- BUSINESS INTENT
- INPUT SIGNALS
- OUTPUT
- OVERRIDE POLICY
- FAILURE MODE

E. API_TEMPLATE.ts
- ENDPOINT PURPOSE
- BUSINESS FLOW
- VALIDATION
- SIDE EFFECT

F. example-domain (code mẫu)
- Code đơn giản nhưng đúng chuẩn
- Comment tập trung giải thích Ý NGHĨA & LÝ DO
- Không cần logic phức tạp

G. docs/
- tech-manual: mô tả logic kỹ thuật + rule + edge cases
- user-manual: mô tả flow nghiệp vụ, không technical

========================
3. NGUYÊN TẮC BẮT BUỘC
========================

- Không hardcode business rule
- Comment để giải thích WHY, không chỉ WHAT
- Viết như thể người đọc là CEO / BA sau 6 tháng
- Mỗi file đều phải đọc hiểu được mà không cần mở file khác
- Không dùng framework cụ thể (React/Nest/etc)

========================
4. OUTPUT BẮT BUỘC
========================

- In ra CÂY THƯ MỤC HOÀN CHỈNH
- In ra NỘI DUNG TỪNG FILE (đầy đủ, không rút gọn)
- Giữ cấu trúc rõ ràng để tôi có thể copy từng file ra dùng ngay

========================
5. CHẤT LƯỢNG KỲ VỌNG
========================

- Đây là TEMPLATE GỐC cho toàn bộ hệ thống
- Không được làm sơ sài
- Phải đủ tốt để dùng 2–3 năm không cần đập lại

BẮT ĐẦU THỰC HIỆN.
