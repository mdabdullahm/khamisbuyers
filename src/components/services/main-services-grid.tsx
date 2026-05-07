"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Sofa, Wind, Refrigerator, Briefcase, Utensils, Home, CheckCircle2 } from 'lucide-react';

const MainServicesGrid = () => {
  const t = useTranslations('MainServices');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const services = [
    { id: 1, title: t('s1Title'), desc: t('s1Desc'), feature: t('s1Feature'), icon: <Sofa size={32} /> },
    { id: 2, title: t('s2Title'), desc: t('s2Desc'), feature: t('s2Feature'), icon: <Wind size={32} /> },
    { id: 3, title: t('s3Title'), desc: t('s3Desc'), feature: t('s3Feature'), icon: <Refrigerator size={32} /> },
    { id: 4, title: t('s4Title'), desc: t('s4Desc'), feature: t('s4Feature'), icon: <Briefcase size={32} /> },
    { id: 5, title: t('s5Title'), desc: t('s5Desc'), feature: t('s5Feature'), icon: <Utensils size={32} /> },
    { id: 6, title: t('s6Title'), desc: t('s6Desc'), feature: t('s6Feature'), icon: <Home size={32} /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs block mb-4"
          >
            {t('subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-slate-900 max-w-2xl leading-tight"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 lg:p-12 bg-slate-50 rounded-[3rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-500"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-500 mb-8 leading-relaxed">
                {service.desc}
              </p>

              {/* Features List (Bullet points) */}
              <div className="pt-8 border-t border-slate-200/60 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                  <p className="text-sm font-bold text-slate-700 leading-relaxed capitalize">
                    {service.feature}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 rounded-2xl border-2 border-slate-200 text-slate-900 font-bold group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                {t('btn')}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MainServicesGrid;