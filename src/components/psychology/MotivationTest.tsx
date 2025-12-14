import { useState } from 'react';
import { MOTIVATION_TEST } from '../../data/psychologyData';
import { motion } from 'framer-motion';
import { Language } from '../../types/language';

export default function MotivationTest({ language }: { language: Language }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<{ VM: number; VPM: number; VOM: number; msg: string } | null>(null);

  const calculateResult = () => {
    const VM = ((answers[6] || 0) + (answers[7] || 0)) / 2;
    const VPM = ((answers[1] || 0) + (answers[2] || 0) + (answers[5] || 0)) / 3;
    const VOM_avg = ((answers[3] || 0) + (answers[4] || 0)) / 2;

    // Сообщения тоже нужно перевести
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

  const btnText = {
    ru: "Получить результат", kk: "Нәтижені алу", en: "Get Result"
  };
  const restartText = {
    ru: "Пройти заново", kk: "Қайта өту", en: "Restart"
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-uni-primary mb-2">{MOTIVATION_TEST.title[language]}</h3>
      <p className="text-sm text-gray-500 mb-6">{MOTIVATION_TEST.description[language]}</p>

      {!result ? (
        <div className="space-y-6">
          {MOTIVATION_TEST.questions.map((q) => (
            <div key={q.id} className="border-b border-gray-100 pb-4">
              <p className="font-medium text-gray-800 mb-3">{q.id}. {q.text[language]}</p>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAnswers({ ...answers, [q.id]: val })}
                    className={`px-3 py-1 text-sm rounded border transition-colors ${
                      answers[q.id] === val
                        ? 'bg-uni-primary text-white border-uni-primary'
                        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={calculateResult}
            disabled={Object.keys(answers).length < 7}
            className="w-full bg-uni-secondary text-white py-3 rounded-lg font-bold disabled:opacity-50"
          >
            {btnText[language]}
          </button>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-green-50 rounded">
              <div className="text-2xl font-bold text-green-700">{result.VM.toFixed(1)}</div>
              <div className="text-xs text-gray-500">Внутренняя</div>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <div className="text-2xl font-bold text-blue-700">{result.VPM.toFixed(1)}</div>
              <div className="text-xs text-gray-500">Внешняя (+)</div>
            </div>
            <div className="p-4 bg-red-50 rounded">
              <div className="text-2xl font-bold text-red-700">{result.VOM.toFixed(1)}</div>
              <div className="text-xs text-gray-500">Внешняя (-)</div>
            </div>
          </div>
          <p className="font-serif text-lg text-gray-800 mb-4">{result.msg}</p>
          <button onClick={() => setResult(null)} className="text-uni-primary underline text-sm">
            {restartText[language]}
          </button>
        </motion.div>
      )}
    </div>
  );
}