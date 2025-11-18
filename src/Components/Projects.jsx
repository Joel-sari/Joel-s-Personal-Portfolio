import { ArrowRight, ExternalLink, Github, X, Youtube } from "lucide-react";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "PS and Sons Construction",
    description:
      "A business website designed to drive growth for PS & Sons Construction. Features a clean, modern UI that highlights core services, making it easy for clients to connect and request estimates. Enhanced local SEO and online presence have expanded client reach and improved discoverability beyond word-of-mouth.",
    image: "/projects/psandsonsproject.png",
    tags: ["React.js", "TailwindCSS", "Web3Forms"],
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
    tags: ["React.js", "CSS"],
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
    tags: ["Django", "SQLite", "BootstrapCSS", "Python"],
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
      "A custom-built portfolio website designed with React and TailwindCSS, featuring smooth animations and a responsive layout across all devices. It not only showcases my projects but also highlights his skills, background, and professional journey. The site includes an integrated contact form, links to social platforms, and a dedicated skills section.",
    image: "/projects/JoelSariPortfolioProject.png",
    tags: ["React.js", "TailwindCSS", "Web3Forms"],
    demoUrl: "#",
    youtubeUrl: "",
    gitHubUrl: "https://github.com/Joel-sari/Joel-s-Personal-Portfolio/",
    date: "September 2025",
    sortDate: "2025-09-01",
  },
  {
    id: 6,
    title: "SHPE Georgia Tech Member Portal",
    description:
      "Chapter website and member portal used by 500+ students — events & RSVPs, membership, admin tools, and sponsor-facing pages.",
    longDescription:
      "Collaborative project built by the SHPE GT IT team. The portal supports membership management, event RSVPs, admin-only workflows, and sponsor engagement. I contributed UI flows, data wiring, and feature enhancements, focusing on reliability, clear UX, and smooth admin operations.",
    contributions: [
      "Built/updated member flows (RSVP, profile, announcements) and admin dashboard views",
      "Wired data reads/writes and media storage; tuned auth/roles with the team",
      "Polished UX/accessibility, fixed bugs, and coordinated small releases",
    ],
    image: "/projects/SHPEGT.png",
    tags: ["React.ts", "Astro", "Firebase", "AWS S3", "TailwindCSS"],
    demoUrl: "https://gt-shpe.com/",
    youtubeUrl: "",
    gitHubUrl: "",
    privateRepo: true,
    collaboration: "Team",
    role: "IT Chair (Developer)",
    org: "SHPE Georgia Tech",
    date: "September 2025",
    sortDate: "2025-09-02",
  },
  {
    id: 7,
    title: "CareerHub",
    description:
      "CareerHub enables recruiters to post jobs, review applicants, and visualize candidate interest. Job seekers can browse personalized recommendations, track application statuses, and manage profiles in a clean, responsive UI.",
    longDescription:
      "CareerHub is a full-stack platform I built to streamline the hiring workflow for recruiters and job seekers. It features dynamic dashboards, real-time maps, role-based authentication, job recommendations, and an elegant UI powered by React + TailwindCSS. On the backend, Django REST Framework handles all API endpoints for jobs, applications, and user profiles. The system supports job posting, resume submissions, an applicant directory, recruiter pipelines, and interactive map views of postings and candidate clusters.",
    contributions: [
      "Implemented recruiter and job-seeker dashboards with polished, modern interfaces",
      "Built the interactive job map using Google Maps API with dynamic pin rendering",
      "Developed job posting, application tracking, and candidate directory workflows",
      "Created REST API endpoints for jobs, applications, messaging, and profiles",
      "Improved user experience with responsive layouts, hover interactions, and reusable UI components",
    ],
    image: "/projects/CareerHubProject.png",
    tags: ["React.js", "TailwindCSS", "Django", "REST API", "Google Maps API"],
    demoUrl: "https://careerhub-joelsari.pythonanywhere.com",
    youtubeUrl: "",
    gitHubUrl: "https://github.com/Joel-sari/CareerHub",
    date: "November 2025",
    sortDate: "2025-11-18",
  },
];
const Projects = () => {
  const [sortBy, setSortBy] = useState("date"); // "date" | "title"
  const [openProject, setOpenProject] = useState(null); // stores the project to show in modal or null
  const [toast, setToast] = useState(null);
  const showToast = (msg) => {
    setToast(msg);
    clearTimeout(window.__portfolioToastTimer);
    window.__portfolioToastTimer = setTimeout(() => setToast(null), 1600);
  };

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
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
              onClick={() => setOpenProject(project)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && setOpenProject(project)
              }
              role="button"
              tabIndex={0}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div
                  className="mb-4 -mx-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
                  role="region"
                  aria-label="Technology tags (scroll for more)"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="inline-flex gap-2 px-2 whitespace-nowrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border-2 border-primary rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="mb-1 -mx-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
                  role="region"
                  aria-label="Project title (scroll if truncated)"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <h3 className="text-xl font-semibold px-2 whitespace-nowrap">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <button
                  className="text-primary text-sm font-medium hover:underline mb-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenProject(project);
                  }}
                >
                  Learn more
                </button>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* GitHub link (always leftmost) */}
                    {project.gitHubUrl ? (
                      <a
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        href={project.gitHubUrl}
                        target="_blank"
                        aria-label="Open GitHub repository"
                        title="Open GitHub repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={30} />
                      </a>
                    ) : (
                      <span
                        className="text-foreground/40 select-none cursor-not-allowed"
                        aria-disabled="true"
                        tabIndex={-1}
                        style={{ pointerEvents: "none" }}
                        onClick={(e) => e.stopPropagation()}
                        title={
                          project.privateRepo
                            ? "Private repository"
                            : "GitHub unavailable"
                        }
                      >
                        <Github size={30} />
                      </span>
                    )}
                    {/* Demo link (deployed app) */}
                    {project.demoUrl ? (
                      <a
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        href={project.demoUrl}
                        target="_blank"
                        aria-label="Open live demo"
                        title="Open live demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={30} />
                      </a>
                    ) : (
                      <div
                        className="relative inline-block"
                        onClick={(e) => {
                          e.stopPropagation();
                          showToast("Demo unavailable");
                        }}
                      >
                        <span
                          className="text-foreground/40 select-none peer"
                          aria-disabled="true"
                          role="button"
                          tabIndex={-1}
                        >
                          <ExternalLink size={30} />
                        </span>
                        <span className="pointer-events-none absolute -top-10 left-8 sm:left-1/2 sm:-translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 text-white text-sm px-3 py-1.5 shadow-lg opacity-0 peer-hover:opacity-100 peer-focus:opacity-100 transition-opacity duration-150 z-10">
                          Demo unavailable
                        </span>
                      </div>
                    )}
                    {/* YouTube demo video */}
                    {project.youtubeUrl ? (
                      <a
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        href={project.youtubeUrl}
                        target="_blank"
                        aria-label="Watch demo video"
                        title="Watch demo video"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Youtube size={30} />
                      </a>
                    ) : (
                      <div
                        className="relative inline-block"
                        onClick={(e) => {
                          e.stopPropagation();
                          showToast("Video unavailable");
                        }}
                      >
                        <span
                          className="text-foreground/40 select-none peer"
                          aria-disabled="true"
                          role="button"
                          tabIndex={-1}
                        >
                          <Youtube size={30} />
                        </span>
                        <span className="pointer-events-none absolute -top-10 left-8 sm:left-1/2 sm:-translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 text-white text-sm px-3 py-1.5 shadow-lg opacity-0 peer-hover:opacity-100 peer-focus:opacity-100 transition-opacity duration-150 z-10">
                          Video unavailable
                        </span>
                      </div>
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
                {(openProject.org ||
                  openProject.collaboration ||
                  openProject.role) && (
                  <p className="text-xs text-muted-foreground -mt-2">
                    {openProject.org ? `${openProject.org}` : ""}
                    {openProject.org &&
                    (openProject.collaboration || openProject.role)
                      ? " • "
                      : ""}
                    {openProject.collaboration
                      ? `${openProject.collaboration} project`
                      : ""}
                    {openProject.collaboration && openProject.role ? " • " : ""}
                    {openProject.role ? `Role: ${openProject.role}` : ""}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  {openProject.longDescription || openProject.description}
                </p>

                {Array.isArray(openProject.contributions) &&
                openProject.contributions.length > 0 ? (
                  <div>
                    <h4 className="font-semibold mb-2">What I did</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {openProject.contributions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  Array.isArray(openProject.process) &&
                  openProject.process.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Process</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {openProject.process.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {/* Live demo button - show only if available */}
                  {openProject.demoUrl && (
                    <a
                      className="cosmic-button inline-flex items-center gap-2"
                      href={openProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <ExternalLink size={16} />
                    </a>
                  )}

                  {/* GitHub button - show only if avaialble */}
                  {openProject.gitHubUrl && (
                    <a
                      className="cosmic-button inline-flex items-center gap-2"
                      href={openProject.gitHubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <Github size={16} />
                    </a>
                  )}

                  {/* Video button - show only if available */}
                  {openProject.youtubeUrl && (
                    <a
                      className="cosmic-button inline-flex items-center gap-2"
                      href={openProject.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Video <Youtube size={16} />
                    </a>
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
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-gray-900 text-white text-sm px-3 py-2 rounded shadow-lg">
          {toast}
        </div>
      )}
    </section>
  );
};

export default Projects;
