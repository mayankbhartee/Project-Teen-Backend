import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';
export const supabase = createClient(env.supabaseUrl || 'http://invalid.local', env.serviceKey || 'invalid-key', { auth: { persistSession: false } });
