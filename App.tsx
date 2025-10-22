
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Rooms from './Rooms';
import Tickets from './Tickets';
import Packages from './Packages';
import Contact from './Contact';
import Footer from './Footer';
import FloatingChatButton from './FloatingChatButton';
import PlaySection from './PlaySection';

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
