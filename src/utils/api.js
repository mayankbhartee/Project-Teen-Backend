export const ok = (res, data, message = 'Success', status = 200) => res.status(status).json({ success: true, data, message });
export const fail = (res, status, message, error) => res.status(status).json({ success: false, message, ...(error && { error }) });
