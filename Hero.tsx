
import React from 'react';

import { getBookingsUrl, navigateToBookings } from './utils/wixIntegration';

const ComicImage: React.FC = () => (
    <div className="relative w-full h-full">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 -left-10 w-48 h-48 text-yellow-300 opacity-50">
            <path fill="currentColor" d="M49.8,-54.6C62.2,-41.1,68.4,-20.5,69.5,1.2C70.6,22.9,66.6,45.8,52,58.8C37.4,71.8,12.2,74.9,-10.8,71.4C-33.8,67.9,-54.7,57.7,-66.1,41.4C-77.5,25.1,-79.4,2.7,-74.2,-18.2C-69,-39.2,-56.7,-58.6,-40,-67.2C-23.3,-75.8,-2.2,-73.6,18.5,-67.5C39.2,-61.4,49.8,-54.6,49.8,-54.6Z" transform="translate(100 100)" />
        </svg>
        <div className="bg-white p-4 rounded-2xl shadow-lg border-4 border-black relative transform -rotate-3">
            <div className="aspect-w-1 aspect-h-1">
                <div className="w-full h-full bg-[#AEE3FF] rounded-lg flex items-center justify-center">
                    <div className="text-center font-extrabold text-5xl sm:text-6xl text-white" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
                        <span className="text-[#007BFF]">P</span>
                        <span className="text-red-500">L</span>
                        <span className="text-yellow-400">A</span>
                        <span className="text-green-500">Y</span>
                        <br/>
                        <span className="text-purple-500">K</span>
                        <span className="text-orange-500">I</span>
                        <span className="text-pink-500">D</span>
                        <span className="text-teal-500">S</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const Hero: React.FC = () => {
  const bookingUrl = getBookingsUrl();

  const handleBookingClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (navigateToBookings()) {
      event.preventDefault();
    }
  };

  return (
    <section id="inicio" className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="inline-block bg-[#FFD54F] rounded-full px-4 py-1 text-sm font-semibold mb-4 transform -rotate-2">
            ¡Bienvenido a PlayKids!
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Sala de juegos y cumpleaños
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Espacios privados, juego seguro y reservas online con pago en la web. Elige sala y fecha, confirma en minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={bookingUrl}
              onClick={handleBookingClick}
              className="bg-[#007BFF] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Reserva Ahora
            </a>
            <a href="#politicas" className="bg-transparent border-2 border-[#007BFF] text-[#007BFF] font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#AEE3FF] hover:text-[#0D244F] transition-all duration-300">
              Política
            </a>
          </div>
        </div>
        <div className="hidden md:block">
            <ComicImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
