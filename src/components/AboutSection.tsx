import { Code, Database, Globe, Server, Brain, Terminal } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const focusAreas = [
  { icon: Code, label: "Java Development", desc: "Primary language" },
  { icon: Database, label: "DSA", desc: "Problem solving" },
  { icon: Server, label: "Backend Dev", desc: "Server-side logic" },
  { icon: Globe, label: "Web Dev", desc: "Full-stack capable" },
  { icon: Brain, label: "AI & ML", desc: "Currently learning" },
];

const stats = [
  { value: "9.39", label: "CGPA" },
  { value: "5+", label: "Projects" },
  { value: "100+", label: "Problems Solved Across Platforms" },
  { value: "3+", label: "Languages" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="py-28 border-t border-border relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-muted/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <Terminal size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">01.</span> about
            </p>
          </div>

          {/* HOVER ANIMATED TITLE */}
          <h2 className="group inline-block font-display text-4xl md:text-6xl font-black mb-16 cursor-default transition-all duration-300">

            <span className="inline-block transition-all duration-500 group-hover:translate-x-1 group-hover:tracking-wide">
              About Me
            </span>

            <span className="text-muted-foreground inline-block ml-1 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:text-terminal-green">
              .
            </span>

          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* LEFT SIDE */}
          <div
            className={`lg:col-span-3 space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            
            {/* TERMINAL BLOCK */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-muted-foreground/30">
              
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-mono text-xs text-muted-foreground ml-2">
                  about.md
                </span>
              </div>

              <div className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-terminal-green font-mono mr-2">→</span>
                  I'm a dedicated Computer Science Engineering student currently
                  pursuing my B.Tech degree at{" "}
                  <span className="text-foreground font-medium">
                    Vardhaman College of Engineering
                  </span>.
                  I am passionate about software development and building
                  impactful technology solutions.
                </p>

                <p>
                  <span className="text-terminal-green font-mono mr-2">→</span>
                  My primary focus is on{" "}
                  <span className="text-foreground font-medium">
                    Java development
                  </span>{" "}
                  and mastering{" "}
                  <span className="text-foreground font-medium">
                    Data Structures & Algorithms
                  </span>.
                  I'm actively expanding my knowledge in Artificial Intelligence
                  and Machine Learning while building practical applications.
                </p>

                <p>
                  <span className="text-terminal-green font-mono mr-2">→</span>
                  I believe in writing clean, efficient code and continuously
                  improving my problem-solving abilities through competitive
                  programming and real-world projects.
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`group bg-card border border-border rounded-xl p-4 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-muted-foreground/40 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <p className="font-display text-2xl font-black text-foreground group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>

                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`lg:col-span-2 space-y-3 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Focus Areas
            </p>

            {focusAreas.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group relative bg-card border border-border rounded-xl p-4 flex items-center gap-4 cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-muted-foreground/40 hover:bg-muted/20"
              >
                
                {/* ICON */}
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-all duration-300">
                  <Icon
                    size={18}
                    className="text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {label}
                  </p>

                  <p className="text-xs text-muted-foreground font-mono">
                    {desc}
                  </p>
                </div>

                {/* GLOW BORDER */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 border border-muted-foreground/20 pointer-events-none"></div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
