import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
export const authenticate = (req, res, next) => { const token = req.headers.authorization?.replace(/^Bearer\s+/i, ''); if (!token) return res.status(401).json({ success: false, message: 'Authentication required' }); try { req.user = jwt.verify(token, env.jwtSecret); next(); } catch (error) { next(error); } };
