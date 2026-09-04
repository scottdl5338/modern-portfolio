import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "MLB Stadium Planner",
    description:
      "A Qt6 C++ desktop app for browsing MLB team and stadium data, built collaboratively with a small student team for CS1D (Data Structures). Implemented a hand-written generic quicksort for the data layer, a filterable/sortable team browser, and a per-stadium souvenir shopping cart, backed by a custom SQLite data-access layer.",
    image: "/projects/mlb-stadium.png",
    tags: ["C++", "Qt6", "SQLite", "CMake"],
    link: "#",
    github: "https://github.com/ZacharyOllivierre/Project-2",
  },
  {
    title: "Credit Risk MLOps Pipeline",
    description:
      "An end-to-end machine learning pipeline built solo, prioritizing reliability with automated data validation and drift monitoring to catch bad input before it reached the model. Containerized with Docker for reproducible behavior across environments.",
    image: "/projects/credit-risk.svg",
    tags: ["Python", "XGBoost", "scikit-learn", "FastAPI", "Docker"],
    link: "#",
    github: "https://github.com/scottdl5338/Credit-Risk-MLOps",
  },
  {
    title: "SOG Field Reports",
    description:
      "Production software built for a real construction special-inspections client, as part of a competitive Codebase student organization project team. Digitizes multi-agency field inspection reports — a searchable report dashboard, canvas-based e-signatures, and role-based user management — shipped via pull requests and code review.",
    image: "/projects/employee-portal.svg",
    tags: ["React", "Vite", "Supabase", "PostgreSQL"],
    link: "#",
    github: "https://github.com/The-Code-Base/sog-dev",
  },
  {
    title: "Campus Tour Planner",
    description:
      "A Qt6 C++ desktop app that plans multi-stop college campus tours — a nearest-neighbor algorithm computes an optimized visiting order, tracks travel distance, and simulates souvenir shopping at each stop. Built collaboratively with a small student team for CS1D (Data Structures).",
    image: "/projects/college-tour.png",
    tags: ["C++", "Qt6", "SQLite", "CMake"],
    link: "#",
    github: "https://github.com/Akil0814/College_Tour",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/*Bg Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header*/}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
            Projects that
            <span className="font-serif italic font-normal text-[#20B2A6]">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-400">
            A selection of my recent projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 "
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/*Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.wip && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-yellow-400/90 text-black shadow-md">
                    WIP
                  </span>
                )}
                <div
                  className="absoluet inset-8 
                bg-gradient-to-1 from-card via-card/50 to-transparent opacity-60"
                />
                {/*Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/*Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-red-500">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base mb-4 -mx-2 px-2 py-1 rounded-lg border border-transparent transition-all duration-300 hover:border-primary/50 hover:text-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-transparent transition-all duration-300 hover:border-primary/50 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*View All */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
