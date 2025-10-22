
import React from 'react';

const SpeechBubble: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`relative bg-white border-2 border-black rounded-full py-2 px-6 shadow-md ${className}`}>
    <p className="text-xl font-bold text-center">{children}</p>
    <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" style={{ filter: 'drop-shadow(0 2px 1px rgba(0,0,0,0.2))' }}></div>
    <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[9px] border-t-black -z-10"></div>
  </div>
);

const SuperheroBoy: React.FC = () => (
    <svg viewBox="0 0 100 125" className="w-48 h-auto"><path d="M50,1.5c-19.3,0-35,15.7-35,35c0,13.6,7.8,25.4,19.1,31.1c-1.1,1.5-2.1,3.1-2.9,4.8c-4.4,9.2-14.1,14.6-24.5,14.6H1.5v12.5h5.3c13.4,0,25.4-7.4,31.6-18.7c1.7-3.2,2.8-6.6,3.3-10.1c1.4-0.1,2.8-0.2,4.3-0.2s2.9,0.1,4.3,0.2c0.5,3.5,1.6,6.9,3.3,10.1c6.2,11.3,18.2,18.7,31.6,18.7h5.3V86.9h-5.3c-10.4,0-20.1-5.4-24.5-14.6c-0.8-1.7-1.8-3.3-2.9-4.8C77.2,61.9,85,50.1,85,36.5C85,17.2,69.3,1.5,50,1.5z M50,11.5c13.8,0,25,11.2,25,25s-11.2,25-25,25s-25-11.2-25-25S36.2,11.5,50,11.5z"/><path d="M50,16.5c-11,0-20,9-20,20s9,20,20,20s20-9,20-20S61,16.5,50,16.5z M38.5,36.5c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S41.3,36.5,38.5,36.5z M61.5,36.5c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S64.3,36.5,61.5,36.5z"/></svg>
);


interface TicketCardProps {
  title: string;
  price: string;
  imageComponent: React.ReactNode;
}

const TicketCard: React.FC<TicketCardProps> = ({ title, price, imageComponent }) => (
  <div className="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-gray-200 flex flex-col items-center">
    <div className="w-32 h-32 flex items-center justify-center mb-4 text-red-500">
        {imageComponent}
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-xl font-semibold text-gray-500 mb-6">{price}</p>
    <a href="#comprar" className="w-full bg-[#FFD54F] text-[#0D244F] font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md transform hover:scale-105">
      Comprar
    </a>
  </div>
);


const Tickets: React.FC = () => {
  return (
    <section id="entradas" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="relative mb-16 flex justify-center items-center flex-col md:flex-row gap-8">
            <SpeechBubble className="transform -rotate-6">¡Hola!</SpeechBubble>
            <SpeechBubble className="transform rotate-6">¡Ven a divertirte!</SpeechBubble>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <TicketCard title="Entrada Simple" price="$5.000 CLP" imageComponent={<SuperheroBoy />} />
          <TicketCard title="Entrada Doble" price="$9.000 CLP" imageComponent={<SuperheroBoy />} />
          <TicketCard title="Entrada Triple" price="$12.000 CLP" imageComponent={<SuperheroBoy />} />
        </div>
        <div className="text-center mt-8">
          <a href="#politica-compra" className="text-gray-600 hover:text-[#007BFF] underline">
            Política de Compra
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
