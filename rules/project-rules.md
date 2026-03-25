# Project Rules

## Framework
- Built with Next.js 14 (App Router).
- Uses Server Components and React Server Components.
- API routes are in `app/api/`.

## Styling
- Tailwind CSS is used for styling.
- Custom styles should be added via `globals.css`.
- No inline styles allowed.

## State Management
- Use `React Context` for global state.
- For complex logic, consider Zustand or Redux Toolkit.

## Deployment
- Deploy to Vercel using `vercel.json`.
- CI/CD pipeline runs on every push to `main`.

## Testing
- Unit tests with Jest.
- E2E tests with Playwright.
- Run `npm test` to execute all tests.