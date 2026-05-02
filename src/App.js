import { useState, useEffect, useRef } from "react";

const SKILLS = [
  { name: "JavaScript", icon: "JS" }, { name: "Node.js", icon: "NJ" },
  { name: "Express.js", icon: "EX" }, { name: "MongoDB", icon: "MG" },
  { name: "Next.js", icon: "NX" }, { name: "REST APIs", icon: "AP" },
  { name: "Python", icon: "PY" }, { name: "AI Dev", icon: "AI" },
  { name: "Automation", icon: "AU" }, { name: "Cyber Security", icon: "CS" },
  { name: "Git", icon: "GT" }, { name: "Prompt Eng.", icon: "PE" },
];

const PROJECTS = [
  { title: "Bhagwan Shree Ispat", desc: "Industry website for a manufacturing business — services, branding, and digital presence for a lathe machine company.", tags: ["Web", "Business", "Branding"], link: "https://bhagwan-shree-sizz.vercel.app/", live: true },
  { title: "Online Marketplace", desc: "Full-stack marketplace for local artisans to onboard, list products, and connect with customers.", tags: ["Full Stack", "MongoDB", "Node.js"], link: "https://onlinemarketplace-1.onrender.com/", live: true },
  { title: "AI Finance App", desc: "AI-powered personal finance dashboard with smart insights, expense categorization, and visual analytics.", tags: ["AI", "Finance", "Dashboard"], link: "https://ai-finance-app-ten.vercel.app/", live: true },
  { title: "AI Revenue Engine", desc: "Flagship SaaS — AI business system for lead capture, customer categorization, sales tracking, and automated revenue recovery.", tags: ["AI SaaS", "Automation", "Dashboard"], link: "#", live: false },
  { title: "Company Management Dashboard", desc: "All-in-one business OS with sales tracking, order management, accounting, and CEO-level analytics.", tags: ["Dashboard", "Full Stack", "Business"], link: "#", live: false },
  { title: "Trading Software", desc: "Python-based software for market analysis, automated trading logic, and data-driven decisions.", tags: ["Python", "Automation", "Finance"], link: "#", live: false },
];

const SERVICES = [
  { icon: "⚡", title: "Startup MVP", desc: "Idea to working product — fast." },
  { icon: "🤖", title: "AI Automation", desc: "AI workflows & revenue systems." },
  { icon: "📊", title: "Dashboards", desc: "Admin panels & business ops." },
  { icon: "🌐", title: "Full Stack Apps", desc: "End-to-end web applications." },
  { icon: "🚀", title: "SaaS Products", desc: "Scalable, investor-ready builds." },
  { icon: "🔒", title: "Cyber Security", desc: "Security analysis & pentesting." },
];

const accent = "#38bdf8";
const accentDim = "#0ea5e9";
const bg = "#080b12";
const surface = "#0f1623";
const surface2 = "#151d2e";
const border = "#1e2d45";
const textPrimary = "#e2e8f0";
const textMuted = "#64748b";
const textSub = "#94a3b8";

function useVisible() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

function FadeIn({ children, delay = 0 }) {
  const [ref, vis] = useVisible();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: 11, letterSpacing: 3, color: accent, fontWeight: 700, textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ display: "block", width: 24, height: 1, background: accent }} />{children}
    </div>
  );
}

