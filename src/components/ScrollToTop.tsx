"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useLocale } from 'next-intl';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // স্ক্রল পজিশন চেক করার জন্য ফাংশন
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // একদম উপরে যাওয়ার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 z-[99] p-4 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-500/40 hover:bg-slate-900 transition-colors duration-300 ${
            isRTL ? 'left-8' : 'right-8'
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;