import { useState } from 'react';
import { SELF_ESTEEM_TEST } from '../../data/psychologyData';

export default function SelfEsteemTest() {
  // Храним два набора рангов: ideal и real
  const [idealRanks, setIdealRanks] = useState<Record<string, number>>({});
  const [realRanks, setRealRanks] = useState<Record<string, number>>({});
  const [result, setResult] = useState<{ r: number; msg: string } | null>(null);

  const calculateCorrelation = () => {
    let sumD2 = 0;
    const n = SELF_ESTEEM_TEST.qualities.length; // 20

    SELF_ESTEEM_TEST.qualities.forEach(q => {
      const d = (idealRanks[q] || 0) - (realRanks[q] || 0);
      sumD2 += d * d;
    });

    // Формула Спирмена: r = 1 - (6 * SumD2) / (n * (n^2 - 1))
    // Для n=20 коэффициент 6/(20*(399)) ≈ 0.00075. Всё верно.
    const r = 1 - (0.00075 * sumD2);
    
    let msg = "";
    if (r >= 0.7) msg = "Высокая (возможно завышенная) самооценка.";
    else if (r >= 0.4) msg = "Адекватная самооценка.";
    else msg = "Низкая самооценка.";

    setResult({ r, msg });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mt-8">
      <h3 className="text-xl font-bold text-uni-primary mb-2">{SELF_ESTEEM_TEST.title}</h3>
      <p className="text-sm text-gray-500 mb-6">{SELF_ESTEEM_TEST.description}</p>
      
      {!result ? (
        <div className="overflow-x-auto">
           <p className="text-xs text-red-500 mb-2">* Введите числа от 1 до 20 (не повторяясь в колонке)</p>
           <table className="w-full text-sm">
             <thead>
               <tr className="bg-gray-50">
                 <th className="p-2 text-left">Качество</th>
                 <th className="p-2 w-24">Идеал (1-20)</th>
                 <th className="p-2 w-24">Я (1-20)</th>
               </tr>
             </thead>
             <tbody>
               {SELF_ESTEEM_TEST.qualities.map((q) => (
                 <tr key={q} className="border-b border-gray-100">
                   <td className="p-2">{q}</td>
                   <td className="p-2">
                     <input 
                       type="number" min="1" max="20" 
                       className="w-full border rounded p-1"
                       onChange={(e) => setIdealRanks({...idealRanks, [q]: parseInt(e.target.value)})}
                     />
                   </td>
                   <td className="p-2">
                     <input 
                       type="number" min="1" max="20" 
                       className="w-full border rounded p-1"
                       onChange={(e) => setRealRanks({...realRanks, [q]: parseInt(e.target.value)})}
                     />
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
           <button 
             onClick={calculateCorrelation}
             className="mt-6 w-full bg-uni-secondary text-white py-3 rounded-lg font-bold"
           >
             Рассчитать самооценку
           </button>
        </div>
      ) : (
        <div className="text-center p-6 bg-gray-50 rounded-lg">
           <h4 className="text-lg font-bold text-gray-700">Ваш результат</h4>
           <div className="text-5xl font-bold text-uni-primary my-4">{result.r.toFixed(2)}</div>
           <p className="text-gray-800">{result.msg}</p>
           <button onClick={() => setResult(null)} className="mt-4 text-sm underline">Назад</button>
        </div>
      )}
    </div>
  );
}