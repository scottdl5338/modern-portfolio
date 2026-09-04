const experiences = [
  {
    period: "Aug 2024 - May 2025",
    title: "AVID & Engineering Tutor - College Corps Fellow",
    company: "California College Corps",
    description:
      "Served as a California College Corps Fellow, completing 450+ hours of tutoring across three Irvine Unified School District sites over the academic year: assisted an Engineering class as a teaching aide at University High School; tutored AVID students - and other subjects as needed - at Rancho San Joaquin Middle School; and served as an AVID tutor at Vista Verde K-8. Awarded the Segal AmeriCorps National Service Award for 450+ hours of service.",
    technologies: ["Tutoring", "Mentoring", "Public Speaking", "Curriculum Support"],
    current: false,
  },
  {
    period: "Oct 2025 - Dec 2025",
    title: "Software Engineer",
    company: "Codebase Student Organization",
    description:
      "Selected for a competitive project team to build production software digitizing field inspection reports for a real construction special-inspections client. Built multiple jurisdiction-specific digital inspection forms - LA County Building & Safety, Registered Deputy Inspector, and Special Inspection - plus a reusable data-sheets section for the BFI investigation report and canvas-based e-signature capture.",
    technologies: ["React", "Vite", "Supabase", "PostgreSQL", "JavaScript"],
    current: false,
  },
  {
    period: "2025 - 2026",
    title: "ML Engineer",
    company: "Personal Project",
    description:
      "Built an end-to-end machine learning pipeline solo, adding Pydantic-based input validation and PSI-based drift monitoring to catch bad or shifted input before it reached the model. Diagnosed class imbalance in the training data and applied XGBoost's scale_pos_weight alongside a GridSearchCV hyperparameter sweep, nearly doubling recall on high-risk applicants from 36% to 58%. Containerized the pipeline with Docker and deployed it as a FastAPI web service.",
    technologies: ["Python", "XGBoost", "scikit-learn", "FastAPI", "Docker"],
    current: false,
  },
  {
    period: "Jan 2026 - May 2026",
    title: "Software Developer",
    company: "Saddleback College (CS1D)",
    description:
      "Built a Qt6 C++ desktop app that plans multi-stop college campus tours - a nearest-neighbor algorithm computes an optimized visiting order, tracks travel distance, and simulates souvenir shopping at each stop. Built collaboratively with a student team for CS1D (Data Structures).",
    technologies: ["C++", "Qt6", "SQLite", "CMake", "Git"],
    current: false,
  },
  {
    period: "Fall 2026 - Present",
    title: "CS Student",
    company: "Cal Poly San Luis Obispo",
    description:
      "Pursuing a B.S. in Computer Science with a Data Engineering concentration. Coursework includes Algorithms, Operating Systems, Database Systems, Data Science, and Machine Learning.",
    technologies: ["Python", "SQL", "C++", "Java", "Data Engineering"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/*Section Header*/}
        <div className="max-w-3xl">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here you can add a brief description of your experience and what
            you've accomplished.
          </p>
        </div>
        {/*Timeline*/}
        <div className="relative mt-16">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center animate-fade-in ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/*Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 shadow-[0_0_12px_rgba(32,178,166,0.9)]" />

                {/*Content */}
                <div className="pl-8 md:pl-0 md:w-1/2 md:odd:pr-12 md:even:pl-12">
                  <div
                    className={`glass rounded-2xl p-6 space-y-3 ${
                      idx % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-sm font-medium text-primary">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-transparent transition-all duration-300 hover:border-primary/50 hover:text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
