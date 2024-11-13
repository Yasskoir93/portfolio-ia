import React from 'react';
import { Code2, Database, Laptop, User2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold mb-12 text-center">À Propos</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Passionné d'informatique depuis mon plus jeune âge, je suis actuellement en formation BTS Services Informatiques aux Organisations, 
            option SLAM (Solutions Logicielles et Applications Métiers).
          </p>
          <p className="text-gray-300 leading-relaxed">
            Mon objectif est de devenir développeur full-stack et de créer des applications innovantes qui répondent aux besoins des utilisateurs.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <SkillCard icon={<Code2 className="w-12 h-12 text-blue-400" />} title="Développement" />
          <SkillCard icon={<Database className="w-12 h-12 text-blue-400" />} title="Base de données" />
          <SkillCard icon={<Laptop className="w-12 h-12 text-blue-400" />} title="Applications Web" />
          <SkillCard icon={<User2 className="w-12 h-12 text-blue-400" />} title="UI/UX Design" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg text-center">
      <div className="mx-auto mb-4">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}