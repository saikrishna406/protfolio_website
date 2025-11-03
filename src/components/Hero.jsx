import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen px-16 py-40 flex flex-col justify-center relative">
      <div className="absolute top-32 left-16 text-xs font-semibold tracking-[0.15em] opacity-0 animate-[fadeIn_1s_ease_0.5s_forwards]">
        2025
      </div>
      
      <h1 className="font-['Bebas_Neue'] text-[clamp(4rem,12vw,14rem)] leading-[0.9] tracking-[-0.02em] mb-12 font-normal">
        <span className="block opacity-0 translate-y-24 animate-[slideUp_1s_cubic-bezier(0.75,0,0.25,1)_0.1s_forwards]">DIGITAL</span>
        <span className="block opacity-0 translate-y-24 animate-[slideUp_1s_cubic-bezier(0.75,0,0.25,1)_0.2s_forwards]">STRATEGIST</span>
      </h1>

      <div className="grid grid-cols-[1fr_350px_1fr] gap-16 items-center mt-8 lg:grid-cols-1">
        <div className="flex flex-col gap-6 opacity-0 animate-[fadeIn_1s_ease_1s_forwards]">
          <div className="text-lg font-medium tracking-[0.02em]">/ content-creator</div>
          <div className="text-lg font-medium tracking-[0.02em]">/ Digital Marketer</div>
          <div className="text-lg font-medium tracking-[0.02em]">/ WEB DEVELOPMENT</div>
        </div>

        <div className="w-full h-[450px] bg-gray-100 rounded-lg overflow-hidden opacity-0 animate-[fadeIn_1s_ease_0.8s_forwards] lg:order-first shadow-2xl">
          <img 
            src="sai.jpeg" 
            alt="K. Venkata Saikrishna - Digital Strategist" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" 
          />
        </div>

        <div className="opacity-0 animate-[fadeIn_1s_ease_1.2s_forwards]">
          <div className="text-xs tracking-[0.15em] uppercase mb-8 opacity-70">BASED IN INDIA</div>
          <p className="text-base leading-relaxed text-[var(--text-secondary)] max-w-md">
            I'M A BRAND STRATEGIST, DIGITAL MARKETER, AND WEB DEVELOPER
            <br /><br />
            WHO BUILDS COMPLETE DIGITAL EXPERIENCES THAT GROW BRANDS OF ALL SIZES.
          </p>
          <div className="mt-12 text-sm tracking-[0.1em]">
            AVAILABLE FOR COLLABORATION ↘<br />
            <a href="mailto:saikrishna373812@gmail.com" className="text-[var(--text-primary)] underline transition-opacity duration-300 hover:opacity-60">
              saikrishna373812@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 right-16 text-right opacity-0 animate-[fadeIn_1s_ease_1.4s_forwards] lg:relative lg:bottom-auto lg:right-auto lg:text-left lg:mt-16">
        <div className="text-xs tracking-[0.15em] uppercase mb-2 opacity-70">RECENT WORK ↓</div>
        <div className="font-['Bebas_Neue'] text-4xl tracking-[0.02em]"></div>
      </div>
    </section>
  );
};

export default Hero;