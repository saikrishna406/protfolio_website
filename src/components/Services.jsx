import React from 'react';

const Services = () => {
  const services = [
    {
      title: "BRAND IDENTITY",
      description: "Creating distinctive visual identities that capture the essence of your brand and resonate with your audience."
    },
    {
      title: "WEB DEVELOPMENT",
      description: "Building responsive, high-performance websites from the ground up, turning your designs into functional reality."
    },
    {
      title: "PACKAGING DESIGN",
      description: "Creating beautiful, retail-ready product packaging that stands out on the shelf and attracts customers."
    },,
    {
      title: "DIGITAL MARKETING",
      description: "Driving growth with data-driven strategies, including SEO, content marketing, and online advertising."
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      description: "Building and engaging online communities through strategic content and creative campaigns."
    },
    {
      title: "CREATIVE DIRECTION",
      description: "Leading creative projects from concept to execution, ensuring cohesive and impactful results."
    }
  ];

  return (
    <section id="services" className="px-16 py-32 bg-[var(--bg-primary)]">
      <h2 className="font-['Bebas_Neue'] text-[clamp(3rem,6vw,5rem)] tracking-[0.02em] mb-16">
        WHAT I DO
      </h2>
      
      <div className="grid grid-cols-3 gap-8 mt-16 lg:grid-cols-2 md:grid-cols-1">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-8 border border-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] group"
          >
            <h4 className="font-['Bebas_Neue'] text-2xl mb-4 tracking-[0.02em]">
              {service.title}
            </h4>
            <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;