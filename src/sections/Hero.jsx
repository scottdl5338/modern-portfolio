import { Button } from "@/components/Button";
import { Download, ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

// Precompute random positions for dots (runs once on mount)

const dotPositions = [...Array(50)].map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 8 + Math.random() * 10,
}));

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
          </div>
          {/* Right Column - Image */}
        </div>
      </div>
    </section>
  );
};
