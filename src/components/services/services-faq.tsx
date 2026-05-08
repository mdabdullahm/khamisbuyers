"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

// টাইপ ডিফাইন করা
interface FAQItem {
  q: string;
  a: string;
}

const ServicesFAQ = () => {
  const t = useTranslations('ServicesFAQ');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // টাইপ কাস্টিং করা যাতে এরর না আসে
  const questions = t.raw('questions') as FAQItem[];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6"
          >
            <HelpCircle size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">{t('subtitle')}</span>
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
            {t('title')}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div 
              key={`services-faq-${index}`} 
              className={`rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${
                openIndex === index ? 'bg-white border-blue-100 shadow-xl shadow-blue-100/20' : 'bg-transparent border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 lg:p-10 text-left outline-none"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                  {item.q}
                </span>
                <div className={`shrink-0 ml-4 w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-white text-slate-400'
                }`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div 
                      className={`px-8 lg:px-10 pb-10 text-slate-500 text-lg leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <div className="pt-4 border-t border-slate-50">
                        {item.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesFAQ;