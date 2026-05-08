"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, CalendarDays, PhoneForwarded, Circle } from 'lucide-react';

const WorkingHours = () => {
  const t = useTranslations('WorkingHours');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                {t('subtitle')}
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
                {t('title')}
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed mb-10">
                {t('description')}
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 font-bold text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                </span>
                {t('statusOpen')}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Hours Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <div className="space-y-10">
                {/* Regular Hours */}
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <CalendarDays size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-wide">{t('daysTitle')}</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-slate-500 font-bold text-sm mb-1">{t('weekdays')}</p>
                        <p className="text-2xl font-black text-blue-600 tracking-tight">{t('weekdaysTime')}</p>
                      </div>
                      <div className="pt-4 border-t border-slate-50">
                        <p className="text-slate-500 font-bold text-sm mb-1">{t('friday')}</p>
                        <p className="text-2xl font-black text-slate-900 tracking-tight">{t('fridayTime')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Urgent Call Service */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 text-blue-400">
                      <PhoneForwarded size={20} />
                      <span className="font-bold uppercase tracking-widest text-xs">{t('urgentTitle')}</span>
                    </div>
                    <p className="text-lg font-medium leading-relaxed opacity-90">
                      {t('urgentDesc')}
                    </p>
                  </div>
                  {/* Decorative Icon Background */}
                  <PhoneForwarded size={80} className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkingHours;