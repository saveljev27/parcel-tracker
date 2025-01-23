import { ScanSearch, Send } from 'lucide-react';

export function Main() {
  return (
    <main>
      <div className="flex gap-4 mt-8 min-h-[60vh]">
        <div className="bg-[#fff7e7] flex flex-col justify-center py-20 grow rounded-lg shadow-md hover:shadow-lg transition">
          <Send size={55} className="mx-auto mb-4" color="#F86300" />
          <h1 className="text-center text-lg">Ready to send?</h1>
          <button className="bg-primary w-1/4 mx-auto py-2 px-4 rounded-xl mt-2 hover:bg-opacity-60 transition">
            <span className="text-lg">Start sending</span>
          </button>
        </div>
        <div className="bg-[#FAEAFD] flex flex-col justify-center py-20 grow rounded-lg shadow-md hover:shadow-lg transition">
          <ScanSearch size={55} className="mx-auto mb-4" color="#F86300" />
          <h1 className="text-center text-lg">Where is my parcel?</h1>
          <button className="border border-black w-1/4 mx-auto py-2 px-4 rounded-xl mt-2 hover:border-opacity-60 transition">
            <span className="text-lg">Start tracking</span>
          </button>
        </div>
      </div>
    </main>
  );
}
