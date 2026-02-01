ROLE:
Bạn là Chief Decision Architect + Operations Strategist.
Bạn đang xây dựng một DECISION GOVERNANCE SUITE cho doanh nghiệp vận hành (F&B / QSR / Retail).

Mục tiêu KHÔNG phải code app,
mà là đóng gói tư duy quản trị thành:
- Rule Catalog (luật)
- Decision Engine (máy quyết định)
- Decision Simulator (what-if)

================================
PHẦN 1 – RULE CATALOG (CORE)
================================

Nhiệm vụ:
Xây dựng RULE CATALOG gồm TỐI THIỂU 60 RULE,
chia theo nhóm nghiệp vụ.

Mỗi rule phải theo format CHUẨN:

RULE ID: Rxx
NAME:
BUSINESS INTENT (Vì sao rule tồn tại)
IF (Context + Evidence)
THEN (Flag / Score / Action)
ACTION (CEO / Ops / System phải làm gì)
FAILURE MODE (Nếu data thiếu hoặc sai)
OVERRIDE POLICY (Ai được override, khi nào)
RISK IF WRONG (Nếu rule này sai thì hậu quả gì)

Chia rule thành các nhóm:
1. Attendance & Manpower Stability
2. Task & Execution Reliability
3. Incident & Risk Handling
4. Compliance / Hygiene / 5S
5. Waste / Cost Control
6. Inventory / Equipment
7. Revenue & Anomaly
8. Aggregation & Escalation

Rule phải:
- Không hardcode số
- Không phụ thuộc UI
- Đọc như SOP quản trị

================================
PHẦN 2 – RULE CATALOG OUTPUT
================================

Xuất ra:
- Danh sách đầy đủ 60+ rule
- Dạng markdown hoặc JSON-like dễ parse
- Mỗi rule độc lập, không nhập nhằng

================================
PHẦN 3 – DECISION SIMULATOR (WHAT-IF)
================================

Thiết kế một DECISION SIMULATOR cho CEO.

Mục tiêu:
Cho phép mô phỏng:
- Thay đổi threshold
- Bật / tắt rule
- Thay đổi trọng số
- Giả lập kịch bản xấu / tốt

Simulator phải trả lời được:
1. Rule nào đang kích hoạt?
2. Vì sao quyết định thay đổi?
3. KPI / Flag nào bị ảnh hưởng?
4. Quyết định mới có rủi ro gì?

================================
PHẦN 4 – WHAT-IF SCENARIOS
================================

Tạo sẵn ít nhất 5 kịch bản mẫu:
- Doanh thu giảm 20%
- Thiếu Leader giờ cao điểm
- Waste tăng nhưng không có incident
- Nhân sự mới chiếm >30%
- Một Leader tạo kết quả tốt nhưng rủi ro cao

Mỗi kịch bản phải show:
- Rule triggered
- Decision outcome
- Risk warning
- Suggested action

================================
NGUYÊN TẮC BẮT BUỘC
================================

- Decision phải giải thích được
- Không dùng ML blackbox
- Rule > Model
- CEO đọc là hiểu
- Audit được sau 1 năm

================================
OUTPUT BẮT BUỘC
================================

1. RULE CATALOG v60+
2. Cấu trúc Decision Simulator
3. Mô tả luồng What-if
4. Ví dụ minh hoạ đầy đủ

BẮT ĐẦU THỰC HIỆN.
