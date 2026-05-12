// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { useTranslations, useLocale } from 'next-intl';
// import { Link, usePathname, useRouter } from '@/navigation';
// import { Globe, ChevronDown, Menu, X, Check } from 'lucide-react';
// import Image from 'next/image';

// const Navbar = () => {
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const t = useTranslations('Navbar');
//   const locale = useLocale();
//   const pathname = usePathname();
//   const router = useRouter();
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const isRTL = locale === 'ar';

//   const handleLanguageChange = (nextLocale: 'en' | 'ar') => {
//     router.replace(pathname, { locale: nextLocale });
//     setIsLangOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   const navLinks = [
//     { name: t('home'), href: '/' },
//     { name: t('about'), href: '/about' },
//     { name: t('services'), href: '/services' },
//     { name: t('contact'), href: '/contact' },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm" dir={isRTL ? 'rtl' : 'ltr'}>
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">

//           {/* 1. Logo */}
//           <Link href="/" className="flex items-center gap-2 shrink-0 relative z-[110]">
//             {/* লোগো ইমেজ: মোবাইলে একটু ছোট (h-8) এবং বড় স্ক্রিনে (h-10) হবে */}
//             <Image
//               src="/navlogo.png"
//               alt={t('brand')}
//               width={160}
//               height={50}
//               className="h-8 sm:h-10 w-auto object-contain rounded-full"
//               priority
//             />

//             {/* ব্র্যান্ডের নাম: মোবাইলে এবং কম্পিউটারে সবখানে দেখাবে */}
//             <span className="text-lg sm:text-xl font-black text-blue-600 uppercase tracking-tighter block">
//               {t('brand')}
//             </span>
//           </Link>

//           {/* 2. Desktop Navigation Links (Center) */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 font-medium transition">
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* 3. Right Side (Language Switcher + CTA Button) */}
//           <div className="flex items-center gap-3">

//             {/* Language Switcher (তোমার দেওয়া ছবির মতো ডিজাইন) */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setIsLangOpen(!isLangOpen)}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-[#f0f7ff] border border-blue-100 rounded-full text-blue-600 hover:bg-blue-100 transition"
//               >
//                 <Globe size={18} />
//                 <span className="uppercase font-bold text-sm">{locale}</span>
//                 <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
//               </button>

//               {isLangOpen && (
//                 <div className={`absolute top-full mt-2 w-36 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 overflow-hidden ${isRTL ? 'left-0' : 'right-0'}`}>
//                   <button onClick={() => handleLanguageChange('en')} className={`w-full px-4 py-2.5 text-sm flex items-center justify-between hover:bg-slate-50 ${locale === 'en' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}>
//                     English {locale === 'en' && <Check size={14} />}
//                   </button>
//                   <button onClick={() => handleLanguageChange('ar')} className={`w-full px-4 py-2.5 text-sm flex items-center justify-between hover:bg-slate-50 ${locale === 'ar' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}>
//                     العربية {locale === 'ar' && <Check size={14} />}
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* CTA Button (ডেস্কটপে দৃশ্যমান) */}
//             <Link
//               href="#contact"
//               className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition shadow-md"
//             >
//               {t('cta')}
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 text-slate-600 focus:outline-none"
//             >
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (স্লাইডিং মেনু) */}
//       <div className={`fixed inset-0 top-20 bg-white z-[90] transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : (isRTL ? 'translate-x-full' : '-translate-x-full')}`}>
//         <div className="flex flex-col p-6 gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-xl font-semibold text-slate-800 border-b border-slate-50 pb-4"
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Mobile CTA */}
//           <Link
//             href="#contact"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-center text-lg"
//           >
//             {t('cta')}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigation';
import { Globe, ChevronDown, Menu, X, Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // অ্যানিমেশনের জন্য ইম্পোর্ট

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname(); // বর্তমান পেজের পাথ জানার জন্য
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isRTL = locale === 'ar';

  const handleLanguageChange = (nextLocale: 'en' | 'ar') => {
    router.replace(pathname, { locale: nextLocale });
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* 1. Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 relative z-[110]">
            <Image
              src="/navlogo.png"
              alt={t('brand')}
              width={160}
              height={50}
              className="h-8 sm:h-10 w-auto object-contain rounded-full"
              priority
            />
            <span className="text-lg sm:text-xl font-black text-blue-600 uppercase tracking-tighter block">
              {t('brand')}
            </span>
          </Link>

          {/* 2. Desktop Navigation Links (Center) */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => {
              // চেক করছি এই লিঙ্কটি কি বর্তমানে একটিভ?
              const isActive = pathname === link.href;
              
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`relative h-full flex items-center text-sm font-bold transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  {link.name}
                  
                  {/* Active Border Bottom (অ্যানিমেটেড) */}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-7 left-0 right-0 h-[2px]  bg-blue-600 rounded-t-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* 3. Right Side (Language Switcher + CTA Button) */}
          <div className="flex items-center gap-3">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#f0f7ff] border border-blue-100 rounded-full text-blue-600 hover:bg-blue-100 transition"
              >
                <Globe size={18} />
                <span className="uppercase font-bold text-sm">{locale}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className={`absolute top-full mt-2 w-36 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 overflow-hidden ${isRTL ? 'left-0' : 'right-0'}`}>
                  <button onClick={() => handleLanguageChange('en')} className={`w-full px-4 py-2.5 text-sm flex items-center justify-between hover:bg-slate-50 ${locale === 'en' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}>
                    English {locale === 'en' && <Check size={14} />}
                  </button>
                  <button onClick={() => handleLanguageChange('ar')} className={`w-full px-4 py-2.5 text-sm flex items-center justify-between hover:bg-slate-50 ${locale === 'ar' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}>
                    العربية {locale === 'ar' && <Check size={14} />}
                  </button>
                </div>
              )}
            </div>

            <Link
              href="#contact"
              className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition shadow-md"
            >
              {t('cta')}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (স্লাইডিং মেনু) */}
      <div className={`fixed inset-0 top-20 bg-white z-[90] transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : (isRTL ? 'translate-x-full' : '-translate-x-full')}`}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-bold border-b border-slate-50 pb-4 transition-colors ${isActive ? 'text-blue-600 border-blue-100' : 'text-slate-800'}`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-center text-lg"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;