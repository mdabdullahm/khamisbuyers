// "use client";

// import React from 'react';
// import { useTranslations, useLocale } from 'next-intl';
// import { Link } from '@/navigation';
// import { Phone, MessageCircle, MapPin } from 'lucide-react';

// const FacebookIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
//   <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
//     <path d="M22 12.07C22 6.55 17.52 2 12 2S2 6.55 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.08.18 2.08.18v2.29h-1.17c-1.16 0-1.52.72-1.52 1.46v1.76h2.58l-.41 2.9h-2.17v7.03C18.34 21.19 22 17.06 22 12.07Z" />
//   </svg>
// );

// const InstagramIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
//   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
//     <path d="M16.5 11.99a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
//     <path d="M17.5 6.5h.01" />
//   </svg>
// );

// const TwitterIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
//   <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.88-2.37 8.52 8.52 0 0 1-2.72 1.04 4.26 4.26 0 0 0-7.26 3.88A12.08 12.08 0 0 1 3.15 4.7a4.27 4.27 0 0 0 1.32 5.7 4.22 4.22 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.42 4.18 4.29 4.29 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.97A8.54 8.54 0 0 1 2 19.54a12.06 12.06 0 0 0 6.53 1.91c7.84 0 12.12-6.5 12.12-12.12 0-.18-.01-.37-.02-.55A8.64 8.64 0 0 0 22 5.92Z" />
//   </svg>
// );

// const Footer = () => {
//   const t = useTranslations('Footer');
//   const ts = useTranslations('MainServices'); // আগের তৈরি করা সার্ভিস নামগুলো ব্যবহারের জন্য
//   const locale = useLocale();
//   const isRTL = locale === 'ar';

//   return (
//     <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
//           {/* Column 1: Brand Story */}
//           <div className="space-y-8">
//             <Link href="/" className="text-3xl font-black text-blue-500 tracking-tighter">
//               khamisbuyers
//             </Link>
//             <p className="text-slate-400 leading-relaxed font-medium">
//               {t('about')}
//             </p>
//             <div className="flex gap-4">
//               {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
//                 <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
//                   <Icon size={20} className="group-hover:scale-110 transition-transform" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Column 2: Quick Navigation */}
//           <div>
//             <h4 className="text-xl font-bold mb-8 relative inline-block">
//               {t('links')}
//               <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-blue-600 rounded-full"></span>
//             </h4>
//             <ul className="space-y-4">
//               <li><Link href="/" className="text-slate-400 hover:text-blue-400 font-bold transition-colors">{t('home')}</Link></li>
//               <li><Link href="/about" className="text-slate-400 hover:text-blue-400 font-bold transition-colors">{t('aboutLink')}</Link></li>
//               <li><Link href="/services" className="text-slate-400 hover:text-blue-400 font-bold transition-colors">{t('servicesLink')}</Link></li>
//               <li><Link href="/contact" className="text-slate-400 hover:text-blue-400 font-bold transition-colors">{t('contactLink')}</Link></li>
//             </ul>
//           </div>

//           {/* Column 3: Services (What We Buy) */}
//           <div>
//             <h4 className="text-xl font-bold mb-8 relative inline-block">
//               {t('services')}
//               <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-blue-600 rounded-full"></span>
//             </h4>
//             <ul className="space-y-4 text-slate-400 font-bold">
//               <li className="hover:text-blue-400 transition-colors cursor-pointer">{ts('s1Title')}</li>
//               <li className="hover:text-blue-400 transition-colors cursor-pointer">{ts('s2Title')}</li>
//               <li className="hover:text-blue-400 transition-colors cursor-pointer">{ts('s3Title')}</li>
//               <li className="hover:text-blue-400 transition-colors cursor-pointer">{ts('s5Title')}</li>
//             </ul>
//           </div>

//           {/* Column 4: Contact Information */}
//           <div>
//             <h4 className="text-xl font-bold mb-8 relative inline-block">
//               {t('contact')}
//               <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-blue-600 rounded-full"></span>
//             </h4>
//             <div className="space-y-6">
//               <a href="tel:+966500000000" className="flex items-start gap-4 group">
//                 <div className="p-3 bg-blue-600/10 text-blue-500 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">{t('call')}</p>
//                   <p className="font-black text-lg">+9660539685761</p>
//                 </div>
//               </a>

//               <a href="https://wa.me/9660539685761" className="flex items-start gap-4 group">
//                 <div className="p-3 bg-emerald-600/10 text-emerald-500 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
//                   <MessageCircle size={20} />
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">{t('whatsapp')}</p>
//                   <p className="font-black text-lg">WhatsApp Chat</p>
//                 </div>
//               </a>

//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-white/5 text-slate-400 rounded-xl">
//                   <MapPin size={20} />
//                 </div>
//                 <p className="text-slate-400 font-medium leading-relaxed">
//                   {t('location')}
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Credits Bar */}
//         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-slate-500 text-sm font-bold">
//             © {new Date().getFullYear()} <span className="text-slate-300">khamisbuyers</span>. {t('rights')}
//           </p>
//           <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
//             <span>{t('dev')}</span>
//             <span className="text-blue-500">Md Abdullah</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

// Snapchat এর জন্য কাস্টম SVG আইকন
const SnapchatIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M12 2.75c-4.42 0-8 3.58-8 8 0 .8.12 1.57.34 2.3l-1.09 1.09c-.2.2-.34.46-.34.75 0 .55.45 1 1 1h1.1c.14.73.47 1.4.92 1.95l-.71.71c-.2.2-.34.46-.34.75 0 .55.45 1 1 1h.5c.34.8 1.13 1.36 2.06 1.36h7.12c.93 0 1.72-.56 2.06-1.36h.5c.55 0 1-.45 1-1 0-.29-.14-.55-.34-.75l-.71-.71c.45-.55.78-1.22.92-1.95h1.1c.55 0 1-.45 1-1 0-.29-.14-.55-.34-.75l-1.09-1.09c.22-.73.34-1.5.34-2.3 0-4.42-3.58-8-8-8zm4.5 10.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    <path d="M12 19c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const Footer = () => {
  const t = useTranslations('Footer');
  const ts = useTranslations('MainServices');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const snapchatLink = "https://www.snapchat.com/add/khamisbuyers?share_id=VbsxEKmGX0M&locale=en-GB";

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand Story & Social */}
          <div className="space-y-8">
            <Link href="/" className="text-3xl font-black text-blue-500 tracking-tighter">
              khamisbuyers
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              {t('about')}
            </p>
            <div className="flex gap-4">
              {/* শুধুমাত্র Snapchat বাটন */}
              <a 
                href={snapchatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#FFFC00] text-black font-black hover:bg-white transition-all duration-300 shadow-lg shadow-yellow-500/10 group"
              >
                <SnapchatIcon size={22} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm uppercase tracking-wider">Snapchat</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              {t('links')}
              <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-blue-400 font-bold transition-colors">{t('home')}</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-blue-400 font-bold transition-colors">{t('aboutLink')}</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-blue-400 font-bold transition-colors">{t('servicesLink')}</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-blue-400 font-bold transition-colors">{t('contactLink')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Services (What We Buy) */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              {t('services')}
              <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{ts('s1Title')}</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{ts('s2Title')}</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{ts('s3Title')}</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{ts('s5Title')}</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              {t('contact')}
              <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <div className="space-y-6">
              <a href="tel:+9660539685761" className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-600/10 text-blue-500 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">{t('call')}</p>
                  <p className="font-black text-lg">0539685761</p>
                </div>
              </a>

              <a href="https://wa.me/9660539685761" className="flex items-start gap-4 group">
                <div className="p-3 bg-emerald-600/10 text-emerald-500 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">{t('whatsapp')}</p>
                  <p className="font-black text-lg">WhatsApp Chat</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 text-slate-400 rounded-xl">
                  <MapPin size={20} />
                </div>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {t('location')}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-bold">
            © {new Date().getFullYear()} <span className="text-slate-300">khamisbuyers</span>. {t('rights')}
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
            <span>{t('dev')}</span>
            <span className="text-blue-500 font-black">Md Abdullah</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;