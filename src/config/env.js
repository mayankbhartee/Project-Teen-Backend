import 'dotenv/config';
const required = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY', 'JWT_SECRET'];
export const env = Object.freeze({ port: Number(process.env.PORT || 5000), nodeEnv: process.env.NODE_ENV || 'development', supabaseUrl: process.env.SUPABASE_URL, serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY, jwtSecret: process.env.JWT_SECRET, clientUrl: process.env.CLIENT_URL || 'http://localhost:5173' });
export const assertEnvironment = () => { const missing = required.filter((key) => !process.env[key]); if (missing.length) throw new Error(`Missing environment variables: ${missing.join(', ')}`); };
