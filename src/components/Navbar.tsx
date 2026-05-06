"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
// আমাদের তৈরি করা navigation ফাইল থেকে ইম্পোর্ট করুন
import { Link, usePathname, useRouter } from '@/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isRTL = locale === 'ar';

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    // router.replace অটোমেটিক পাথ ঠিক রেখে ল্যাঙ্গুয়েজ বদলে দিবে
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('brand')}  {/* এখানে সরাসরি লেখার বদলে t('brand') দিন */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {link.name}
              </Link>
            ))}

            <button onClick={toggleLanguage} className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              {locale === 'en' ? 'العربية' : 'English'}
            </button>

            <Link href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition">
              {t('cta')}
            </Link>
          </div>

          {/* Mobile menu logic remains same but use toggleLanguage */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLanguage} className="text-sm border px-2 py-1 rounded">
              {locale === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {/* Icon code... */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;