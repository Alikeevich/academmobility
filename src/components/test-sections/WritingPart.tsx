import { WRITING_DATA } from '../../data/ieltsData';

interface WritingPartProps {
  writingText: string;
  setWritingText: (text: string) => void;
}

export default function WritingPart({ writingText, setWritingText }: WritingPartProps) {
  const getWordCount = () => writingText.trim().split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left Side (Task) */}
      <div className="w-1/2 p-8 overflow-y-auto border-r border-gray-300 bg-white shadow-inner">
        <h2 className="text-xl font-bold text-uni-primary mb-4">Task 2</h2>
        <div className="prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: WRITING_DATA.prompt }} />
      </div>

      {/* Right Side (Input) */}
      <div className="w-1/2 p-8 overflow-y-auto bg-gray-50 flex flex-col">
        <textarea 
          value={writingText}
          onChange={e => setWritingText(e.target.value)}
          placeholder="Start typing your response here..."
          className="flex-1 p-8 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-uni-primary/20 focus:border-uni-primary text-lg font-serif leading-relaxed shadow-sm transition-all outline-none"
          spellCheck={false}
        />
        <div className="mt-3 flex justify-end">
          <span className={`text-sm font-bold px-3 py-1 rounded transition-colors ${getWordCount() >= 250 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
            Word Count: {getWordCount()} / 250
          </span>
        </div>
      </div>
    </div>
  );
}