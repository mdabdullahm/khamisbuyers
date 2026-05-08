"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const ContactFAQ = () => {
  const t = useTranslations('ContactFAQ');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = t.raw('questions') as FAQItem[];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 mb-6"
          >
            <MessageCircle size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">{t('subtitle')}</span>
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900">
            {t('title')}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div 
              key={`contact-faq-${index}`} 
              className={`rounded-[2.5rem] border-2 transition-all duration-300 ${
                openIndex === index ? 'border-blue-600 bg-blue-50/20' : 'border-slate-100 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 lg:p-9 text-left outline-none"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <span className={`text-lg lg:text-xl font-bold ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                  {item.q}
                </span>
                <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className={`px-7 lg:px-9 pb-9 text-slate-600 text-lg leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <div className="pt-4 border-t border-blue-100/50">
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

export default ContactFAQ;