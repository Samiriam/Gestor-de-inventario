
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Tickets from './components/Tickets';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChatButton from './components/FloatingChatButton';
import PlaySection from './components/PlaySection';

const App: React.FC = () => {
  return (
    <div className="bg-[#FEFBF6] text-[#0D244F]">
      <Header />
      <main>
        <Hero />
        <PlaySection />
        <Rooms />
        <Tickets />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default App;
