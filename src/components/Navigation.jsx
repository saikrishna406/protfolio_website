import React from 'react';

const Navigation = ({ theme, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 px-16 py-10 flex justify-between items-center z-[1000] bg-transparent">
      <div className="font-['Bebas_Neue'] text-3xl font-bold tracking-wider">
        K. VENKATA SAIKRISHNA
      </div>
      
      <div className="flex items-center gap-12">
        <ul className="flex gap-12 list-none">
          <li><a href="#about" className="text-[var(--text-primary)] no-underline text-sm font-medium tracking-widest uppercase transition-opacity duration-300 hover:opacity-60">[ ABOUT ME ]</a></li>
          <li><a href="#works" className="text-[var(--text-primary)] no-underline text-sm font-medium tracking-widest uppercase transition-opacity duration-300 hover:opacity-60">[ WORKS ]</a></li>
          <li><a href="#services" className="text-[var(--text-primary)] no-underline text-sm font-medium tracking-widest uppercase transition-opacity duration-300 hover:opacity-60">[ SERVICES ]</a></li>
          <li><a href="#contact" className="text-[var(--text-primary)] no-underline text-sm font-medium tracking-widest uppercase transition-opacity duration-300 hover:opacity-60">[ CONNECT ]</a></li>
        </ul>
        
        <div 
          onClick={toggleTheme}
          className={`w-12 h-7 bg-transparent rounded-full relative cursor-none border-2 border-[var(--text-primary)] transition-all duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[var(--text-primary)] before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform before:duration-300 ${theme === 'dark' ? 'before:translate-x-6' : ''}`}
        />
        
        <a href="https://wa.me/919502055104" className="px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] no-underline text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-lg">
          CONTACT ME →
        </a>
      </div>
    </nav>
  );
};

export default Navigation;