const downloadResume = () => {
  const content = `MOHD FARHAAD\nFull Stack Developer | AI Builder | Automation Engineer | Cyber Security Analyst\n\nCONTACT\nPhone: +91 8377089148\nEmail: mdfarhaad@gmail.com\nGitHub: https://github.com/farhaad37\nInstagram: https://www.instagram.com/farhaad3730/\nTryHackMe: https://tryhackme.com/p/joninhacker02\nLocation: Delhi, India\n\nEDUCATION\nRajdhani University / IGNOU (2022–2025) — Bachelor in Computer Applications\nSarvodya Bal Vidyalya (2020–2022) — Secondary Education\n\nSKILLS\nJavaScript, Node.js, Express.js, MongoDB, Next.js, REST APIs, Python, AI Dev, Automation, Cyber Security, Git, Prompt Engineering\n\nLIVE PROJECTS\n1. Bhagwan Shree Ispat — https://bhagwan-shree-sizz.vercel.app/\n2. Online Marketplace — https://onlinemarketplace-1.onrender.com/\n3. AI Finance App — https://ai-finance-app-ten.vercel.app/\n\nACHIEVEMENTS\nTryHackMe Level 9, 30+ rooms solved`;
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "Mohd_Farhaad_Resume.txt"; a.click();
  URL.revokeObjectURL(url);
};

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w < 1024;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const navLinks = ["about", "skills", "projects", "services", "contact"];

  return (
    <div style={{ background: bg, color: textPrimary, fontFamily: "system-ui, sans-serif", minHeight: "100vh", overflowX: "hidden" }}>

      {/* Navbar */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(8,11,18,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${border}` : "none", transition: "all 0.3s", padding: "0 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <span style={{ fontWeight: 800, fontSize: 20, color: accent }}>MF</span>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: `1px solid ${border}`, color: textPrimary, fontSize: 20, cursor: "pointer", borderRadius: 6, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          ) : (
            <nav style={{ display: "flex", gap: 24 }}>
              {navLinks.map(l => (
                <button key={l} onClick={() => go(l)} style={{ background: "none", border: "none", color: textSub, fontSize: 13, fontWeight: 500, cursor: "pointer", textTransform: "capitalize", letterSpacing: 0.5, padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = accent} onMouseLeave={e => e.target.style.color = textSub}
                >{l}</button>
              ))}
            </nav>
          )}
        </div>
        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div style={{ background: "rgba(8,11,18,0.98)", borderTop: `1px solid ${border}`, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map(l => (
              <button key={l} onClick={() => go(l)} style={{ background: "none", border: "none", color: textSub, fontSize: 15, fontWeight: 500, cursor: "pointer", textTransform: "capitalize", padding: "10px 0", textAlign: "left", borderBottom: `1px solid ${border}` }}>{l}</button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: isMobile ? "100px 20px 60px" : "80px 24px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(56,189,248,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 920, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr auto", gap: isMobile ? 40 : 60, alignItems: "center" }}>

          {/* Avatar — show on top for mobile */}
          {isMobile && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AvatarCard activeImg={activeImg} setActiveImg={setActiveImg} size={180} />
            </div>
          )}

          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, letterSpacing: 3, color: accent, fontWeight: 700, textTransform: "uppercase", border: `1px solid ${border}`, padding: "6px 14px", borderRadius: 20, background: surface }}>
                Full Stack · AI Builder · Cyber Security
              </span>
            </div>
            <h1 style={{ fontSize: isMobile ? "clamp(36px,10vw,52px)" : "clamp(40px,6vw,72px)", fontWeight: 900, margin: "0 0 10px", lineHeight: 1.05, letterSpacing: -2 }}>
              Mohd <span style={{ color: accent }}>Farhaad</span>
            </h1>
            <p style={{ fontSize: isMobile ? 15 : 16, color: textSub, maxWidth: 480, margin: "0 0 10px", lineHeight: 1.75 }}>
              <strong style={{ color: textPrimary, fontWeight: 600 }}>Building real solutions. Not just demo projects.</strong>
            </p>
            <p style={{ fontSize: 14, color: textMuted, margin: "0 0 28px", lineHeight: 1.7 }}>
              I turn business ideas into AI-powered systems, MVPs, and automation platforms.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
              <button onClick={() => go("projects")} style={{ background: accent, color: "#020617", fontWeight: 700, fontSize: 14, border: "none", padding: "12px 22px", borderRadius: 8, cursor: "pointer" }}>View Projects</button>
              <button onClick={downloadResume} style={{ background: "transparent", color: textPrimary, fontWeight: 600, fontSize: 14, border: `1px solid ${border}`, padding: "12px 22px", borderRadius: 8, cursor: "pointer" }}>⬇ Resume</button>
              <a href="tel:+918377089148" style={{ background: "transparent", color: textPrimary, fontWeight: 600, fontSize: 14, border: `1px solid ${border}`, padding: "12px 22px", borderRadius: 8, cursor: "pointer", textDecoration: "none" }}>📞 Call</a>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[{ label: "GitHub", href: "https://github.com/farhaad37" }, { label: "Instagram", href: "https://www.instagram.com/farhaad3730/" }, { label: "TryHackMe", href: "https://tryhackme.com/p/joninhacker02" }].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: textMuted, textDecoration: "none", fontWeight: 500 }}>{s.label} →</a>
              ))}
            </div>
          </div>

          {/* Avatar — desktop only */}
          {!isMobile && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <AvatarCard activeImg={activeImg} setActiveImg={setActiveImg} size={220} />
              <div style={{ fontSize: 11, color: textMuted, letterSpacing: 1 }}>Delhi, India</div>
            </div>
          )}
        </div>
      </section>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: isMobile ? "0 16px" : "0 24px" }}>

        {/* About */}
        <section id="about" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <SectionLabel>About Me</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr", gap: 36, alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: isMobile ? 24 : 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: -0.8 }}>
                  I don't just write code.<br /><span style={{ color: accent }}>I build businesses.</span>
                </h2>
                <p style={{ color: textSub, lineHeight: 1.85, margin: "0 0 14px", fontSize: 14 }}>
                  Self-driven Full Stack Developer, AI Builder, and Cyber Security analyst pursuing BCA at Rajdhani University (IGNOU), Delhi.
                </p>
                <p style={{ color: textSub, lineHeight: 1.85, margin: "0 0 20px", fontSize: 14 }}>
                  I specialize in turning startup ideas into working MVPs, dashboards, and AI automation systems — thinking like a Developer + Founder + Product Architect.
                </p>
                <div style={{ display: "flex", gap: 24 }}>
                  {[["3+", "Live Projects"], ["30+", "THM Rooms"], ["Lvl 9", "TryHackMe"]].map(([val, label]) => (
                    <div key={label}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: accent }}>{val}</div>
                      <div style={{ fontSize: 12, color: textMuted }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {["Practical & fast", "Business-oriented", "AI automation", "MVP specialist", "Full product vision", "Cyber security"].map(t => (
                  <div key={t} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 14px", fontSize: 13, color: textSub, fontWeight: 500 }}>
                    <span style={{ color: accent, marginRight: 8 }}>✓</span>{t}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Skills */}
        <section id="skills" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <SectionLabel>Skills</SectionLabel>
            <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 800, margin: "0 0 24px", letterSpacing: -0.5 }}>Tech Stack</h2>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "100px" : "120px"}, 1fr))`, gap: 10 }}>
              {SKILLS.map((s, i) => (
                <FadeIn key={s.name} delay={i * 40}>
                  <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "14px 10px", textAlign: "center", transition: "border-color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = accent}
                    onMouseLeave={e => e.currentTarget.style.borderColor = border}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, color: accent, letterSpacing: 1, marginBottom: 6, fontFamily: "monospace" }}>{s.icon}</div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: textSub }}>{s.name}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Projects */}
        <section id="projects" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <SectionLabel>Projects</SectionLabel>
            <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 800, margin: "0 0 8px", letterSpacing: -0.5 }}>What I've Built</h2>
            <p style={{ color: textMuted, fontSize: 14, margin: "0 0 28px" }}>Real products. Real clients. Real impact.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 60}>
                <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 12, padding: "18px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accentDim; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: textPrimary }}>{p.title}</span>
                      {p.live && <span style={{ fontSize: 10, background: "rgba(56,189,248,0.12)", color: accent, border: `1px solid rgba(56,189,248,0.3)`, padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>LIVE</span>}
                    </div>
                    <p style={{ fontSize: 13, color: textSub, lineHeight: 1.7, margin: "0 0 12px" }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                      {p.tags.map(t => <span key={t} style={{ fontSize: 11, color: textMuted, background: surface2, border: `1px solid ${border}`, borderRadius: 20, padding: "2px 10px" }}>{t}</span>)}
                    </div>
                  </div>
                  {p.link !== "#" && <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: accent, textDecoration: "none", fontWeight: 600 }}>View Live →</a>}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 800, margin: "0 0 24px", letterSpacing: -0.5 }}>What I Can Build For You</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 50}>
                <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "16px", transition: "border-color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = accent}
                  onMouseLeave={e => e.currentTarget.style.borderColor = border}
                >
                  <div style={{ fontSize: 20, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: textPrimary, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: textMuted }}>{s.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ paddingBottom: 100 }}>
          <FadeIn>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: isMobile ? "28px 20px" : "48px 40px" }}>
              <SectionLabel>Contact</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr", gap: 40, alignItems: "start" }}>
                <div>
                  <h2 style={{ fontSize: isMobile ? 24 : 30, fontWeight: 800, margin: "0 0 12px", letterSpacing: -0.8 }}>
                    Let's build something <span style={{ color: accent }}>great</span>.
                  </h2>
                  <p style={{ color: textSub, fontSize: 14, lineHeight: 1.8, margin: "0 0 24px" }}>
                    Need an MVP, AI automation system, or a complete web platform? I'm ready to execute.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { icon: "📞", label: "Phone", val: "+91 8377089148", href: "tel:+918377089148" },
                      { icon: "📧", label: "Email", val: "mdfarhaad@gmail.com", href: "mailto:mdfarhaad@gmail.com" },
                      { icon: "📍", label: "Location", val: "Delhi, India", href: null },
                    ].map(c => (
                      <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 8, background: surface2, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{c.icon}</div>
                        <div>
                          <div style={{ fontSize: 11, color: textMuted, marginBottom: 2 }}>{c.label}</div>
                          {c.href ? <a href={c.href} style={{ fontSize: 14, color: accent, fontWeight: 600, textDecoration: "none" }}>{c.val}</a>
                            : <div style={{ fontSize: 14, color: textSub }}>{c.val}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontSize: 13, color: textMuted, marginBottom: 4, fontWeight: 600 }}>Find me on</div>
                  {[
                    { label: "GitHub", sub: "github.com/farhaad37", href: "https://github.com/farhaad37", icon: "💻" },
                    { label: "Instagram", sub: "@farhaad3730", href: "https://www.instagram.com/farhaad3730/", icon: "📷" },
                    { label: "TryHackMe", sub: "Level 9 · 30+ rooms", href: "https://tryhackme.com/p/joninhacker02", icon: "🔒" },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: surface2, border: `1px solid ${border}`, borderRadius: 10, textDecoration: "none", transition: "border-color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = accent}
                      onMouseLeave={e => e.currentTarget.style.borderColor = border}
                    >
                      <span style={{ fontSize: 18 }}>{s.icon}</span>
                      <div>
                        <div style={{ fontSize: 13, color: textPrimary, fontWeight: 600 }}>{s.label}</div>
                        <div style={{ fontSize: 11, color: textMuted }}>{s.sub}</div>
                      </div>
                      <span style={{ marginLeft: "auto", color: accent }}>→</span>
                    </a>
                  ))}
                  <button onClick={downloadResume} style={{ marginTop: 6, background: accent, color: "#020617", fontWeight: 700, fontSize: 14, border: "none", padding: "13px", borderRadius: 10, cursor: "pointer" }}>
                    ⬇ Download My Resume
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

      </div>

      <div style={{ borderTop: `1px solid ${border}`, textAlign: "center", padding: "20px 16px", color: textMuted, fontSize: 12 }}>
        Built by Mohd Farhaad · Full Stack Developer & AI Builder · Delhi, India
      </div>
    </div>
  );
}

function AvatarCard({ activeImg, setActiveImg, size }) {
  return (
    <div style={{ width: size, height: size * 1.27, borderRadius: 16, border: `2px solid ${border}`, overflow: "hidden", position: "relative", background: surface2, flexShrink: 0 }}>
      {[
        { bg: "linear-gradient(135deg, #0d1b2e 0%, #0f2744 100%)", emoji: "👨‍💻", name: "MOHD FARHAAD", sub: "Developer · Builder", quote: '"Building real solutions.\nNot just demo projects."' },
        { bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", emoji: "🧑‍💼", name: "Mohd Farhaad", sub: "AI Builder · Problem Solver", quote: '"Turn Ideas Into Reality.\nAlways Building."' },
      ].map((item, i) => (
        <div key={i} style={{ display: activeImg === i ? "flex" : "none", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column", background: item.bg, position: "absolute", inset: 0, padding: 12, boxSizing: "border-box" }}>
          <div style={{ fontSize: size * 0.27, marginBottom: 8 }}>{item.emoji}</div>
          <div style={{ fontSize: size * 0.06, color: accent, fontWeight: 700, letterSpacing: 1, textAlign: "center" }}>{item.name}</div>
          <div style={{ fontSize: size * 0.055, color: textMuted, marginTop: 4, textAlign: "center" }}>{item.sub}</div>
          <div style={{ marginTop: 10, fontSize: size * 0.048, color: textMuted, textAlign: "center", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.quote}</div>
        </div>
      ))}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(8,11,18,0.8))", padding: "16px 12px 10px", display: "flex", gap: 6, justifyContent: "center" }}>
        {[0, 1].map(i => (
          <button key={i} onClick={() => setActiveImg(i)} style={{ width: i === activeImg ? 18 : 7, height: 7, borderRadius: 4, background: i === activeImg ? accent : border, border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
        ))}
      </div>
    </div>
  );
}