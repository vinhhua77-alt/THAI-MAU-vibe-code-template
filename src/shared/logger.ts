/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Cung cấp công cụ ghi log tập trung để theo dõi hành vi hệ thống.
 * BUSINESS CONTEXT: Cần thiết cho việc debug và kiểm định (audit) quy trình kinh doanh.
 */

export const Logger = {
    info: (message: string, context?: any) => {
        console.log(`[INFO] [${new Date().toISOString()}] ${message}`, context || '');
    },
    error: (message: string, error?: any) => {
        console.error(`[ERROR] [${new Date().toISOString()}] ${message}`, error || '');
    },
    warn: (message: string, context?: any) => {
        console.warn(`[WARN] [${new Date().toISOString()}] ${message}`, context || '');
    }
};
