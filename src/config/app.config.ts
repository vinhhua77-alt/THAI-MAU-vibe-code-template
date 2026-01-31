/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Quản lý các tham số cấu hình của ứng dụng.
 * BUSINESS CONTEXT: Tách biệt cấu hình khỏi code để dễ dàng thay đổi theo môi trường (Dev/Staging/Prod).
 */

export const AppConfig = {
    APP_NAME: 'Vibe Code Application',
    VERSION: '1.0.0',
    ENV: process.env.NODE_ENV || 'development',

    // Business Constants (mẫu)
    LIMITS: {
        MAX_DAILY_TRANSACTION: 100000000, // 100M VND
    }
};
