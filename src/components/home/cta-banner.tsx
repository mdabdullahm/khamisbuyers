"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const CtaBanner = () => {
  const t = useTranslations('CTA');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-12 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-900 px-6 py-16 lg:p-20 text-center"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-600 rounded-full blur-[120px] opacity-20 translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-blue-400 mb-8">
              <ShieldCheck size={18} />
              <span className="text-xs lg:text-sm font-bold uppercase tracking-wider">{t('trust')}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-6xl font-black text-white mb-8 leading-tight">
              {t('title')}
            </h2>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-slate-400 mb-12 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
              <a 
                href="https://wa.me/966500000000"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20"
              >
                <MessageCircle size={24} />
                {t('whatsapp')}
              </a>

              <a 
                href="tel:+966500000000"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all shadow-xl"
              >
                <Phone size={24} />
                {t('call')}
                <ArrowRight size={20} className={`hidden lg:block ${isRTL ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;