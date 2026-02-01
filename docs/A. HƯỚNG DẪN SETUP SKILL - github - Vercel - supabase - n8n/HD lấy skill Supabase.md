# KÉO SUPABASE ĐÚNG CÁCH (FEATURE-ONLY)

## 1. MỤC TIÊU RÕ

* ❌ Không deploy
* ❌ Không ảnh hưởng DB prod
* ✅ Có schema + migration để code & review
* ✅ Đưa lên **feature branch**

---

## 2. SETUP 1 LẦN DUY NHẤT (LOCAL)

### Cài Supabase CLI

```bash
npm install -g supabase
```

### Login

```bash
supabase login
```

---

## 3. LINK PROJECT SUPABASE (KHÔNG ĐỘNG DB)

```bash
supabase link --project-ref <PROJECT_REF>
```

> `<PROJECT_REF>` lấy trong dashboard của Supabase

👉 Lệnh này **chỉ link**, **không pull data**, **không migrate**.

---

## 4. KÉO SCHEMA VỀ LOCAL (AN TOÀN)

```bash
supabase db pull
```

Kết quả:

```
supabase/
 └─ migrations/
    └─ 20260201_123456_remote_schema.sql
```

✅ Chỉ là file SQL
❌ Chưa apply gì hết

---

## 5. LÀM FEATURE (CHUẨN)

### Tạo feature branch

```bash
git checkout -b feature/supabase-shiftlog-v1
```

### Chỉnh schema / thêm table

```bash
supabase migration new shiftlog_raw_v1
```

Edit file migration:

```sql
create table raw_shiftlog (
  id uuid primary key,
  store_id uuid,
  user_id uuid,
  checkin_at timestamptz,
  checkout_at timestamptz,
  created_at timestamptz default now()
);
```

---

## 6. TEST LOCAL (KHUYẾN NGHỊ)

```bash
supabase start
supabase db reset
```

👉 Test bằng local Supabase
👉 **Không đụng prod**

---

## 7. ĐƯA LÊN FEATURE (KHÔNG DEPLOY)

```bash
git add .
git commit -m "feat(db): raw_shiftlog schema v1"
git push origin feature/supabase-shiftlog-v1
```

🎯 **DỪNG Ở ĐÂY**

* Có code
* Có migration
* Có history
* Chưa deploy

---

## 8. KHI NÀO MỚI ĐỤNG PROD?

Chỉ khi anh **chủ động**:

```bash
supabase db push
```

⚠️ Lệnh này **KHÔNG BAO GIỜ chạy trong feature branch**.

---

## 9. FLOW 1 DÒNG (NHỚ)

```
supabase db pull
→ edit migration
→ git push feature/*
→ review
→ (quyết định sau) supabase db push
```

---

## 10. RULE CHỐT (DÁN SOP)

```text
- supabase db pull: được phép
- supabase db push: cấm nếu chưa release
- Feature branch = schema draft
- Prod chỉ đổi khi merge + quyết định rõ ràng
```

---

Nếu anh muốn:

* Tôi viết **SOP Supabase 1 trang cho team**
* Hoặc setup **DEV / STAGING / PROD Supabase tách hẳn**
* Hoặc gắn **AI đọc migration để phân tích impact**

Nói 1 câu, tôi làm tiếp.
