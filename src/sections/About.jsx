import { Activity, Sparkles, Cpu, Users } from "lucide-react";

const highlights = [
  {
    icon: Activity,
    title: "Production MLOps",
    desc: "Architected end-to-end credit risk pipelines using XGBoost and Docker, achieving a 0.84 F1-score and deploying as high-availability FastAPI REST services.",
  },
  {
    icon: Sparkles,
    title: "Agentic AI & Automation",
    desc: "Engineered LLM-powered ETL pipelines with Gemini 2.0 Flash to autonomously process data streams with 95% extraction accuracy.",
  },
  {
    icon: Cpu,
    title: "Systems & Software Rigor",
    desc: "Developed complex cross-platform applications in C++ and Qt6, optimizing navigation logic and implementing robust local state-management via SQLite.",
  },
  {
    icon: Users,
    title: "Technical Mentorship",
    desc: "Mentored 30+ students per semester in engineering labs, leading to a 15% improvement in project accuracy and reducing classroom downtime by 89%.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* The Main Grid: Only 2 direct children */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* COLUMN 1: Text Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="animate-fade-in">
                <span className="text-[#20B2A6] text-sm font-medium tracking-widest uppercase font-mono">
                  About Me
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in animation-delay-100">
                Building the Future, <br />
                <span className="font-serif italic font-normal text-[#20B2A6]">
                  one component at a time
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed max-w-xl">
              <p>
                Hi, I'm Devon Scott — a Computer Science student and Software
                Engineer specializing in Python, Machine Learning, and MLOps. I
                build end-to-end intelligent systems that bridge the gap between
                complex data research and scalable, production-ready
                applications
              </p>
              <p>
                My approach is rooted in mathematical rigor and system
                reliability. Whether architecting agentic AI workflows with
                Gemini 2.0 Flash or building C++ systems, I focus on the
                "hidden" 90% of engineering: data validation, containerization,
                and building code that survives the real world
              </p>
              <p>
                Currently focused on securing a Summer 2026 internship where I
                can help scale the next generation of AI-driven infrastructure
                while continuing my studies at Irvine Valley College
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="glass p-8 rounded-2xl border-l-4 border-[#20B2A6] bg-white/5 animate-fade-in animation-delay-300">
              <p className="text-xl font-medium italic text-white leading-relaxed">
                "Bridging the gap between heavy-math research and
                production-grade software architecture. I don't just build
                models; I engineer the MLOps infrastructure and agentic AI that
                make them survive the real world."
              </p>
            </div>
          </div>

          {/* COLUMN 2: Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:pt-20">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-2xl group hover:border-[#20B2A6]/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#20B2A6]/10 flex items-center justify-center mb-6 group-hover:bg-[#20B2A6]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#20B2A6]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
