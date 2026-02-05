const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 animate-fade-in">
      <h1 className="text-6xl font-bold text-[#0D2D31] mb-4">
        Hoş Geldiniz
      </h1>
      <p className="text-xl text-[#4F348D] opacity-80 mb-8 max-w-lg">
        TUIEVOLUTION ile geleceğin projelerini ve modern tasarımları keşfedin.
      </p>
      
      <div className="flex gap-4">
        <button className="bg-[#4F348D] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
          PROJELERİ GÖR
        </button>
        <button className="border-2 border-[#4F348D] text-[#4F348D] px-8 py-3 rounded-full font-bold hover:bg-[#4F348D] hover:text-white transition-all">
          HAKKIMIZDA
        </button>
      </div>
    </div>
  );
};