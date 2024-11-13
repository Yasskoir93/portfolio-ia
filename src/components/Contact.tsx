import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <footer id="contact" className="bg-slate-900 py-20 px-4 md:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
          <a href="mailto:contact@thomasdubois.fr" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={20} />
            contact@thomasdubois.fr
          </a>
          <a href="tel:+33600000000" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={20} />
            +33 6 00 00 00 00
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={20} />
            Paris, France
          </span>
        </div>
      </div>
    </footer>
  );
}