"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const t = useTranslations('Testimonials');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // রিভিউ ডাটা নিয়ে আসা (৬টি রিভিউ)
  const reviews = t.raw('reviews');

  // ইনফিনিট স্ক্রোলিংয়ের জন্য লিস্টটিকে ডাবল করে নেওয়া
  const scrollingReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs"
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

      {/* Infinite Scrolling Container */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: isRTL ? ["0%", "50%"] : ["0%", "-50%"] }} // আরবির জন্য ডান দিকে, ইংলিশের জন্য বামে
          transition={{ 
            ease: "linear", 
            duration: 30, // কত দ্রুত চলবে (বেশি হলে ধীর হবে)
            repeat: Infinity 
          }}
          whileHover={{ transition: { duration: 60 } }} // মাউস রাখলে অনেক স্লো হয়ে যাবে (বা চাইলে ০ করে থামিয়ে দেওয়া যায়)
        >
          {scrollingReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[350px] lg:w-[450px] bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm shrink-0 flex flex-col justify-between hover:border-blue-200 transition-colors"
              style={{ whiteSpace: 'normal' }} // টেক্সট যাতে র‍্যাপ হয়
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote size={32} className="text-slate-100" />
                </div>

                <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
                  {review.comment}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays (দুই পাশে হালকা শ্যাডো যাতে কার্ডগুলো ভ্যানিশ হয় স্মুথলি) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Testimonials;