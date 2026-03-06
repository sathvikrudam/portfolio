import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const titles = [
  "Computer Science Engineering Student",
  "Passionate Java Developer",
  "Focused on Data Structures & Algorithms",
  "AI & ML Enthusiast",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 blur-2xl transition-all duration-700 ease-out"
        style={{
  background: `radial-gradient(
    220px circle at ${mousePos.x}% ${mousePos.y}%,
    hsla(0,0%,20%,0.25),
    transparent 65%
  )`,
}}
      />

      {/* Grid pattern overlay */}
      <div
  className="pointer-events-none absolute inset-0 opacity-[0.03] transition-transform duration-500 ease-out"
  style={{
    backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
    backgroundSize: "60px 60px",
    transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
  }}
/>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-muted-foreground/10"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 12}%`,
              animation: `float-particle ${4 + i}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-card/90 dark:bg-white/5 border border-border rounded-full px-4 py-2 animate-fade-in-up shadow-lg backdrop-blur-sm ring-1 ring-black/10 dark:ring-white/15">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terminal-green" />
              </span>
              <span className="text-xs font-mono text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Terminal greeting */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <p className="text-sm text-muted-foreground font-mono mb-4">
                <span className="text-green-600 dark:text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.9)]">$</span> whoami
              </p>

              <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight leading-[0.95]">
                <span className="inline-block hover:translate-x-1 transition-transform duration-300">Sathvik</span>
                <br />
                <span className="inline-block hover:translate-x-1 transition-transform duration-300">
                  Rudam<span className="text-muted-foreground">.</span>
                </span>
              </h1>
            </div>

            {/* Typewriter */}
            <div
              className="h-10 flex items-center font-mono text-sm md:text-base bg-card/50 border border-border rounded-lg px-4 py-2 max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.35s", opacity: 0 }}
            >
              <span className="text-terminal-green mr-2 select-none">&gt;</span>
              <span className="text-muted-foreground">{titles[titleIndex].slice(0, charIndex)}</span>
              <span className="cursor-blink ml-0.5 inline-block w-2 h-5 bg-foreground/80" />
            </div>

            {/* Description */}
            <p
              className="text-muted-foreground leading-relaxed max-w-xl text-sm md:text-base animate-fade-in-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              A Computer Science Engineering student with a strong passion for software development and problem solving. Specializing in{" "}
              <span className="text-foreground font-medium">Java programming</span> and{" "}
              <span className="text-foreground font-medium">Data Structures & Algorithms</span>.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.65s", opacity: 0 }}
            >
              <a
                href="#projects"
                className="group bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:shadow-[0_0_30px_hsl(0_0%_100%/0.15)] transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group border border-border px-7 py-3.5 rounded-full text-sm font-medium text-foreground hover:bg-card hover:border-muted-foreground/30 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
  href="/sathvikrudam.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group border border-border px-7 py-3.5 rounded-full text-sm font-medium text-muted-foreground hover:bg-card hover:text-foreground hover:border-muted-foreground/30 transition-all duration-300 flex items-center gap-2"
>
  <Download size={16} />
  Resume
</a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              <span className="text-xs font-mono text-muted-foreground">find_me →</span>
              <a
                href="https://github.com/sathvikrudam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sathvikrudam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Profile photo with enhanced styling */}
          <div
            className="flex-shrink-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-muted-foreground/10 via-transparent to-muted-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-border group-hover:border-muted-foreground/30 transition-all duration-500">
                <img
                  src={profilePhoto}
                  alt="Sathvik Rudam - Computer Science Student"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-3 -right-3 bg-card border border-border rounded-xl px-4 py-2 font-mono text-xs text-muted-foreground shadow-lg backdrop-blur-sm">
                <span className="text-terminal-green">●</span> sathvik.dev
              </div>

              {/* Stats tag */}
              <div className="absolute -top-3 -left-3 bg-card border border-border rounded-xl px-4 py-2 font-mono text-xs shadow-lg backdrop-blur-sm">
                <span className="text-foreground font-bold">9.39</span>
                <span className="text-muted-foreground ml-1">CGPA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
          <span className="text-xs font-mono text-muted-foreground">scroll</span>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          100% { transform: translateY(-30px) translateX(15px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
