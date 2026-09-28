import { supabase } from '../config/supabase.js'; import { db } from './base.js';
export const getCategories = () => db(supabase.from('categories').select('*').order('name'));
