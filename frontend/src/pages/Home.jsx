import React from 'react';
import ProjectMarquee from '../components/ProjectMarquee';

const Home = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      
      {/* Hero Section */}
      <div className="text-center px-4 mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-textPrimary tracking-tight">
          Welcome to <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-pink-500">TUIEVOLUTION</span>
        </h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto font-light">
          İnovasyon ve teknolojinin buluştuğu nokta. Modern web çözümleri geliştiriyoruz.
        </p>
      </div>

      {/* Kayan Projeler */}
      <section className="mb-24">
        <h2 className="text-center text-2xl font-bold text-accent mb-4 tracking-widest uppercase">Latest Works</h2>
        <ProjectMarquee />
      </section>

      {/* Hakkımızda Kartları (Yan Yana) */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-textPrimary">Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Evrim Kart */}
          <div className="glass p-8 rounded-3xl hover:border-accent transition-all duration-300 group">
            <div className="w-20 h-20 bg-accent rounded-full mb-6 mx-auto flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
              EA
            </div>
            <h3 className="text-2xl font-bold text-accent mb-3 text-center">Evrim Aluç</h3>
            <p className="opacity-80 text-center mb-6 text-sm leading-relaxed">
              Backend Mimarı & Java Uzmanı. Güçlü altyapılar ve veri güvenliği üzerine çalışır.
            </p>
          </div>

          {/* Tuana Kart */}
          <div className="glass p-8 rounded-3xl hover:border-accent transition-all duration-300 group">
            <div className="w-20 h-20 bg-pink-500 rounded-full mb-6 mx-auto flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
              TA
            </div>
            <h3 className="text-2xl font-bold text-accent mb-3 text-center">Tuana Akyıldız</h3>
            <p className="opacity-80 text-center mb-6 text-sm leading-relaxed">
              Frontend Geliştirici & UI/UX Tasarımcı. Kullanıcı deneyimi ve modern arayüzler tasarlar.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;