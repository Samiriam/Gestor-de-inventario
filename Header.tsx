
import React, { useState } from 'react';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#salas', label: 'Salas' },
    { href: '#entradas', label: 'Entradas' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-3xl font-extrabold text-[#0D244F]">
          Play<span className="text-[#007BFF]">Kids</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-[#007BFF] transition-colors duration-300 font-semibold">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#reservas" className="hidden md:inline-block bg-[#007BFF] text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
          Reserva
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#0D244F]">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-[#007BFF] transition-colors duration-300 font-semibold">
                {link.label}
              </a>
            ))}
            <a href="#reservas" onClick={() => setIsMenuOpen(false)} className="bg-[#007BFF] text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
              Reserva
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
