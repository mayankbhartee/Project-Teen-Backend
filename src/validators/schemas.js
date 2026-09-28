import { z } from 'zod';
const money = z.coerce.number().positive().max(10000000);
export const registerSchema = z.object({ name: z.string().trim().min(2).max(80), email: z.string().trim().email(), password: z.string().min(8).max(128), monthly_allowance: z.coerce.number().nonnegative().optional() });
export const loginSchema = z.object({ email: z.string().trim().email(), password: z.string().min(1).max(128) });
export const expenseSchema = z.object({ category_id: z.string().uuid(), amount: money, description: z.string().trim().min(1).max(160), expense_date: z.string().date(), merchant: z.string().trim().max(100).optional().nullable(), payment_method: z.enum(['Cash', 'UPI', 'Debit Card', 'Credit Card', 'Bank Transfer', 'Other']), notes: z.string().trim().max(1000).optional().nullable() });
export const budgetSchema = z.object({ category_id: z.string().uuid(), amount: money, period: z.enum(['monthly']).default('monthly'), start_date: z.string().date(), end_date: z.string().date() });
export const goalSchema = z.object({ name: z.string().trim().min(2).max(100), target_amount: money, current_amount: z.coerce.number().nonnegative(), deadline: z.string().date().optional().nullable() }).refine((v) => v.current_amount <= v.target_amount, { message: 'Current amount cannot exceed target', path: ['current_amount'] });
export const settingsSchema = z.object({ monthly_allowance: z.coerce.number().nonnegative(), monthly_income: z.coerce.number().nonnegative().optional(), savings_target_percentage: z.coerce.number().min(0).max(100), currency: z.string().length(3).default('INR') });
