=== CONTEXT RECALL SUMMARY ===

1. **Current Objective**

   * Chuẩn hoá **toàn bộ governance flow cho dự án vibe coding với AI**: từ kiến trúc → session execution → end-of-session → documentation (Tech + User Manual) → state management, để AI code/sửa lỗi **không phá luật, không trôi scope**.

2. **Current Phase / Stage**

   * **Phase 0 hoàn tất (Architecture & Governance setup)**
   * Đang ở **giai đoạn chốt & khóa bộ PROMPT GOVERNANCE + PROJECT_STATE lifecycle**, **chưa vào implementation thực tế**.

3. **Key Decisions Locked**

   * Dự án vận hành theo **Session Type A / B / C**.
   * **PROJECT_STATE.md** là *working memory duy nhất* của dự án.
   * PROJECT_STATE.md:

     * Sinh **1 lần duy nhất** sau khi lock 4 foundation docs.
     * Sau đó **chỉ được update**, không recreate.
   * Mỗi session:

     * **Bắt buộc có START (orientation + lock)**.
     * **Bắt buộc có END-OF-SESSION**.
   * **User Manual là artefact bắt buộc**, không để dồn cuối dự án.

     * Nếu có *user-facing change* → **User Manual phải update trong session đó**.
     * Nếu không update → **SESSION FAIL**.
   * User Manual file structure **đã khóa** và được đưa vào **Section 2 – Locked Source of Truth** của PROJECT_STATE.md.
   * ChatGPT/Gemini **không code**, chỉ sinh **Execution Prompt cho Antigravity** (code / bug / refactor).

4. **Existing Artifacts**

   **Foundation & State**

   * PRODUCT_CORE.md
   * DATA_SCHEMA.md
   * WORKFLOW.md
   * ARCHITECTURE.md
   * PROJECT_STATE.md (initialize + update lifecycle)

   **Governance Prompts**

   * DAILY ORIENTATION from PROJECT_STATE
   * AUTO-START SESSION (orient + classify + lock)
   * END-OF-SESSION AUTO GOVERNANCE (standardized, có User Manual Enforcement Gate)
   * AUTO-GENERATE PROJECT_STATE.md (run once)

   **Prompt Generator (Meta layer)**

   * Generate Antigravity Execution Prompt (code / fix)
   * BUG REPORT → EXECUTION PROMPT
   * REFACTOR REQUEST → EXECUTION PROMPT

   **User Manual**

   * Locked structure:

     * /docs/user-manual/README.md
     * OVERVIEW.md
     * DAILY_OPERATIONS.md
     * STATES_AND_RULES.md
     * EXCEPTIONS_AND_ERRORS.md
     * FAQ.md

5. **In-Scope Now**

   * Nhớ lại & đồng bộ ngữ cảnh (context recall).
   * Kiểm tra xem governance flow + prompt set **đã đủ và khớp logic chưa**.
   * Chuẩn bị **chuyển sang task thực tế (implementation)** bằng prompt generator.

6. **Out-of-Scope**

   * Viết code cụ thể.
   * Thêm feature mới.
   * Redesign workflow hoặc kiến trúc.
   * Thảo luận nghiệp vụ mới ngoài foundation docs.

7. **Next Expected Action**

   * **Xác nhận context đã aligned**, sau đó **bắt đầu session đầu tiên TYPE B (Implementation)** bằng:

     * DAILY ORIENTATION
     * AUTO-START SESSION
     * Dùng *Prompt Generator → Antigravity Execution Prompt* cho task cụ thể.

---

CONTEXT ALIGNED — READY TO CONTINUE
