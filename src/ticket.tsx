import { useState } from 'react';

export function Ticket({ serie }: { serie: string }) {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const handleFullscreen = () => {
    setFullscreen(fullscreen ? false : true);
  };

  return (
    <section
      className={`duration-500 ${
        fullscreen &&
        'fixed inset-0 h-full w-full flex justify-center items-center bg-stone-900 z-50'
      }`}
    >
      <div
        onClick={handleFullscreen}
        className={`
          w-full max-w-[30rem] lg:w-[25rem] h-[8rem] grid grid-cols-[1fr_auto] rounded-2xl shadow-2xl overflow-hidden border-2 border-red-300 cursor-pointer duration-500 bg-red-300
          ${fullscreen && 'rotate-90 scale-180 lg:scale-180'}
        `}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold">{serie}</h1>
          {fullscreen && <h5>Click to close</h5>}
        </div>
        <div className="h-full p-2.5 border-s-2 border-dashed bg-white">
          <div className="h-full w-10 rounded-lg bg-stone-300" />
        </div>
      </div>
    </section>
  );
}
