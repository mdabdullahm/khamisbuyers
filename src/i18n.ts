import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'ar'] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) notFound();

  return {
    locale,
    timeZone: 'UTC',
    messages: (await import(`./leng/${locale}.json`)).default
  };
});
