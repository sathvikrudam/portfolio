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

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      console.error("Copy failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "Sending...") return;

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("Failed to send message.");
      }

    } catch {
      setStatus("Server error. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 border-t border-border relative overflow-hidden"
    >

      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-muted/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">

        {/* HEADER */}

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

          <div className="flex items-center gap-3 mb-3">
            <MessageSquare size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">07.</span> contact
            </p>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
            Get in Touch<span className="text-muted-foreground">.</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base max-w-lg mb-12">
            Interested in working together or have a question? Feel free to reach
            out through any of these channels.
          </p>

        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl">

          {/* CONTACT CARDS */}

          <div
            className={`grid grid-cols-2 gap-5 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >

            {contacts.map(({ icon: Icon, label, value, href }) => (

              <div
                key={label}
                className="relative bg-card border border-border rounded-2xl p-6 h-[140px] hover:border-muted-foreground/40 hover:-translate-y-1 transition-all duration-300"
              >

                {/* Copy button */}

                <button
                  onClick={() => handleCopy(value, label)}
                  className="absolute top-4 right-4 opacity-60 hover:opacity-100"
                >
                  {copied === label ? (
                    <span className="text-xs text-terminal-green font-mono">✓</span>
                  ) : (
                    <Copy size={14} />
                  )}
                </button>

                {/* Icon */}

                <div className="w-10 h-10 rounded-xl bg-muted/40 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-muted-foreground" />
                </div>

                {/* Label */}

                <p className="text-xs text-muted-foreground font-mono mb-1">
                  {label}
                </p>

                {/* Value */}

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

          {/* QUICK EMAIL */}

          <div className="flex flex-col justify-center">

            <div className="bg-card border border-border rounded-2xl p-8">

              <div className="flex items-center gap-2 mb-4">
                <Send size={18} className="text-terminal-green" />
                <h3 className="font-display font-bold">
                  Send a Quick Message
                </h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Whether it's a job opportunity, collaboration idea, or just want
                to say hello — I'd love to hear from you.
              </p>

              <a
                href="mailto:rudamsathvik@gmail.com"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:shadow-[0_0_30px_hsl(0_0%_100%/0.15)] transition-all duration-300"
              >
                <Mail size={16} />
                Send Email →
              </a>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div>

            <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-xl">

              <div className="flex items-center gap-2 mb-6">
                <Send size={18} className="text-terminal-green" />
                <h3 className="font-display font-bold text-lg">
                  Contact Form
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green"
                  required
                />

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green resize-none"
                  required
                />

                <button
                  type="submit"
                  disabled={status === "Sending..."}
                  className="w-full flex items-center justify-center gap-2 bg-terminal-green text-black py-3 rounded-lg text-sm font-semibold hover:scale-[1.02] hover:shadow-[0_0_25px_hsl(140_100%_40%/0.6)] transition-all disabled:opacity-50"
                >
                  <Send size={16} />
                  {status === "Sending..." ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p
                    className={`text-xs font-mono ${
                      status.includes("success")
                        ? "text-terminal-green"
                        : status === "Sending..."
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {status}
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;
