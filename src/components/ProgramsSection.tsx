import { motion } from 'framer-motion';
import { Language } from '../types/language';
import { translations } from '../data/translations';
import { Globe, Award, Users, ArrowUpRight } from 'lucide-react';

export default function ProgramsSection({ language }: { language: Language }) {
  const programs = [
    { icon: Globe, title: 'Erasmus+', desc: translations.erasmus[language] },
    { icon: Award, title: 'Болашақ', desc: translations.bolashak[language] },
    { icon: Users, title: 'Exchange', desc: translations.exchange[language] }
  ];

  return (
    <section id="programs" className="py-24 bg-uni-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 border-b border-gray-300 pb-4 flex justify-between items-end">
          <h2 className="text-3xl font-serif font-bold text-gray-900">{translations.programs[language]}</h2>
          <a href="#" className="text-uni-primary text-sm font-bold uppercase tracking-wider">Все программы</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 border-t-4 border-transparent hover:border-uni-primary shadow-sm hover:shadow-md transition-all group"
            >
              <div className="mb-6 flex justify-between items-start">
                <p.icon className="w-8 h-8 text-uni-secondary" />
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-uni-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.desc}</p>
              <button className="text-uni-secondary text-sm font-semibold uppercase group-hover:text-uni-primary">Узнать условия</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}