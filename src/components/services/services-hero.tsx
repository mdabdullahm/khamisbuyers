"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Settings, CheckCircle, ArrowDown } from 'lucide-react';

const ServicesHero = () => {
  const t = useTranslations('ServicesHero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative pt-10 pb-20 bg-white overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white mb-8 shadow-lg shadow-blue-200"
          >
            <Settings size={16} className="animate-spin-slow" />
            <span className="text-xs font-bold uppercase tracking-widest">{t('badge')}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8"
          >
            {t('title')} <br />
            <span className="text-blue-600 italic">{t('highlight')}</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-500 mb-12 leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* Service Trust Points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {t('trust').split('.').map((point, index) => point && (
              <div key={index} className="flex items-center gap-2 text-slate-700 font-bold">
                <CheckCircle size={18} className="text-emerald-500" />
                <span>{point.trim()}</span>
              </div>
            ))}
          </motion.div>

          {/* Scroll Down Button */}
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-4 text-slate-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">{t('cta')}</span>
            <div className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
              <ArrowDown size={20} className="animate-bounce" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-40 -z-10"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-indigo-100 rounded-full blur-[100px] opacity-40 -z-10"></div>
    </section>
  );
};

export default ServicesHero;