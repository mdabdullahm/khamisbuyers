"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { CircleDollarSign, Zap, Truck, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const t = useTranslations('WhyChoose');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const reasons = [
    {
      id: 1,
      title: t('reason1'),
      desc: t('desc1'),
      icon: <CircleDollarSign size={40} className="text-emerald-600" />,
      color: "bg-emerald-50",
    },
    {
      id: 2,
      title: t('reason2'),
      desc: t('desc2'),
      icon: <Zap size={40} className="text-amber-500" />,
      color: "bg-amber-50",
    },
    {
      id: 3,
      title: t('reason3'),
      desc: t('desc3'),
      icon: <Truck size={40} className="text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      id: 4,
      title: t('reason4'),
      desc: t('desc4'),
      icon: <ShieldCheck size={40} className="text-indigo-600" />,
      color: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs"
          >
            {t('subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-slate-900 mt-4 leading-tight"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-100 flex flex-col md:flex-row items-start gap-6 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div className={`shrink-0 w-20 h-20 rounded-3xl ${reason.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                {reason.icon}
              </div>

              {/* Text Container */}
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;