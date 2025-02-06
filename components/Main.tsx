import { ScanSearch, Send } from 'lucide-react';
import { Button } from './UI';

export function Main() {
  return (
    <main>
      <div className="flex gap-4 min-h-[60vh]">
        <div className="bg-lightyellow flex flex-col justify-center py-20 grow rounded-lg shadow-md hover:shadow-lg transition">
          <Send size={55} className="mx-auto mb-4" color="#F86300" />
          <h3 className="text-center font-semibold">Ready to send?</h3>
          <Button color="primary" link="/parcel" classList="mx-auto mt-2">
            Start sending
          </Button>
        </div>
        <div className="bg-lightpink flex flex-col justify-center py-20 grow rounded-lg shadow-md hover:shadow-lg transition">
          <ScanSearch size={55} className="mx-auto mb-4" color="#F86300" />
          <h3 className="text-center font-semibold">Where is my parcel?</h3>
          <Button
            color="transparent border border-black hover:border-opacity-60"
            link="/tracker"
            classList="mx-auto mt-2"
          >
            Start tracking
          </Button>
        </div>
      </div>
    </main>
  );
}
