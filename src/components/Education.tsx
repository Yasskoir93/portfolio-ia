import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Formation</h2>
      <div className="space-y-8">
        <div className="bg-slate-800/50 p-6 rounded-lg flex items-start gap-4">
          <GraduationCap className="w-12 h-12 text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold">BTS SIO option SLAM</h3>
            <p className="text-gray-300 mb-2">Lycée Louis Armand, Paris</p>
            <p className="text-gray-400">2022 - 2024</p>
            <p className="text-gray-300 mt-4">
              Formation aux métiers de l'informatique avec spécialisation en développement d'applications.
              Apprentissage des langages de programmation, des bases de données, et des méthodes de gestion de projet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}