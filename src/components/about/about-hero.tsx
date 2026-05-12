"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Award, ShieldCheck } from 'lucide-react';

const AboutHero = () => {
  const t = useTranslations('AboutHero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative pt-8 pb-20 bg-slate-50 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform origin-top hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content (Left side in LTR) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 mb-6 shadow-sm">
                <Target size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">{t('badge')}</span>
              </div>

              <h1 className="text-4xl lg:text-7xl font-black text-slate-900 leading-tight mb-8">
                {t('title')} <br />
                <span className="text-blue-600 italic font-serif font-normal">{t('highlight')}</span>
              </h1>

              <p className="text-xl text-slate-600 mb-12 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
                {t('description')}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-4xl font-black text-slate-900 mb-2">{t('experience')}</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{t('experienceSub')}</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 mb-2">{t('deals')}</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{t('dealsSub')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Portrait Image (Right side in LTR) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                {/* Replace with your professional business portrait */}
                <img 
                  src="https://i.ibb.co.com/8VMVMCq/Whats-App-Image-2026-05-12-at-4-46-53-PM.jpg" 
                  alt="MD Abdullah"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating Trust Card */}
              <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-blue-600 text-white p-6 rounded-3xl shadow-xl z-20`}>
                <ShieldCheck size={32} className="mb-2" />
                <p className="text-sm font-bold uppercase tracking-widest">Verified Leader</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;