"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Truck, Sparkles } from 'lucide-react';

const ServicesWhyChoose = () => {
  const t = useTranslations('ServicesWhy');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const reasons = [
    { id: 1, title: t('reason1'), desc: t('desc1'), icon: <Search size={32} />, color: "text-blue-600", bg: "bg-blue-50" },
    { id: 2, title: t('reason3'), desc: t('desc3'), icon: <ShieldCheck size={32} />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { id: 3, title: t('reason2'), desc: t('desc2'), icon: <Truck size={32} />, color: "text-amber-600", bg: "bg-amber-50" },
    { id: 4, title: t('reason4'), desc: t('desc4'), icon: <Sparkles size={32} />, color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            {t('subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-8 lg:p-12 rounded-[3rem] bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100/20 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Icon Box */}
                <div className={`w-20 h-20 shrink-0 rounded-3xl ${reason.bg} ${reason.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  {reason.icon}
                </div>
                
                {/* Text Content */}
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesWhyChoose;