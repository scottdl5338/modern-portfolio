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
    </section>
  );
};
