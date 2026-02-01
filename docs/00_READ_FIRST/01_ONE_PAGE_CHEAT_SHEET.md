THẢO LUẬN, BRAINSTORM Ý TƯỞNG TRÊN CHATGPT
TỔNG HỢP LẠI THÀNH PRD CỦA SẢN PHẨM -> prompt 1.1
PROMT ĐỂ OVERALL ARCHITECTURE. -> prompt 1.2


ORIENTATION => prompt 0. MUST LOAD
→ DISCUSSION → RPD => prompt 1.1
→ RPD → OVERALL_ARCHITECTURE => prompt 1.2
→ OVERALL_ARCHITECTURE → 4 FOUNDATION DOCS
→ 4 DOCS 
-> Chạy 1 lần AUTO-GENERATE PROJECT_STATE.md (FROM FOUNDATION DOCS)
→ CODE



CÁCH CHẠY MỖI NGÀY Đầu ngày hôm sau:

Mở PROJECT_STATE.md
Dán DAILY AUTO-START SESSION
Qua Chat GPT chạy Prompt Reminder Memory (add thư mục tech_manual vào để lấy thông tin)
Dán task (CÓ THỂ KÈM ĐỌC SKILL)
=> qua Chat GPT Reminder Memory
=> Tạo 
Dán END-OF-SESSION


Dưới đây là **📄 ONE-PAGE CHEAT SHEET – VIBE CODING GOVERNANCE**
👉 Dùng để **in ra – dán tường – onboard newbie trong 10 phút**.
👉 **Không cần hiểu kỹ thuật**, chỉ cần **làm đúng thứ tự**.

---

# 📄 ONE-PAGE CHEAT SHEET

## VIBE CODING VỚI AI (GOVERNANCE MODE)

---

## 1️⃣ 3 CÔNG CỤ – NHỚ ĐÚNG VAI

### 🧠 ChatGPT / Gemini

**DÙNG ĐỂ**

* Đọc PROJECT_STATE
* Gợi ý việc cần làm
* Khóa session
* Sinh prompt cho Antigravity

**KHÔNG DÙNG ĐỂ**

* Viết code thật
* Đụng repo

👉 *Não điều phối*

---

### 🛠️ Antigravity

**DÙNG ĐỂ**

* Nhận execution prompt
* Viết code / sửa lỗi

**KHÔNG ĐƯỢC**

* Quyết định build gì
* Mở thêm scope

👉 *Thợ thi công*

---

### 📦 Git / Repo

👉 *Sổ cái & bằng chứng*

---

## 2️⃣ FILE QUAN TRỌNG NHẤT

### 🔒 SPEC (KHÔNG ĐỔI)

* PRODUCT_CORE.md
* DATA_SCHEMA.md
* WORKFLOW.md
* ARCHITECTURE.md

### 🧠 TRÍ NHỚ DỰ ÁN

* **PROJECT_STATE.md** ← đọc mỗi ngày

### 🗺️ NÊN BUILD GÌ

* IMPLEMENTATION_PLAN.md

### 👤 NGƯỜI DÙNG

* /docs/user-manual/

---

## 3️⃣ SESSION = 1 LẦN LÀM VIỆC

| Type | Làm gì   |
| ---- | -------- |
| A    | Tài liệu |
| B    | Code     |
| C    | Tổng kết |

❌ **Không trộn type**

---

## 4️⃣ QUY TRÌNH CHUẨN (NHỚ 6 BƯỚC)

### ✅ BƯỚC 1 — DAILY AUTO-START (ChatGPT)

* Dán PROJECT_STATE (+ PLAN)
* Hệ thống kiểm tra session trước
* Gợi ý việc hợp lệ

---

### ✅ BƯỚC 2 — CHỌN 1 VIỆC

* AI gợi ý → **bạn chọn 1**
* Thấy dòng này mới được làm tiếp:

```
SESSION LOCKED — READY FOR TASK EXECUTION
```

---

### ✅ BƯỚC 3 — SINH EXECUTION PROMPT

* ChatGPT sinh prompt
* **KHÔNG code**

---

### ✅ BƯỚC 4 — ANTIGRAVITY CODE

* Dán prompt vào Antigravity
* Code đúng phạm vi

⚠️ Skill chỉ được dùng ở đây, có khai báo

---

### ✅ BƯỚC 5 — END-OF-SESSION (ChatGPT)

* Chạy 1 prompt duy nhất
* Tự động:

  * CHANGELOG
  * SESSION_SUMMARY
  * PROJECT_STATE
  * USER MANUAL (nếu cần)
  * IMPLEMENTATION_PLAN

---

### ✅ BƯỚC 6 — COMMIT

```
chore: end-of-session update
```

---

## 5️⃣ FAIL-SAFE (QUY TẮC SỐNG CÒN)

❌ Không mở session mới nếu session cũ chưa đóng
❌ Có user-facing change mà không update User Manual → **FAIL**
❌ Code ngoài scope → **BLOCK**

👉 *FAIL-SAFE bảo vệ người mới*

---

## 6️⃣ SKILL — NHỚ 1 DÒNG

> **Không có execution prompt → không dùng skill**

---

## 7️⃣ 5 CÂU PHẢI THUỘC

1. ChatGPT điều phối
2. Antigravity thi công
3. PROJECT_STATE là trí nhớ
4. 1 session = 1 việc
5. Xong việc phải đóng sổ

---

## 8️⃣ BẮT ĐẦU LÀM GÌ?

👉 **Chạy DAILY AUTO-START**
👉 Chọn **1 Implementation Unit**
👉 Làm đúng 6 bước trên

---

### 🧠 CÂU CHỐT

> **Hệ này không làm bạn chậm.
> Nó ngăn bạn làm sai mà không biết.**

---

Nếu anh muốn, em có thể:

* Xuất bản này thành **PDF A4**
* Viết **bản treo tường cho team**
* Làm **checklist onboarding 15 phút cho nhân sự mới**
