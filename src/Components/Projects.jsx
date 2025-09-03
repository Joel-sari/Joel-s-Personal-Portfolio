import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "PS and Sons Construction",
    description:
      "A business website designed to drive growth for PS & Sons Construction. Features a clean, modern UI that highlights core services, making it easy for clients to connect and request estimates. Enhanced local SEO and online presence have expanded client reach and improved discoverability beyond word-of-mouth.",
    image: "/projects/psandsonsproject.png",
    tags: ["React", "TailwindCSS", "Web3Forms"],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Joel-sari/PS-SonsConstructionLLC",
  },
  {
    id: 2,
    title: "CryptoWatch",
    description:
      "A real-time cryptocurrency dashboard that tracks prices, volume, and market trends. Designed for clarity and usability, it presents complex data in an accessible format, empowering users to stay informed and make timely decisions.",
    image: "/projects/cryptowatchproject.png",
    tags: ["React.js", "CSS", "CoinGecko API"],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Joel-sari/CryptoWatch",
  },
  {
    id: 3,
    title: "Investment Calculator",
    description:
      "A tool that helps users visualize the growth of their investments over time. By making financial projections easy to understand, it supports better decision-making and empowers users to plan for their financial goals.",
    image: "/projects/investmentcalculatorproject.png",
    tags: ["React", "CSS"],
    demoUrl: "#",
    gitHubUrl: "https://github.com/Joel-sari/InvestmentCalculator",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feautured<span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full hfull object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border-2 border-primary rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center ">
                  <div className="flex space-x-3">
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.demoUrl}
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.gitHubUrl}
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Joel-sari"
            target="_blank"
          >
            Check out My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
