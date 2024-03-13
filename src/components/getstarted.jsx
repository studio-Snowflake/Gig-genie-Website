import React from 'react';
const getstarted = ({ href, black, children }) => {
  return (
    <a
      href={href}
      className={`relative inline-block text-white font-space-grotesk font-semibold text-lg border-2 rounded-full py-3 px-6 flex justify-center items-center cursor-pointer transition-all ${black ? 'bg-black' : 'bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-gradient-to-l'}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-3/5 h-1/3 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 z-0 blur-3xl animate-gradient"></span>
    </a>
  );
};

export default getstarted;
