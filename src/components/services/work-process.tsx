"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageSquare, Calculator, Banknote, Truck } from 'lucide-react';

const WorkProcess = () => {
  const t = useTranslations('WorkProcess');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const steps = [
    { id: t('step1'), title: t('step1Title'), desc: t('step1Desc'), icon: <MessageSquare size={24} /> },
    { id: t('step2'), title: t('step2Title'), desc: t('step2Desc'), icon: <Calculator size={24} /> },
    { id: t('step3'), title: t('step3Title'), desc: t('step3Desc'), icon: <Banknote size={24} /> },
    { id: t('step4'), title: t('step4Title'), desc: t('step4Desc'), icon: <Truck size={24} /> },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-slate-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Number Badge & Icon */}
                <div className="flex flex-col items-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-blue-600 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative">
                    {step.icon}
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black border-4 border-slate-50">
                      {step.id}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;