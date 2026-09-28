import app from './app.js'; import { env,assertEnvironment } from './config/env.js'; assertEnvironment();app.listen(env.port,()=>console.log(`TeenSpend API listening on ${env.port}`));
