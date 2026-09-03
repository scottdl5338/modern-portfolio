import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "scottdl5338@gmail.com",
    href: "mailto:scottdl5338@gmail.com",
  },
  {
    icon: Mail,
    label: "School Email",
    value: "dscott26@calpoly.edu",
    href: "mailto:dscott26@calpoly.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(949) 702-6984",
    href: "tel:+19497026984",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Luis Obispo, CA",
    href: null,
  },
];

const socials = [
  { icon: Github, href: "https://github.com/scottdl5338" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/devon-scott-8a26223a7/",
  },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:scottdl5338@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Bg Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
            Let's build something
            <span className="font-serif italic font-normal text-[#20B2A6]">
              {" "}
              great together.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a role, a project, or just a question? My inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in animation-delay-200">
            {contactInfo.map((item, idx) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={idx}
                  {...(item.href ? { href: item.href } : {})}
                  className="glass rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {item.value}
                    </div>
                  </div>
                </Wrapper>
              );
            })}

            {/* Socials */}
            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Find me elsewhere
              </div>
              <div className="flex items-center gap-3">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-8 space-y-6 animate-fade-in animation-delay-300"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="relative overflow-hidden rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 py-3 flex items-center justify-center gap-2 transition-all"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
