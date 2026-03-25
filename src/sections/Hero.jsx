import { Button } from "@/components/Button";
import { Download, ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { ChevronDown } from "lucide-react";

// Precompute random positions for dots (runs once on mount)

const dotPositions = [...Array(50)].map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 8 + Math.random() * 10,
}));

const skills = [
  "Python",
  "Java",
  "C++",
  "Go",
  "JavaScript",
  "TypeScript",
  "SQL",
  "XGBoost",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "FastAPI",
  "Spring Boot",
  "Node.js",
  "React",
  "Qt6",
  "Streamlit",
  "Flutter",
  "REST APIs",
  "Docker",
  "Kubernetes",
  "AWS (EC2/S3)",
  "Google Cloud Platform (GCP)",
  "PostgreSQL",
  "SQLite",
  "MongoDB",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animation: `slow-drift ${pos.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 rounded-full glass text-sm text-primary animate-fade-in">
                <span className="w-2 h-2 bg-primary rounded-dull animate-pulse" />
                Software Engineer & Machine Learning Engineer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-400">
                Crafting{" "}
                <span className="text-primary glow-text">Intelligent</span>
                <br />
                Solutions for a Smarter Future with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision, creativity, and impact in every line of code.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Hi, I'm Devon Scott — a Computer Science student specializing in
                Python, Machine Learning, and MLOps. I build high-performance
                predictive pipelines and automated AI tools that turn complex
                data into scalable engineering solutions.
              </p>
            </div>
            {/*CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-800">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-800">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/scottdl5338" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/devon-scott-8a26223a7/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-10 h-10" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />

              <div className="relative glass round-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Devon Scott"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div clasName="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Avaliable for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-800">
                  <div className="text-2xl font-bold text-primary">
                    2nd Year Computer Science Student
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Irvine Valley College
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 aniamte-fade-in animation-delay-800">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
