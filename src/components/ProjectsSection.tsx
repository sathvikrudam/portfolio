import { ExternalLink, FolderGit2, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Online Grocery Store App",
    description:
      "A web application that allows users to browse grocery products, add items to a cart, and place orders through a simple and intuitive interface.",
    tags: ["HTML", "CSS", "JavaScript", "Backend"],
    color: "from-muted-foreground/10 to-transparent",
    number: "01",
    link: "https://github.com/sathvikrudam/GroceryApp"
  },
  {
    title: "AI Smart Answer Evaluation",
    description:
      "An AI-based system designed to evaluate handwritten descriptive answer sheets using OCR and AI techniques to extract and assess answers automatically.",
    tags: ["Python", "AI", "OCR", "Machine Learning"],
    color: "from-muted-foreground/5 to-transparent",
    number: "02",
  },
  {
    title: "Mini Paddy Dryer",
    description:
      "A low-cost and efficient paddy drying system designed for farmers to help dry harvested rice quickly and affordably. Agricultural innovation focusing on affordability.",
    tags: ["Agriculture", "Innovation", "Hardware"],
    color: "from-muted-foreground/10 to-transparent",
    number: "03",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-28 border-t border-border relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-3">
            <FolderGit2 size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">04.</span> projects
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-16">
            Selected Works<span className="text-muted-foreground">.</span>
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-muted-foreground/30 transition-all duration-700 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8">
                {/* Number */}
                <div className="shrink-0">
                  <span className="font-display text-5xl font-black text-muted/80 group-hover:text-muted-foreground/20 transition-colors">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground/30 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-muted/50 text-muted-foreground px-3 py-1 rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
