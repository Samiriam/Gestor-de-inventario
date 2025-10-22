
import React from 'react';

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const PackageCard: React.FC<PackageCardProps> = ({ title, price, features, highlight }) => (
  <div className={`rounded-xl p-8 border-2 ${highlight ? 'bg-[#007BFF] text-white border-transparent' : 'bg-white border-gray-200'} shadow-lg transform transition-transform duration-300 hover:scale-105`}>
    <h3 className={`text-2xl font-bold mb-2 ${highlight ? 'text-white' : 'text-[#0D244F]'}`}>{title}</h3>
    <p className={`text-4xl font-extrabold mb-6 ${highlight ? 'text-yellow-300' : 'text-[#007BFF]'}`}>{price}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <CheckIcon />
          <span className={`ml-3 ${highlight ? 'text-blue-100' : 'text-gray-600'}`}>{feature}</span>
        </li>
      ))}
    </ul>
    <a href="#reservas" className={`w-full text-center inline-block font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md ${highlight ? 'bg-white text-[#007BFF] hover:bg-gray-200' : 'bg-[#007BFF] text-white hover:bg-blue-700'}`}>
      Elegir Paquete
    </a>
  </div>
);

const Packages: React.FC = () => {
  const packages = [
    { title: 'Paquete Esencial', price: '$170.000', features: ['3 horas de juego', '15 niños', 'Snacks básicos', 'Decoración estándar'] },
    { title: 'Paquete Diversión', price: '$190.000', features: ['3 horas de juego', '20 niños', 'Snacks y bebidas', 'Decoración temática', 'Piñata'], highlight: true },
    { title: 'Paquete Premium', price: '$210.000', features: ['3 horas de juego', '25 niños', 'Menú completo', 'Decoración premium', 'Piñata y sorpresas'] },
  ];

  return (
    <section id="reservas" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Valores de <span className="text-[#007BFF]">Cumpleaños</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
         <div className="text-center mt-12">
          <p className="text-gray-600">Todos los paquetes incluyen invitaciones digitales y un anfitrión.</p>
          <a href="#politica-reserva" className="text-[#007BFF] hover:underline font-semibold">
            Ver política de reserva y cancelación
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;
