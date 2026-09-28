import { ZodError } from 'zod';
import { fail } from '../utils/api.js';
export const notFound = (req, res) => fail(res, 404, 'Resource not found');
export const errorHandler = (err, req, res, next) => { if (err instanceof ZodError) return fail(res, 422, 'Validation failed', err.issues.map(({ path, message }) => ({ field: path.join('.'), message }))); if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') return fail(res, 401, 'Authentication required'); if (err.status) return fail(res, err.status, err.message); if (process.env.NODE_ENV !== 'test') console.error('Unexpected request error:', err.message); return fail(res, 500, 'Unable to process request'); };
