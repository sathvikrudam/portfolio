import { Mail, Phone, Linkedin, Github, Copy, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "rudamsathvik@gmail.com",
    href: "mailto:rudamsathvik@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8309662141",
    href: "tel:+918309662141",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sathvikrudam",
    href: "https://www.linkedin.com/in/sathvikrudam/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sathvikrudam",
    href: "https://github.com/sathvikrudam",
  },
];

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-muted/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">06.</span> contact
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
            Get in Touch<span className="text-muted-foreground">.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mb-12">
            Interested in working together or have a question? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
          {/* Contact cards */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {contacts.map(({ icon: Icon, label, value, href }, i) => (
              <div
                key={label}
                className="group bg-card border border-border rounded-2xl p-5 hover:border-muted-foreground/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors">
                    <Icon size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <button
                    onClick={() => handleCopy(value)}
                    className="text-muted-foreground/30 hover:text-foreground transition-colors"
                    title="Copy"
                  >
                    {copied === value ? (
                      <span className="text-xs font-mono text-terminal-green">Copied!</span>
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-1">{label}</p>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-foreground font-medium hover:underline truncate block"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* Quick message CTA */}
          <div className={`flex flex-col justify-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Send size={18} className="text-terminal-green" />
                <h3 className="font-display font-bold text-foreground">Send a Quick Message</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Whether it's a job opportunity, collaboration idea, or just want to say hello — I'd love to hear from you.
              </p>
              <a
                href="mailto:rudamsathvik@gmail.com"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:shadow-[0_0_30px_hsl(0_0%_100%/0.15)] transition-all duration-300"
              >
                <Mail size={16} />
                Send Email
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
