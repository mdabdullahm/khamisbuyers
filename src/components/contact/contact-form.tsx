"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, User, Phone, Tag, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const t = useTranslations('ContactForm');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  // ফর্ম সাবমিট হ্যান্ডলিং (UI ডেমো)
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000); // ৫ সেকেন্ড পর সাকসেস মেসেজ চলে যাবে
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Info & Text */}
          <div className="lg:col-span-5">
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

              {/* Decorative Trust Point */}
              <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-blue-100 shadow-sm">
                <div className="p-4 bg-blue-600 text-white rounded-2xl">
                  <Send size={24} />
                </div>
                <div>
                   <p className="font-bold text-slate-900">24/7 Response</p>
                   <p className="text-sm text-slate-500 font-medium">Get a call back in minutes</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 px-2">
                    <User size={16} className="text-blue-600" />
                    {t('nameLabel')}
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder={t('namePlaceholder')}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 px-2">
                    <Phone size={16} className="text-blue-600" />
                    {t('phoneLabel')}
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder={t('phonePlaceholder')}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                  />
                </div>

                {/* Category Dropdown */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 px-2">
                    <Tag size={16} className="text-blue-600" />
                    {t('subjectLabel')}
                  </label>
                  <select className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-medium appearance-none">
                    <option>Used Furniture</option>
                    <option>Air Conditioners</option>
                    <option>Washing Machines & Fridges</option>
                    <option>Office Furniture</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 px-2">
                    <MessageSquare size={16} className="text-blue-600" />
                    {t('messageLabel')}
                  </label>
                  <textarea 
                    rows={4}
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-medium resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {t('btn')}
                  <Send size={20} className={isRTL ? 'rotate-180' : ''} />
                </button>

                {/* Success Message */}
                {isSent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 text-emerald-600 rounded-xl text-center font-bold"
                  >
                    {t('success')}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;