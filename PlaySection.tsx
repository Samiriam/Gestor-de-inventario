
import React from 'react';

const PlaySection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1200/800?random=1')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Juega, ríe y celebra
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Ambientes seguros y decoraciones listas para tu fiesta.
        </p>
        <a href="#salas" className="bg-[#FFD54F] text-[#0D244F] font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Ver Salas
        </a>
      </div>
    </section>
  );
};

export default PlaySection;
