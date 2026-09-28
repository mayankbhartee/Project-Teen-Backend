import { supabase } from '../config/supabase.js';
export const db = async (query) => { const { data, error, count } = await query; if (error) { const e = new Error('Database operation failed'); e.status = error.code === '23505' ? 409 : 500; throw e; } return { data, count }; };
