
import React from 'react';

import { getBookingsUrl, navigateToBookings } from './utils/wixIntegration';

const bookingUrl = getBookingsUrl();

const handleBookingClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  if (navigateToBookings()) {
    event.preventDefault();
  }
};

interface RoomCardProps {
  imageUrl: string;
  title: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ imageUrl, title }) => (
  <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-transparent hover:border-[#AEE3FF]">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </div>
    <div className="p-6 bg-white">
      <p className="text-gray-600 mb-4">Decoración temática, juegos y mucha diversión te esperan.</p>
      <a
        href={bookingUrl}
        onClick={handleBookingClick}
        className="w-full text-center inline-block bg-[#008C9E] text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md"
      >
        Reserva Ahora
      </a>
    </div>
  </div>
);

const Rooms: React.FC = () => {
  const rooms = [
    { title: 'Aventura en la Jungla', imageUrl: 'https://picsum.photos/400/300?random=10' },
    { title: 'Misión Espacial', imageUrl: 'https://picsum.photos/400/300?random=11' },
    { title: 'Fondo del Mar', imageUrl: 'https://picsum.photos/400/300?random=12' },
    { title: 'Bosque Encantado', imageUrl: 'https://picsum.photos/400/300?random=13' },
  ];

  return (
    <section id="salas" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Nuestras <span className="text-[#007BFF]">Salas</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.title} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
