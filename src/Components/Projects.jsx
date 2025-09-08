import { ArrowRight, ExternalLink, Github, X, Youtube } from "lucide-react";
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
    longDescription:
      "GT Movie Store is a full‑stack Django web app I built for a course to practice real e‑commerce patterns. It includes authentication, session‑based carts, order generation, and deployment on PythonAnywhere. This project let me solidify Django’s model‑view‑template flow and how to ship changes to production.",
    process: [
      "Scoped features into auth, catalog, cart, and orders to ship incrementally",
      "Debugged responsiveness issues (Safari/Chrome) and standardized image ratios",
      "Set up migrations/fixtures, static collection, and a deployment workflow",
      "Documented known trade‑offs and next steps (payments, search, admin polish)",
    ],
    image: "/projects/moviestoreproject.png",
    tags: ["Django", "SQLite", "Bootstrap"],
    demoUrl: "https://joelsari.pythonanywhere.com/",
    youtubeUrl: "https://www.youtube.com/watch?v=zOADQZK_7g4",
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
  const [openProject, setOpenProject] = useState(null); // stores the project to show in modal or null

  const truncate = (text, n = 140) =>
    text && text.length > n ? text.slice(0, n).trim() + "…" : text;

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
                  {truncate(project.description)}
                </p>
                <button
                  className="text-primary text-sm font-medium hover:underline"
                  onClick={() => setOpenProject(project)}
                >
                  Learn more
                </button>
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
                        <ExternalLink size={30} />
                      </a>
                    ) : (
                      <span className="text-foreground/40" aria-disabled="true">
                        <ExternalLink size={30} />
                      </span>
                    )}

                    {/* GitHub link (always present) */}
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.gitHubUrl}
                      target="_blank"
                      aria-label="Open GitHub repository"
                    >
                      <Github size={30} />
                    </a>

                    {/* YouTube demo video */}
                    {project.youtubeUrl ? (
                      <a
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        href={project.youtubeUrl}
                        target="_blank"
                        aria-label="Watch demo video"
                      >
                        <Youtube size={30} />
                      </a>
                    ) : (
                      <span className="text-foreground/40" aria-disabled="true">
                        <Youtube size={30} />
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
        {openProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-2xl rounded-lg bg-card text-foreground shadow-lg overflow-hidden border-2 border-primary shadow-[0_0_20px_rgba(37,99,235,0.6)] relative max-h-[90vh] overflow-y-auto">
              <div className="relative h-40 md:h-48 w-full overflow-hidden">
                <img
                  src={openProject.image}
                  alt={openProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4 pb-16 md:pb-3">
                <h3 className="text-2xl font-semibold">{openProject.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {openProject.longDescription || openProject.description}
                </p>

                {Array.isArray(openProject.process) &&
                  openProject.process.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Process</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {openProject.process.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {/* Live demo button or disabled placeholder */}
                  {openProject.demoUrl ? (
                    <a
                      className="cosmic-button inline-flex items-center gap-2"
                      href={openProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span
                      className="cosmic-button inline-flex items-center gap-2 opacity-50 cursor-not-allowed select-none"
                      aria-disabled="true"
                    >
                      Demo coming soon
                    </span>
                  )}

                  {/* GitHub always enabled */}
                  <a
                    className="cosmic-button inline-flex items-center gap-2"
                    href={openProject.gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <Github size={16} />
                  </a>

                  {/* Video button or disabled placeholder */}
                  {openProject.youtubeUrl ? (
                    <a
                      className="cosmic-button inline-flex items-center gap-2"
                      href={openProject.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Video <Youtube size={16} />
                    </a>
                  ) : (
                    <span
                      className="cosmic-button inline-flex items-center gap-2 opacity-50 cursor-not-allowed select-none"
                      aria-disabled="true"
                    >
                      Video coming soon
                    </span>
                  )}

                  <button
                    className="ml-auto order-last md:order-none w-10 h-10 flex items-center justify-center rounded-full bg-red-700 hover:bg-red-800 text-white shadow"
                    onClick={() => setOpenProject(null)}
                  >
                    <X />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
