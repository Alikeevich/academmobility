// components/TestsSection.tsx
import { motion } from 'framer-motion';
import { Language } from '../types/language';
import { translations } from '../data/translations';
import { Download } from 'lucide-react';

export default function TestsSection({ language }: { language: Language }) {
  // Добавил DELF/DALF в список
  const tests = [
    { name: 'IELTS Academic', min: '6.0', desc: translations.ielts[language] },
    { name: 'TOEFL iBT', min: '80', desc: translations.toefl[language] },
    { name: 'Goethe-Zertifikat', min: 'B2', desc: translations.goethe[language] },
    { name: 'DELF/DALF', min: 'B2', desc: translations.delf[language] },
  ];

  return (
    <section id="tests" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
          {translations.tests[language]}
        </h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-sm overflow-hidden"
        >
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-900 text-sm uppercase tracking-wider font-bold">
              <tr>
                <th className="p-4 border-b">Экзамен</th>
                <th className="p-4 border-b">Мин. Балл</th>
                <th className="p-4 border-b hidden md:table-cell">Описание</th>
                <th className="p-4 border-b">Гайд</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {tests.map((t, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-bold text-uni-primary">{t.name}</td>
                  <td className="p-4 font-mono">{t.min}</td>
                  <td className="p-4 hidden md:table-cell">{t.desc}</td>
                  <td className="p-4">
                    <button className="flex items-center gap-1 text-gray-400 hover:text-uni-primary transition">
                      <Download className="w-4 h-4" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}