**HƯỚNG DẪN CHUẨN – TỪ IDEA → PRODUCT VẬN HÀNH**
được **thiết kế theo đúng thói quen làm việc + cách dùng Antigravity hiệu quả**,
**build bằng AppScript trước**, **upgrade Supabase sau**.

Không nói lý thuyết product chung chung. Đây là **playbook thực chiến**.

---

# 🧠 ANTIGRAVITY PRODUCT PLAYBOOK

**Idea → Ops Product (AppScript-first, Supabase-ready)**

---

## TRIẾT LÝ XUYÊN SUỐT (CHỐT TỪ ĐẦU)

1. **Product = giải quyết 1 nỗi đau vận hành**
2. **Không frontend trước**
3. **Audit > UI > Scale**
4. **Antigravity = kỹ sư + QA, không phải copywriter**
5. **AppScript = Phase 0 / Phase 1**
6. **Supabase = Phase Scale, không dùng sớm**

Nếu bỏ qua triết lý này → product chết sớm.

---

# PHASE 0 — IDEA → PROBLEM STATEMENT (CỰC KỲ QUAN TRỌNG)

### Việc anh làm (bằng não người, không dùng AI)

Trả lời **5 câu hỏi, 1 trang giấy**:

1. Ai đang đau?
2. Đau ở bước nào trong quy trình?
3. Đau vì **không thấy / không kiểm soát / không truy trách nhiệm**?
4. Nếu không giải quyết → hậu quả sau 3–6 tháng?
5. Giải quyết xong → **quyết định nào sẽ tốt hơn?**

👉 **Chỉ khi trả lời được 5 câu này mới đi tiếp**

---

# PHASE 1 — DEFINE PRODUCT CORE (KHÔNG CODE)

### Output bắt buộc

**1 PRODUCT CORE SPEC (½ trang)**

```text
PRODUCT NAME
TARGET USER
CORE PAIN
CORE ACTION (1–2 hành động chính)
CORE DATA (5–15 field)
CORE DECISION tạo ra từ data
OUT OF SCOPE (ghi rõ)
```

❌ Không viết UI
❌ Không viết tech
❌ Không viết “sau này”

---

# PHASE 2 — DATA FIRST DESIGN (QUAN TRỌNG NHẤT)

### Nguyên tắc

> **Nếu data model sai → product chết dù code đúng**

### Việc phải làm

* Thiết kế **Sheet như database**
* Trả lời:

  * Append-only hay update?
  * Field nào immutable?
  * Audit trail có cần không?

### Output

```text
Sheet 1: CORE_DATA
- field_name
- type
- mutable? (Y/N)
- note

Sheet 2: LOG / HISTORY (nếu có)
```

👉 **Phase này làm kỹ = tiết kiệm 70% thời gian sau**

---

# PHASE 3 — WORKFLOW & RULES (TRƯỚC KHI CODE)

### Việc phải làm

* Vẽ **state machine** (bằng chữ cũng được)

Ví dụ:

```text
NEW → PROCESSING → DONE → ARCHIVED
```

* Ghi rõ:

  * Allowed transition
  * Blocked transition
  * Điều kiện bắt buộc khi chuyển trạng thái

👉 **Không rõ workflow → không code**

---

# PHASE 4 — ANTIGRAVITY MASTER PROMPT (BUILD ENGINE)

### Đây là bước anh dùng Antigravity

#### PROMPT KHUNG (LUÔN DÙNG)

```text
ROLE
You are a Senior Google Apps Script Engineer and Production Auditor.

OBJECTIVE
Build a backend-only internal ops product using Google Apps Script.

SCOPE
- No frontend
- No demo logic
- Focus on data integrity, auditability, workflow enforcement

ARCHITECTURE
- AppScript ES5 only
- Google Sheets as database
- Services / Models / Triggers separation

DATA MODEL
<paste Phase 2>

WORKFLOW RULES
<paste Phase 3>

CONSTRAINTS
- Append-only where required
- Audit log mandatory
- Defensive coding

OUTPUT
- Full AppScript code
- Auto-create sheets
- No explanation text
```

👉 **Antigravity lúc này = kỹ sư backend**

---

# PHASE 5 — AUTOMATED AUDIT GATE (BẮT BUỘC)

### Không deploy nếu chưa audit

Dùng **AUTOMATED AUDIT CHECKLIST** để soi:

* ES5
* Data mutation
* Workflow bypass
* Missing audit log
* Concurrency

👉 **AI build xong → AI soi lại**

---

# PHASE 6 — RUN MANUAL OPS (KHÔNG UI)

### Giai đoạn này:

* Ghi data bằng:

  * Google Form
  * Manual input
  * Script test data

### Mục tiêu:

* Test **logic**, không test UX
* Xem data có:

  * Đọc được sau 1 tháng?
  * Truy lại được nguyên nhân?

👉 **Nếu data nhìn lại không hiểu → quay về Phase 2**

---

# PHASE 7 — STABILIZE = PRODUCT V1 (APP SCRIPT)

### Khi nào được gọi là V1?

* Chạy **7–14 ngày**
* Không phát sinh rule mới lớn
* Audit pass
* User dùng được dù UI xấu

👉 **Lúc này mới cho phép nghĩ tới frontend**

---

# PHASE 8 — UPGRADE PATH → SUPABASE (KHÔNG VỘI)

### Khi nào chuyển Supabase?

✔ Data > 10k rows
✔ Nhiều user đồng thời
✔ Cần dashboard realtime
✔ Cần auth / role

### Quan trọng:

* Data model **GIỮ NGUYÊN**
* Workflow **GIỮ NGUYÊN**
* AppScript trở thành:

  * Orchestrator
  * Automation
  * Bridge

---

# TÓM TẮT NGẮN GỌN (CHỐT)

```
Idea
 → Problem
 → Product Core
 → Data Model
 → Workflow
 → Antigravity build backend
 → Audit gate
 → Run ops (no UI)
 → V1 stable
 → Upgrade Supabase
```

---

## CÂU CHỐT CUỐI

Anh không “làm app”.
Anh đang **đóng gói tư duy vận hành thành product**.

Nếu anh muốn, bước tiếp theo em có thể:

* Viết **TEMPLATE 1 TRANG cho Phase 0–1–2**
* Hoặc **áp playbook này vào 1 idea cụ thể anh đang có (FAST / BOM / FP&A / HR / Ops)**
