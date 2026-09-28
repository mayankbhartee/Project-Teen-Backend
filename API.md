# TeenSpend API

All `/api` endpoints return `{ success, data, message }`. Protected endpoints require `Authorization: Bearer <token>`.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/register` | Register: `name,email,password,monthly_allowance?` |
| POST | `/auth/login` | Sign in: `email,password` |
| GET | `/auth/me` | Current profile |
| GET/POST | `/expenses` | List (search/category_id/payment_method/from/to/min/max/page) / create expense |
| GET/PUT/DELETE | `/expenses/:id` | Expense detail / update / delete |
| GET/POST | `/budgets`, `/goals` | List / create resource |
| PUT/DELETE | `/budgets/:id`, `/goals/:id` | Update / delete resource |
| GET/PUT | `/settings` | Financial settings |
| GET | `/dashboard` | Dashboard metrics and recent expenses |
| GET | `/analytics/category`, `/analytics/monthly`, `/analytics/weekly`, `/analytics/payment-method`, `/analytics/budget` | Aggregated chart data |
| GET | `/recommendations` | Deterministic spending insights |

Expense body: `category_id, amount, description, expense_date (YYYY-MM-DD), payment_method`, with optional `merchant, notes`. Errors use 401 authentication, 404 resource missing, 409 conflicts, and 422 validation.
