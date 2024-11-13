import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg navbar-fixed py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-8 px-4">
        <NavLink href="#accueil">Accueil</NavLink>
        <NavLink href="#about">À Propos</NavLink>
        <NavLink href="#skills">Compétences</NavLink>
        <NavLink href="#education">Formation</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsActive(rect.top <= 100 && rect.bottom >= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);

  return (
    <a 
      href={href}
      className={`nav-link text-sm md:text-base font-medium transition-colors ${
        isActive 
          ? 'text-blue-400' 
          : 'text-gray-300 hover:text-blue-400'
      }`}
    >
      {children}
    </a>
  );
}