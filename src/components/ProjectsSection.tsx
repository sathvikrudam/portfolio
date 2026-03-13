import { ExternalLink, FolderGit2, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "CipherShare: Secure File Sharing System",
    description:
      "A secure file sharing web application that encrypts files before transmission, ensuring privacy and safe data exchange between users.",
    tags: ["Encryption", "JavaScript", "Web Security", "Cryptography"],
    color: "from-muted-foreground/10 to-transparent",
    number: "01",
    link: "https://github.com/sathvikrudam/ciphershare",
  },
  {
    title: "CollabDocs: Write together, in real time.",
    description:
      "A real-time collaborative document editing platform that allows multiple users to work on the same document simultaneously with live updates.",
    tags: ["Real-time", "WebSockets", "JavaScript", "Collaboration"],
    color: "from-muted-foreground/5 to-transparent",
    number: "02",
    link: "https://github.com/sathvikrudam/collab-docs",
  },
  {
    title: "Automated Evaluation of Descriptive Answer Sheets Using OCR and Semantic NLP",
    description:
      "An AI-powered system that automatically evaluates handwritten descriptive answer sheets using OCR for text extraction and NLP techniques for intelligent assessment.",
    tags: ["Python", "OCR", "NLP", "Machine Learning"],
    color: "from-muted-foreground/10 to-transparent",
    number: "03",
    link: "https://github.com/sathvikrudam/answer-grader",
  },
  {
    title: "Online Grocery Store App",
    description:
      "A web application that allows users to browse grocery products, add items to a cart, and place orders through a simple and intuitive interface.",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    color: "from-muted-foreground/5 to-transparent",
    number: "04",
    link: "https://github.com/sathvikrudam/GroceryApp",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="py-28 border-t border-border relative overflow-hidden"
    >
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <FolderGit2 size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">04.</span> projects
            </p>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-black mb-16">
            Selected Works
            <span className="text-muted-foreground">.</span>
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-muted-foreground/30 transition-all duration-700 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              {/* Gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative flex flex-col gap-6 p-6 md:p-8">
                {/* Number */}
                <div className="absolute right-6 top-6">
                  <span className="font-display text-4xl font-black text-muted/40 group-hover:text-muted-foreground/20 transition-colors">
                    {project.number}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-start justify-between gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-bold text-xl text-foreground hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {project.title}
                    </h3>
                  )}

                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground/30 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0 mt-1"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
