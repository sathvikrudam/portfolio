import { Code, Database, Globe, Server, Brain, Terminal, Coffee, Zap } from "lucide-react";
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
  { value: "6th", label: "Semester" },
  { value: "3+", label: "Languages" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 border-t border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-muted/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-3">
            <Terminal size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">01.</span> about
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-16">
            About Me<span className="text-muted-foreground">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Text - 3 cols */}
          <div className={`lg:col-span-3 space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Terminal-style about block */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <span className="w-3 h-3 rounded-full bg-red-500" />
<span className="w-3 h-3 rounded-full bg-yellow-400" />
<span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-mono text-xs text-muted-foreground ml-2">about.md</span>
              </div>
              <div className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-terminal-green font-mono mr-2">→</span>
                  I'm a dedicated Computer Science Engineering student currently pursuing my B.Tech degree at{" "}
                  <span className="text-foreground font-medium">Vardhaman College of Engineering</span>.
                  I am passionate about software development and building impactful technology solutions.
                </p>
                <p>
                  <span className="text-terminal-green font-mono mr-2">→</span>
                  My primary focus is on{" "}
                  <span className="text-foreground font-medium">Java development</span> and mastering{" "}
                  <span className="text-foreground font-medium">Data Structures & Algorithms</span>.
                  I'm actively expanding my knowledge in Artificial Intelligence and Machine Learning while building practical applications.
                </p>
                <p>
                  <span className="text-terminal-green font-mono mr-2">→</span>
                  I believe in writing clean, efficient code and continuously improving my problem-solving abilities through competitive programming and real-world projects.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-card border border-border rounded-xl p-4 text-center hover:border-muted-foreground/30 transition-all duration-500 delay-${(i + 3) * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <p className="font-display text-2xl font-black text-foreground">{stat.value}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus areas - 2 cols */}
          <div className={`lg:col-span-2 space-y-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Focus Areas</p>
            {focusAreas.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="group bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-muted-foreground/30 hover:bg-muted/20 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors shrink-0">
                  <Icon size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground font-mono">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
