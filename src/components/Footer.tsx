import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="font-display text-lg font-bold tracking-tight">
            <span className="text-muted-foreground font-light">{"<"}</span>
            Sathvik
            <span className="text-muted-foreground font-light">{" />"}</span>
          </a>
          <span className="text-xs text-muted-foreground font-mono">© 2025 All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/sathvikrudam" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/sathvikrudam/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all">
            <Linkedin size={16} />
          </a>
          <a href="mailto:rudamsathvik@gmail.com"
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all">
            <Mail size={16} />
          </a>
        </div>

        <a
          href="#"
          className="group flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
