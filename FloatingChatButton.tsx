
import React from 'react';

const ChatIcon = () => (
  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.455.09-.934.09-1.425v-2.134c0-2.639 2.522-4.75 5.625-4.75s5.625 2.111 5.625 4.75v2.134c0 .491.001.97.09 1.425a4.48 4.48 0 00.979 2.025 5.969 5.969 0 01-.474.065 5.972 5.972 0 01-2.555.337C16.97 20.25 21 16.556 21 12z" />
  </svg>
);


const FloatingChatButton: React.FC = () => {
  return (
    <button
      onClick={() => alert('Abrir chat (simulación)')}
      className="fixed bottom-6 right-6 bg-[#008C9E] text-white flex items-center gap-3 font-bold py-3 px-5 rounded-full shadow-2xl hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 z-40"
    >
      <ChatIcon />
      <span className="hidden sm:inline">¡Vamos a chatear!</span>
    </button>
  );
};

export default FloatingChatButton;
