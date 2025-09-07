import { ArrowRight, ExternalLink, Github, Youtube } from "lucide-react";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "PS and Sons Construction",
    description:
      "A business website designed to drive growth for PS & Sons Construction. Features a clean, modern UI that highlights core services, making it easy for clients to connect and request estimates. Enhanced local SEO and online presence have expanded client reach and improved discoverability beyond word-of-mouth.",
    image: "/projects/psandsonsproject.png",
    tags: ["React", "TailwindCSS", "Web3Forms"],
    demoUrl: "",
    youtubeUrl: "",
    gitHubUrl: "https://github.com/Joel-sari/PS-SonsConstructionLLC",
    date: "August 2025",
    sortDate: "2025-08-01",
  },
  {
    id: 2,
    title: "CryptoWatch",
    description:
      "A real-time cryptocurrency dashboard that tracks prices, volume, and market trends. Designed for clarity and usability, it presents complex data in an accessible format, empowering users to stay informed and make timely decisions.",
    image: "/projects/cryptowatchproject.png",
    tags: ["React.js", "CSS", "CoinGecko API"],
    demoUrl: "",
    youtubeUrl: "",
    gitHubUrl: "https://github.com/Joel-sari/CryptoWatch",
    date: "June 2025",
    sortDate: "2025-06-01",
  },
  {
    id: 3,
    title: "Investment Calculator",
    description:
      "A tool that helps users visualize the growth of their investments over time. By making financial projections easy to understand, it supports better decision-making and empowers users to plan for their financial goals.",
    image: "/projects/investmentcalculatorproject.png",
    tags: ["React", "CSS"],
    demoUrl: "",
    youtubeUrl: "",
    gitHubUrl: "https://github.com/Joel-sari/InvestmentCalculator",
    date: "July 2025",
    sortDate: "2025-07-01",
  },
  {
    id: 4,
    title: "Movie Store",
    description:
      "A feature-rich movie e-commerce platform built with Django, showcasing user authentication, dynamic content management, and an integrated shopping cart/checkout system. Users can browse movies, view details, manage their carts, and complete purchases with automatically generated orders.",
    image: "/projects/moviestoreproject.png",
    tags: ["Django", "Python", "SQLite", "Bootstrap CSS"],
    demoUrl: "https://joelsari.pythonanywhere.com/",
    youtubeUrl: "#",
    gitHubUrl: "https://github.com/Joel-sari/JoelsMovieStore",
    date: "September 2025",
    sortDate: "2025-09-01",
  },
  {
    id: 5,
    title: "Joel's Personal Portfolio",
    description:
      "custom-built portfolio website designed with React and TailwindCSS, featuring smooth animations and a responsive layout across all devices. It not only showcases my projects but also highlights his skills, background, and professional journey. The site includes an integrated contact form, links to social platforms, and a dedicated skills section.",
    image: "/projects/JoelSariPortfolioProject.png",
    tags: ["React", "TailwindCSS", "Web3Forms"],
    demoUrl: "",
    youtubeUrl: "",
    gitHubUrl: "https://github.com/Joel-sari/Joel-s-Personal-Portfolio/",
    date: "September 2025",
    sortDate: "2025-09-01",
  },
];
const Projects = () => {
  const [sortBy, setSortBy] = useState("date"); // "date" | "title"
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return new Date(b.sortDate) - new Date(a.sortDate); // default: newest first
  });
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="mb-6">
          <div className="inline-flex items-center bg-card/60 border border-primary rounded-lg overflow-hidden shadow-xs shadow-[0_0_8px_rgba(37,99,235,0.5)]">
            <span className="px-3 h-10 flex items-center text-sm text-muted-foreground border-r border-border">
              Sort by
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 px-3 bg-transparent text-sm focus:outline-none focus:ring-0"
            >
              <option value="date">Most Recent</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {sortedProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border-2 border-primary rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {(!project.demoUrl || !project.youtubeUrl) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {!project.demoUrl && (
                      <span className="px-2 py-0.5 text-[11px] rounded-full bg-secondary text-secondary-foreground border border-border/70">
                        Demo coming soon
                      </span>
                    )}
                    {!project.youtubeUrl && (
                      <span className="px-2 py-0.5 text-[11px] rounded-full bg-secondary text-secondary-foreground border border-border/70">
                        Video coming soon
                      </span>
                    )}
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* Demo link (deployed app) */}
                    {project.demoUrl ? (
                      <a
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        href={project.demoUrl}
                        target="_blank"
                        aria-label="Open live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <span className="text-foreground/40" aria-disabled="true">
                        <ExternalLink size={20} />
                      </span>
                    )}

                    {/* GitHub link (always present) */}
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.gitHubUrl}
                      target="_blank"
                      aria-label="Open GitHub repository"
                    >
                      <Github size={20} />
                    </a>

                    {/* YouTube demo video */}
                    {project.youtubeUrl ? (
                      <a
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        href={project.youtubeUrl}
                        target="_blank"
                        aria-label="Watch demo video"
                      >
                        <Youtube size={20} />
                      </a>
                    ) : (
                      <span className="text-foreground/40" aria-disabled="true">
                        <Youtube size={20} />
                      </span>
                    )}
                  </div>
                  <span className="italic text-xs text-muted-foreground ">
                    {project.date}
                  </span>
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
