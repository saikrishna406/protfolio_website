import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-16 py-32 bg-[var(--bg-primary)] text-center">
      <h2 className="font-['Bebas_Neue'] text-[clamp(4rem,10vw,8rem)] tracking-[0.02em] leading-none mb-12">
        LET'S BUILD<br />SOMETHING
      </h2>
      
      <p className="text-xl text-[var(--text-secondary)] mb-16">
        Have a project in mind? I'd love to hear about it.
      </p>
      
      <div className="flex justify-center gap-12 mb-16 md:flex-col md:gap-6">
        <a 
          href="mailto:saikrishna@example.com" 
          className="text-lg text-[var(--text-primary)] no-underline tracking-[0.05em] transition-opacity duration-300 relative hover:opacity-60 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--text-primary)] after:transition-all after:duration-300 hover:after:w-full"
        >
          EMAIL
        </a>
        <a 
          href="https://www.linkedin.com/in/k-venkata-saikrishna-0b9459287/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg text-[var(--text-primary)] no-underline tracking-[0.05em] transition-opacity duration-300 relative hover:opacity-60 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--text-primary)] after:transition-all after:duration-300 hover:after:w-full"
        >
          LINKEDIN
        </a>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg text-[var(--text-primary)] no-underline tracking-[0.05em] transition-opacity duration-300 relative hover:opacity-60 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--text-primary)] after:transition-all after:duration-300 hover:after:w-full"
        >
          INSTAGRAM
        </a>
        <a 
          href="https://wa.me/919502055104" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg text-[var(--text-primary)] no-underline tracking-[0.05em] transition-opacity duration-300 relative hover:opacity-60 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--text-primary)] after:transition-all after:duration-300 hover:after:w-full"
        >
          Whats up
        </a>
      </div>
    </section>
  );
};

export default Contact;