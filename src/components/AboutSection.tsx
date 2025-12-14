import { motion } from 'framer-motion';
import { Language } from '../types/language';
import { translations } from '../data/translations';
import { ArrowRight } from 'lucide-react';
import aboutImg from '../assets/images/about.png';

// 1. Добавляем onReadMore в интерфейс
interface AboutSectionProps {
  language: Language;
  onReadMore: () => void; // <--- НОВОЕ
}

export default function AboutSection({ language, onReadMore }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-uni-primary z-0" />
            <div className="relative z-10 aspect-[4/3] bg-gray-200 shadow-xl">
              <img 
                src={aboutImg} 
                alt="Internationalization" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              {translations.about[language]}
            </h2>
            <div className="w-20 h-1 bg-uni-primary mb-8" />
            
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              {translations.aboutText[language]}
            </p>
            
            {/* 2. Вешаем обработчик onClick */}
            <button 
              onClick={onReadMore}
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-uni-primary hover:text-white px-6 py-3 rounded text-sm font-medium transition-colors uppercase tracking-wider"
            >
              {translations.moreDetails[language]} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}