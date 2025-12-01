import { motion } from 'framer-motion';
import { Language } from '../types/language';
import { translations } from '../data/translations';
import { ArrowRight } from 'lucide-react';
import aboutImg from '../assets/images/about.jpg'; // Импорт картинки

export default function AboutSection({ language }: { language: Language }) {
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
                alt="Students" 
                className="w-full h-full object-cover"
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
            
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              {translations.aboutText[language]}
            </p>
            
            <a href="#" className="inline-flex items-center gap-2 text-uni-primary font-bold hover:underline uppercase tracking-wider text-sm">
              Подробнее о центре <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}