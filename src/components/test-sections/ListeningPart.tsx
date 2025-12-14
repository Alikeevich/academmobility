import { useState } from 'react';
import { LISTENING_DATA } from '../../data/ieltsData';
import { Headphones } from 'lucide-react';

interface ListeningPartProps {
  answers: Record<string, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export default function ListeningPart({ answers, setAnswers }: ListeningPartProps) {
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left Side (Visual) */}
      <div className="w-1/2 p-8 overflow-y-auto border-r border-gray-300 bg-white flex flex-col items-center justify-center text-gray-400">
         <Headphones size={80} className="opacity-10 mb-4"/>
         <p className="text-sm font-medium opacity-60">Audio track visualization</p>
         <p className="text-xs mt-2 text-center max-w-xs opacity-50">In the real test, you will hear a conversation about accommodation.</p>
      </div>

      {/* Right Side (Questions) */}
      <div className="w-1/2 p-8 overflow-y-auto bg-gray-50">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{LISTENING_DATA.title}</h2>
          {LISTENING_DATA.questions.map((q, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
               <h3 className="font-bold text-gray-900 mb-4">{q.question}</h3>
               {q.type === 'multiple_choice' && q.options?.map((opt, idx) => (
                 <label key={idx} className="flex items-center p-3 border rounded mb-2 cursor-pointer hover:bg-gray-50">
                   <input type="radio" checked={answers[`l-${q.id}`] === opt.split('.')[0].trim()} onChange={() => setAnswers(p => ({...p, [`l-${q.id}`]: opt.split('.')[0].trim()}))} className="mr-3 text-uni-primary focus:ring-uni-primary"/>
                   <span className="text-sm text-gray-700">{opt}</span>
                 </label>
               ))}
               {q.type === 'gap_fill' && (
                 <input type="text" value={answers[`l-${q.id}`] || ''} onChange={e => setAnswers(p => ({...p, [`l-${q.id}`]: e.target.value}))} className="w-full p-3 border border-gray-300 rounded font-bold" placeholder="Answer..."/>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}