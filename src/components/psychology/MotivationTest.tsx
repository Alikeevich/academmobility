import { useState } from 'react';
import { MOTIVATION_TEST } from '../../data/psychologyData';
import { motion } from 'framer-motion';
import { Language } from '../../types/language';

export default function MotivationTest({ language }: { language: Language }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<{ VM: number; VPM: number; VOM: number; msg: string } | null>(null);

  // Локализация интерфейса
  const ui = {
    calc: { ru: "Получить результат", kk: "Нәтижені алу", en: "Get Result" },
    restart: { ru: "Пройти заново", kk: "Қайта өту", en: "Restart" },
    internal: { ru: "Внутренняя", kk: "Ішкі", en: "Internal" },
    externalP: { ru: "Внешняя (+)", kk: "Сыртқы (+)", en: "External (+)" },
    externalM: { ru: "Внешняя (-)", kk: "Сыртқы (-)", en: "External (-)" },
    qTitle: { ru: "Вопрос", kk: "Сұрақ", en: "Question" }
  };

  const calculateResult = () => {
    const VM = ((answers[6] || 0) + (answers[7] || 0)) / 2;
    const VPM = ((answers[1] || 0) + (answers[2] || 0) + (answers[5] || 0)) / 3;
    const VOM_avg = ((answers[3] || 0) + (answers[4] || 0)) / 2;

    let msg = "";
    const messages = {
      optimal: {
        ru: "Оптимальный комплекс! Вами движет интерес к делу.",
        kk: "Оңтайлы кешен! Сізді іске деген қызығушылық жетелейді.",
        en: "Optimal complex! You are driven by interest in the work."
      },
      worst: {
        ru: "Негативный комплекс. Преобладает страх.",
        kk: "Жағымсыз кешен. Қорқыныш басым.",
        en: "Negative complex. Fear prevails."
      },
      middle: {
        ru: "Промежуточный комплекс. Мотивы смешаны.",
        kk: "Аралық кешен. Мотивтер аралас.",
        en: "Intermediate complex. Motives are mixed."
      }
    };

    if (VM > VPM && VPM > VOM_avg) msg = messages.optimal[language];
    else if (VOM_avg > VPM && VPM > VM) msg = messages.worst[language];
    else msg = messages.middle[language];

    setResult({ VM, VPM, VOM: VOM_avg, msg });
  };

  // Выбираем правильный заголовок и описание на основе языка
  // Если вдруг данных нет, используем заглушку
  const title = MOTIVATION_TEST.title[language] || MOTIVATION_TEST.title['ru'];
  const desc = MOTIVATION_TEST.description[language] || MOTIVATION_TEST.description['ru'];
  const instr = MOTIVATION_TEST.instruction[language] || MOTIVATION_TEST.instruction['ru'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-uni-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-6">{desc}</p>
      <p className="text-xs text-gray-400 mb-4 italic">{instr}</p>

      {!result ? (
        <div className="space-y-6">
          {MOTIVATION_TEST.questions.map((q) => {
            // Безопасное получение текста вопроса
            const questionText = q.text[language] || q.text['ru'] || "Loading...";
            
            return (
              <div key={q.id} className="border-b border-gray-100 pb-4">
                <p className="font-medium text-gray-800 mb-3">
                  <span className="font-bold text-gray-400 mr-2">{q.id}.</span> 
                  {questionText}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => setAnswers({ ...answers, [q.id]: val })}
                      className={`w-10 h-10 rounded-full text-sm font-bold border transition-all ${
                        answers[q.id] === val
                          ? 'bg-uni-primary text-white border-uni-primary scale-110 shadow-md'
                          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
          <button
            onClick={calculateResult}
            disabled={Object.keys(answers).length < 7}
            className="w-full bg-uni-secondary text-white py-3 rounded-lg font-bold disabled:opacity-50 hover:bg-gray-800 transition"
          >
            {ui.calc[language]}
          </button>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-green-50 rounded border border-green-100">
              <div className="text-3xl font-bold text-green-700">{result.VM.toFixed(1)}</div>
              <div className="text-xs font-bold text-green-600 uppercase mt-1">{ui.internal[language]}</div>
            </div>
            <div className="p-4 bg-blue-50 rounded border border-blue-100">
              <div className="text-3xl font-bold text-blue-700">{result.VPM.toFixed(1)}</div>
              <div className="text-xs font-bold text-blue-600 uppercase mt-1">{ui.externalP[language]}</div>
            </div>
            <div className="p-4 bg-red-50 rounded border border-red-100">
              <div className="text-3xl font-bold text-red-700">{result.VOM.toFixed(1)}</div>
              <div className="text-xs font-bold text-red-600 uppercase mt-1">{ui.externalM[language]}</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-100">
            <p className="font-serif text-lg text-gray-800 leading-relaxed">{result.msg}</p>
          </div>
          <button onClick={() => setResult(null)} className="text-uni-secondary font-bold hover:text-uni-primary underline text-sm">
            {ui.restart[language]}
          </button>
        </motion.div>
      )}
    </div>
  );
}