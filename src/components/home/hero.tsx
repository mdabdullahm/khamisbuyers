"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle } from 'lucide-react';

const Hero = () => {
  const t = useTranslations('Hero');
  const ts = useTranslations('Stats');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const stats = [
    { label: ts('response'), icon: <CheckCircle size={20} /> },
    { label: ts('coverage'), icon: <CheckCircle size={20} /> },
    { label: ts('speed'), icon: <CheckCircle size={20} /> },
    { label: ts('clients'), icon: <CheckCircle size={20} /> },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Content Area */}
      <div className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co.com/spjw2vYw/male-movers-team-moving-service-600nw-2589221393.webp" 
            alt="Used Furniture"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center lg:text-start">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              {t('title')}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-200 mb-10 leading-relaxed"
            >
              {t('description')}
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/9660539685761"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#EAB308] text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg"
              >
                <MessageCircle size={24} />
                {t('whatsapp')}
              </a>
              <a 
                href="tel:+966053 968 5761"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#064E3B] text-white border border-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-lg"
              >
                <Phone size={24} />
                {t('call')}
              </a>
            </div>

            {/* Phone Number Display */}
            <div className="mt-6 text-white text-2xl font-bold tracking-widest">
                {t('phone')}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar (সাদা রঙের বারটি যা ছবির নিচে আছে) */}
      <div className="bg-white py-6 shadow-xl relative z-20 -mt-10 mx-4 lg:mx-auto max-w-6xl rounded-2xl border border-slate-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-slate-700">
              <span className="text-emerald-600">{stat.icon}</span>
              <span className="text-sm lg:text-base font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;