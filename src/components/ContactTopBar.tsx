"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

const ContactTopBar = () => {
  const t = useTranslations('TopBar');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className="bg-slate-900 text-white py-2.5 border-b border-white/10" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          
          {/* Left Side: Info */}
          <div className="flex items-center gap-6 text-[11px] lg:text-xs font-bold uppercase tracking-wider text-slate-400">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-blue-500" />
              <span>{t('hours')}</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin size={14} className="text-blue-500" />
              <span>{t('location')}</span>
            </div>
          </div>

          {/* Right Side: Direct Action Buttons */}
          <div className="flex items-center gap-4 lg:gap-8">
            <a 
              href="tel:+966500000000" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors text-xs lg:text-sm font-black"
            >
              <Phone size={14} className="fill-blue-500 text-blue-500" />
              <span>{t('call')}: +966 50 000 0000</span>
            </a>
            
            <div className="h-3 w-px bg-white/20"></div>

            <a 
              href="https://wa.me/966500000000" 
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-xs lg:text-sm font-black"
            >
              <MessageCircle size={14} className="fill-emerald-500 text-emerald-500" />
              <span className="hidden sm:inline">{t('whatsapp')}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactTopBar;