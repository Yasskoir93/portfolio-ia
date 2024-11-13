import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <header id="accueil" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Thomas Dubois</h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">Étudiant en BTS SIO</h2>
        <div className="flex items-center justify-center gap-4 text-gray-300">
          <span className="flex items-center gap-2"><MapPin size={20} /> Paris, France</span>
          <span className="flex items-center gap-2"><Mail size={20} /> contact@thomasdubois.fr</span>
        </div>
      </div>
    </header>
  );
}