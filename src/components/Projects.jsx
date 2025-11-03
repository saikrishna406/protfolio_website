import React from 'react';

const Projects = () => {
  const digitalMarketingProjects = [
    {
      title: "PIM POM SONG",
      category: "YOUTUBE ADS",
      image: "pimpom-song.png"
    },
    {
      title: "LAXMI DENTAL CLINIC",
      category: "HYDERABAD",
      image: "Dental.png"
    },
    {
      title: "NEXUS DATABASE",
      category: "DATA SELLERS",
      image: "nexus.png "
    },
    {
      title: "TRIDENT DATABASE",
      category: "DATA SELLERS",
      image: "trident.png"
    }
  ];

  const brandIdentityProjects = [
    {
      title: "Sicily",
      category: "Packet Design & logo",
      image: "sili.webp",
      description: "As the founder of BlazeMarketing Media, I served as the Project Lead and Client Manager."
    },
    {
      title: "Mahefiel",
      category: "Packaging Design",
      image: "Mahfiel.jpeg"
    }
  ];

  return (
    <section id="works" className="px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32 bg-[var(--bg-primary)]">
      <div className="flex justify-between items-center mb-8 sm:mb-12 md:mb-16 flex-wrap gap-4">
        <h2 className="font-['Bebas_Neue'] text-[clamp(3rem,6vw,5rem)] tracking-[0.02em]">
          SELECTED PROJECTS
        </h2>
        <a href="#" className="text-sm tracking-[0.1em] uppercase text-[var(--text-primary)] no-underline transition-opacity duration-300 hover:opacity-60">
          VIEW ALL →
        </a>
      </div>

      <div className="max-w-[1600px] space-y-16">
        <div className="mb-8">
          <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl md:text-4xl tracking-[0.02em] mb-6 sm:mb-8">DIGITAL MARKETING</h3>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 md:grid-cols-1">
            {digitalMarketingProjects.map((project, index) => (
              <div key={index} className="relative cursor-none overflow-hidden group">
                <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-600 ease-[cubic-bezier(0.75,0,0.25,1)] group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full transition-all duration-500 group-hover:scale-110 ${project.image === 'nexus.png ' ? 'object-contain p-4' : 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
                  <h4 className="font-['Bebas_Neue'] text-xl sm:text-2xl tracking-[0.02em]">{project.title}</h4>
                  <span className="text-xs tracking-[0.15em] uppercase opacity-70">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl md:text-4xl tracking-[0.02em] mb-6 sm:mb-8">BRAND IDENTITY DESIGN</h3>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 md:grid-cols-1">
            {brandIdentityProjects.map((project, index) => (
              <div key={index} className="relative cursor-none overflow-hidden group">
                <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-600 ease-[cubic-bezier(0.75,0,0.25,1)] group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full transition-all duration-500 group-hover:scale-110 ${project.image === 'Mahfiel.jpeg' ? 'object-contain p-4' : 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  {project.description && (
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm px-4 text-center">{project.description}</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
                  <h4 className="font-['Bebas_Neue'] text-xl sm:text-2xl tracking-[0.02em]">{project.title}</h4>
                  <span className="text-xs tracking-[0.15em] uppercase opacity-70">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;