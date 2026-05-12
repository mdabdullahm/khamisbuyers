"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { PhoneCall, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const SellProductCTA = () => {
  const t = useTranslations('SellCTA');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-12 lg:py-24 px-4 bg-white">
      <div className="max-w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3.5rem] bg-slate-900 overflow-hidden px-8 py-16 lg:py-24 text-center lg:text-start"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-400 mb-6 font-bold uppercase tracking-widest text-xs lg:text-sm">
                <ShieldCheck size={20} />
                {t('trustText')}
              </div>
              
              <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-8">
                {t('title')}
              </h2>
              
              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl">
                {t('subtitle')}
              </p>
            </div>

            {/* Action Side */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a 
                href="tel:+9660539685761"
                className="group flex items-center justify-between bg-white text-slate-900 px-8 py-6 rounded-3xl font-black text-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <PhoneCall size={24} />
                  {t('phoneBtn')}
                </div>
                <ArrowRight size={20} className={`hidden sm:block transition-transform group-hover:translate-x-2 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
              </a>

              <a 
                href="https://wa.me/9660539685761"
                className="flex items-center justify-center gap-4 bg-emerald-600 text-white px-8 py-6 rounded-3xl font-black text-xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-900/20"
              >
                <MessageCircle size={24} />
                {t('whatsappBtn')}
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SellProductCTA;