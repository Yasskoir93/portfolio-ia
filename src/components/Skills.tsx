import React from 'react';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-slate-800/50 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory 
            title="Développement Front-end"
            skills={['HTML5 / CSS3', 'JavaScript / TypeScript', 'React.js', 'Tailwind CSS']}
          />
          <SkillCategory 
            title="Développement Back-end"
            skills={['PHP / Laravel', 'Node.js / Express', 'SQL / MySQL', 'API REST']}
          />
          <SkillCategory 
            title="Outils & Méthodes"
            skills={['Git / GitHub', 'Méthode Agile', 'VS Code', 'Docker']}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-slate-900/50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      <ul className="space-y-2 text-gray-300">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}