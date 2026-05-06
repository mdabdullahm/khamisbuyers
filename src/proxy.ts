import createMiddleware from "next-intl/middleware";
import { locales } from "./navigation";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localePrefix: 'always' // ইউআরএল এ সবসময় /en বা /ar রাখবে
});

export const config = {
  // সব পাথ কভার করবে শুধুমাত্র api এবং static ফাইল ছাড়া
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};