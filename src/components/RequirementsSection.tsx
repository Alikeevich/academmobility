import { motion } from 'framer-motion';
import { Language } from '../types/language';
import { translations } from '../data/translations';

export default function RequirementsSection({ language }: { language: Language }) {
  const reqs = [
    { label: "GPA Score", value: "3.0+", text: translations.reqGPA[language] },
    { label: "Language", value: "B2/C1", text: translations.reqLanguage[language] },
    { label: "Document", value: "Letter", text: translations.reqMotivation[language] }
  ];

  return (
    <section className="py-20 bg-uni-secondary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">{translations.requirements[language]}</h2>
          <p className="text-gray-400">Критерии отбора кандидатов</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {reqs.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="pt-8 md:pt-0 px-4"
            >
              <div className="text-uni-accent font-bold text-4xl mb-2 font-serif">{r.value}</div>
              <div className="text-sm uppercase tracking-widest text-gray-400 mb-4">{r.label}</div>
              <p className="text-gray-300 text-sm">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}