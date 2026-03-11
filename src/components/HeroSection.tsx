import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";

/*
TEMPORARILY DISABLED PROFILE IMAGE
Uncomment when you want to use the photo again
*/
// import profilePhoto from "@/assets/profile-photo.jpg";

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
    }
    else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    }
    else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    }
    else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);

  }, [charIndex, deleting, titleIndex]);

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {

      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });

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

      {/* Grid pattern */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] transition-transform duration-500 ease-out"
        style={{
          backgroundImage:
            `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px),
             linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
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

        {/* HERO CONTENT */}

        {/* 
        NOTE:
        lg:flex-row removed temporarily since photo is disabled
        */}

        <div className="flex flex-col items-start gap-16 max-w-4xl">

          {/* TEXT CONTENT */}

          <div className="space-y-8">

            {/* Status badge */}

            <div className="inline-flex items-center gap-2 bg-card/90 dark:bg-white/5 border border-border rounded-full px-4 py-2 animate-fade-in-up shadow-lg backdrop-blur-sm ring-1 ring-black/10 dark:ring-white/15">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terminal-green" />
              </span>

              <span className="text-xs font-mono text-muted-foreground">
                Available for opportunities
              </span>

            </div>

            {/* Terminal greeting */}

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>

              <p className="text-sm text-muted-foreground font-mono mb-4">
                <span className="text-green-600 dark:text-green-400">$</span> whoami
              </p>

              <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight leading-[0.95]">
                Sathvik
                <br />
                Rudam<span className="text-muted-foreground">.</span>
              </h1>

            </div>

            {/* Typewriter */}

            <div
              className="h-10 flex items-center font-mono text-sm md:text-base bg-card/50 border border-border rounded-lg px-4 py-2 max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.35s", opacity: 0 }}
            >

              <span className="text-terminal-green mr-2">&gt;</span>

              <span className="text-muted-foreground">
                {titles[titleIndex].slice(0, charIndex)}
              </span>

              <span className="cursor-blink ml-0.5 inline-block w-2 h-5 bg-foreground/80" />

            </div>

            {/* Description */}

            <p
              className="text-muted-foreground leading-relaxed max-w-xl text-sm md:text-base animate-fade-in-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              A Computer Science Engineering student with a strong passion for software development and problem solving.
              Specializing in <span className="text-foreground font-medium">Java programming</span> and
              <span className="text-foreground font-medium"> Data Structures & Algorithms</span>.
            </p>

            {/* Buttons */}

            <div
              className="flex flex-wrap gap-3 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.65s", opacity: 0 }}
            >

              <a
                href="#projects"
                className="group bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="group border border-border px-7 py-3.5 rounded-full text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </a>

              <a
                href="/sathvikrudam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border px-7 py-3.5 rounded-full text-sm font-medium text-muted-foreground flex items-center gap-2"
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

              <span className="text-xs font-mono text-muted-foreground">
                find_me →
              </span>

              <a
                href="https://github.com/sathvikrudam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/sathvikrudam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>

            </div>

          </div>

          {/* PROFILE PHOTO SECTION (TEMPORARILY DISABLED)

          Uncomment this entire block to enable photo again

          */}

          {/*
          <div className="flex-shrink-0 animate-fade-in-up">

            <div className="relative w-96 h-96 rounded-2xl overflow-hidden border border-border">

              <img
                src={profilePhoto}
                alt="Sathvik Rudam"
                className="w-full h-full object-cover"
              />

            </div>

          </div>
          */}

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
