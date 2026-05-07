"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// ১. এখানে একটি টাইপ ডিফাইন করো
interface FAQItem {
  q: string;
  a: string;
}

const FAQ = () => {
  const t = useTranslations('FAQ');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ২. এখানে 'as FAQItem[]' বলে দাও, তাহলে TypeScript বুঝবে এর ভেতরে কী আছে
  const questions = t.raw('questions') as FAQItem[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm"
          >
            {t('subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-slate-900 mt-4"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {/* ৩. এখন আর 'any' লাগবে না, সরাসরি ম্যাপ করো */}
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-[2rem] overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left outline-none"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <span className={`text-lg lg:text-xl font-bold ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                  {item.q}
                </span>
                <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div 
                      className={`px-6 lg:px-8 pb-8 text-slate-600 text-lg leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {item.a}
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

export default FAQ;