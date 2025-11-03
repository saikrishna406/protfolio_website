import React from 'react';

const About = () => {
  return (
    <section id="about" className="px-16 py-32 bg-[var(--bg-primary)]">
      <div className="grid grid-cols-[1fr_1.5fr] gap-24 max-w-[1600px] lg:grid-cols-1">
        <div>
          <h2 className="font-['Bebas_Neue'] text-[clamp(3rem,6vw,5rem)] tracking-[0.02em] leading-none">
            ABOUT<br />ME
          </h2>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6 tracking-[0.02em]">Hello, I'm Saikrishna</h3>
          
          <p className="text-base leading-relaxed text-[var(--text-secondary)]">
  I'm a brand strategist, creative designer, and <strong>digital marketer</strong> based in India. 
  As the founder of <strong>BlazeMarketing Media</strong>, I'm passionate about crafting 
  meaningful experiences that connect brands with their audiences.
</p>

<p className="text-base leading-relaxed text-[var(--text-secondary)]">
  With over 3 years of experience, my expertise spans <strong>brand identity, 
  web design, digital marketing,</strong> and <strong>creative direction</strong>. I help 
  businesses tell their stories through thoughtful design and 
  strategic thinking.
</p>

<p className="text-base leading-relaxed text-[var(--text-secondary)]">
  My approach combines aesthetic excellence with strategic insight, 
  ensuring every project not only looks beautiful but also achieves 
  its business objectives.
</p>
        </div>
      </div>
    </section>
  );
};

export default About;