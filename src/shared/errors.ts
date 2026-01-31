/**
 * @FILE_HEADER
 * BUSINESS PURPOSE: Định nghĩa các loại lỗi nghiệp vụ và kỹ thuật.
 * BUSINESS CONTEXT: Giúp hệ thống phản hồi lỗi một cách nhất quán và có ý nghĩa cho người dùng.
 */

export class BusinessError extends Error {
    constructor(
        public readonly code: string,
        public readonly message: string,
        public readonly details?: any
    ) {
        super(message);
        this.name = 'BusinessError';
    }
}

export class TechnicalError extends Error {
    constructor(
        public readonly message: string,
        public readonly originalError?: any
    ) {
        super(message);
        this.name = 'TechnicalError';
    }
}
