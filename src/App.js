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
  { title: "Online Marketplace", desc: "Full-stack marketplace platform enabling local artisans to onboard, list products, and connect with customers.", tags: ["Full Stack", "MongoDB", "Node.js"], link: "https://onlinemarketplace-1.onrender.com/", live: true },
  { title: "AI Finance App", desc: "AI-powered personal finance dashboard with smart insights, expense categorization, and visual analytics.", tags: ["AI", "Finance", "Dashboard"], link: "https://ai-finance-app-ten.vercel.app/", live: true },
  { title: "AI Revenue Engine", desc: "Flagship SaaS concept — AI business system for lead capture, customer categorization, sales tracking, and automated revenue recovery.", tags: ["AI SaaS", "Automation", "Dashboard"], link: "#", live: false },
  { title: "Company Management Dashboard", desc: "All-in-one business OS with sales tracking, order management, credit/debit accounting, and CEO-level analytics.", tags: ["Dashboard", "Full Stack", "Business"], link: "#", live: false },
  { title: "Trading Software", desc: "Python-based software for market analysis, automated trading logic, and data-driven decision workflows.", tags: ["Python", "Automation", "Finance"], link: "#", live: false },
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

function Btn({ children, onClick, style = {}, href }) {
  const s = {
    background: accent, color: "#020617", fontWeight: 700, fontSize: 14,
    border: "none", padding: "12px 24px", borderRadius: 8, cursor: "pointer",
    letterSpacing: 0.3, textDecoration: "none", display: "inline-block", ...style
  };
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={s}>{children}</a>;
  return <button onClick={onClick} style={s}>{children}</button>;
}

function OutlineBtn({ children, onClick, href, style = {} }) {
  const [hov, setHov] = useState(false);
  const s = {
    background: "transparent", color: hov ? accent : textPrimary, fontWeight: 600, fontSize: 14,
    border: `1px solid ${hov ? accent : border}`, padding: "12px 24px", borderRadius: 8, cursor: "pointer",
    textDecoration: "none", display: "inline-block", transition: "all 0.2s", ...style
  };
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={s} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</a>;
  return <button onClick={onClick} style={s} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>;
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navLinks = ["about", "skills", "projects", "services", "contact"];

  // Resume download handler - creates a simple resume text file
  const downloadResume = () => {
    const resumeContent = `MOHD FARHAAD
Full Stack Developer | AI Builder | Automation Engineer | Cyber Security Analyst

CONTACT
Phone: +91 8377089148
Email: mdfarhaad@gmail.com
GitHub: https://github.com/farhaad37
Instagram: https://www.instagram.com/farhaad3730/
TryHackMe: https://tryhackme.com/p/joninhacker02
Location: 181/6, Janta Enclave, Prem Nagar, Delhi-86

ABOUT
Self-driven Full Stack Developer and AI Builder focused on creating real business solutions — complete dashboards, AI automation systems, and startup-ready MVPs. I think like a Developer + Founder + Product Architect.

EDUCATION
Sarvodya Bal Vidyalya (2020–2022) — Secondary Education
Rajdhani University / IGNOU (2022–2025) — Bachelor in Computer Applications

SKILLS
Programming: JavaScript, Node.js, Express.js, Python, MongoDB, REST APIs
Frontend: Next.js, React, Responsive Web Design, Dashboard Development
AI & Automation: AI Product Development, Prompt Engineering, Workflow Automation
Security: Cyber Security Analysis, Penetration Testing, TryHackMe Level 9 (30+ rooms solved)
Tools: Git, No-code Hybrid Systems, Canva AI

PROJECTS (LIVE)
1. Bhagwan Shree Ispat — https://bhagwan-shree-sizz.vercel.app/
2. Online Marketplace — https://onlinemarketplace-1.onrender.com/
3. AI Finance App — https://ai-finance-app-ten.vercel.app/

PROJECTS (BUILDING)
4. AI Revenue Engine — Flagship AI SaaS: lead capture, automation, sales tracking
5. Company Management Dashboard — Full business OS
6. Trading Software (Python) — Market analysis & automation

ACHIEVEMENTS
- TryHackMe Level 9, 30+ rooms solved
- X.com Clone, Spotify Clone, JARVIS (Virtual Assistant)

LANGUAGES
English, Hindi`;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mohd_Farhaad_Resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ background: bg, color: textPrimary, fontFamily: "system-ui, sans-serif", minHeight: "100vh" }}>

      {/* Navbar */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(8,11,18,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${border}` : "none",
        transition: "all 0.3s ease", padding: "0 24px"
      }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <span style={{ fontWeight: 800, fontSize: 18, color: accent }}>MF</span>
          <nav style={{ display: "flex", gap: 24 }}>
            {navLinks.map(l => (
              <button key={l} onClick={() => go(l)} style={{ background: "none", border: "none", color: textSub, fontSize: 13, fontWeight: 500, cursor: "pointer", textTransform: "capitalize", letterSpacing: 0.5, padding: 0, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = accent} onMouseLeave={e => e.target.style.color = textSub}
              >{l}</button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(56,189,248,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 920, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 11, letterSpacing: 3, color: accent, fontWeight: 700, textTransform: "uppercase", border: `1px solid ${border}`, padding: "6px 16px", borderRadius: 20, background: surface }}>
                Full Stack · AI Builder · Cyber Security
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, margin: "0 0 10px", lineHeight: 1.05, letterSpacing: -2 }}>
              Mohd <span style={{ color: accent }}>Farhaad</span>
            </h1>
            <p style={{ fontSize: 16, color: textSub, maxWidth: 480, margin: "0 0 10px", lineHeight: 1.75 }}>
              <strong style={{ color: textPrimary, fontWeight: 600 }}>Building real solutions. Not just demo projects.</strong>
            </p>
            <p style={{ fontSize: 14, color: textMuted, margin: "0 0 32px", lineHeight: 1.7 }}>
              I turn business ideas into AI-powered systems, MVPs, and automation platforms. Developer · Founder Mindset · Problem Solver.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              <Btn onClick={() => go("projects")}>View Projects</Btn>
              <OutlineBtn onClick={downloadResume}>⬇ Download Resume</OutlineBtn>
              <OutlineBtn href="tel:+918377089148">📞 Call Me</OutlineBtn>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              {[
                { label: "GitHub", href: "https://github.com/farhaad37" },
                { label: "Instagram", href: "https://www.instagram.com/farhaad3730/" },
                { label: "TryHackMe", href: "https://tryhackme.com/p/joninhacker02" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: textMuted, textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = accent} onMouseLeave={e => e.target.style.color = textMuted}
                >{s.label}</a>
              ))}
            </div>
          </div>

          {/* Avatar Image Switcher */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ width: 220, height: 280, borderRadius: 16, border: `2px solid ${border}`, overflow: "hidden", position: "relative", background: surface2 }}>
              {/* Image 1: dark anime coding scene */}
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt="Mohd Farhaad"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: activeImg === 0 ? "block" : "none" }}
                onError={e => { e.target.style.display = "none"; }}
              />
              {/* Fallback avatar for image 0 */}
              <div style={{ display: activeImg === 0 ? "flex" : "none", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column", background: `linear-gradient(135deg, #0d1b2e 0%, #0f2744 100%)`, position: "absolute", inset: 0 }}>
                <div style={{ fontSize: 64, marginBottom: 12 }}>👨‍💻</div>
                <div style={{ fontSize: 13, color: accent, fontWeight: 700, letterSpacing: 1 }}>MOHD FARHAAD</div>
                <div style={{ fontSize: 11, color: textMuted, marginTop: 4 }}>Developer · Builder</div>
                <div style={{ marginTop: 16, fontSize: 10, color: textMuted, textAlign: "center", lineHeight: 1.6, padding: "0 12px" }}>
                  "Building real solutions.<br/>Not just demo projects."
                </div>
              </div>
              {/* Image 2: studio portrait */}
              <div style={{ display: activeImg === 1 ? "flex" : "none", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column", background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`, position: "absolute", inset: 0 }}>
                <div style={{ fontSize: 64, marginBottom: 12 }}>🧑‍💼</div>
                <div style={{ fontSize: 13, color: textPrimary, fontWeight: 700 }}>Mohd Farhaad</div>
                <div style={{ fontSize: 11, color: accent, marginTop: 6, fontWeight: 600 }}>Full Stack Developer</div>
                <div style={{ fontSize: 11, color: textSub, marginTop: 4 }}>AI Builder · Problem Solver</div>
                <div style={{ marginTop: 16, fontSize: 10, color: textMuted, textAlign: "center", lineHeight: 1.6, padding: "0 12px" }}>
                  "Turn Ideas Into Reality.<br/>Always Learning. Always Building."
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(8,11,18,0.8))", padding: "20px 12px 12px", display: "flex", gap: 6, justifyContent: "center" }}>
                {[0, 1].map(i => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{ width: i === activeImg ? 20 : 8, height: 8, borderRadius: 4, background: i === activeImg ? accent : border, border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
                ))}
              </div>
            </div>
            <div style={{ fontSize: 11, color: textMuted, letterSpacing: 1 }}>Delhi, India</div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>

        {/* About */}
        <section id="about" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <SectionLabel>About Me</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: -0.8 }}>
                  I don't just write code.<br /><span style={{ color: accent }}>I build businesses.</span>
                </h2>
                <p style={{ color: textSub, lineHeight: 1.85, margin: "0 0 14px", fontSize: 14 }}>
                  I'm a self-driven Full Stack Developer, AI Builder, and Cyber Security analyst currently pursuing my Bachelor's in Computer Applications at Rajdhani University (IGNOU), Delhi.
                </p>
                <p style={{ color: textSub, lineHeight: 1.85, margin: "0 0 20px", fontSize: 14 }}>
                  I specialize in turning startup ideas into working MVPs, dashboards, and AI automation systems. My approach is practical, business-first, and execution-driven — I think like a Developer + Founder + Product Architect.
                </p>
                <div style={{ display: "flex", gap: 24 }}>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: accent }}>3+</div>
                    <div style={{ fontSize: 12, color: textMuted }}>Live Projects</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: accent }}>30+</div>
                    <div style={{ fontSize: 12, color: textMuted }}>THM Rooms Solved</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: accent }}>Lvl 9</div>
                    <div style={{ fontSize: 12, color: textMuted }}>TryHackMe</div>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {["Practical & fast", "Business-oriented", "AI automation", "MVP specialist", "Full product vision", "Cyber security"].map(t => (
                  <div key={t} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 14px", fontSize: 13, color: textSub, fontWeight: 500 }}>
                    <span style={{ color: accent, marginRight: 8 }}>✓</span>{t}
                  </div>
                ))}
                <div style={{ gridColumn: "1 / -1", background: surface2, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 14px" }}>
                  <div style={{ fontSize: 11, color: textMuted, marginBottom: 4 }}>Education</div>
                  <div style={{ fontSize: 13, color: textSub, fontWeight: 500 }}>BCA · Rajdhani University (IGNOU) · 2022–2025</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Skills */}
        <section id="skills" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <SectionLabel>Skills</SectionLabel>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 32px", letterSpacing: -0.5 }}>Tech Stack</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 12 }}>
              {SKILLS.map((s, i) => (
                <FadeIn key={s.name} delay={i * 40}>
                  <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "16px 12px", textAlign: "center", transition: "border-color 0.2s, background 0.2s", cursor: "default" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.background = surface2; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.background = surface; }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, color: accent, letterSpacing: 1, marginBottom: 6, fontFamily: "monospace" }}>{s.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: textSub }}>{s.name}</div>
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
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px", letterSpacing: -0.5 }}>What I've Built</h2>
            <p style={{ color: textMuted, fontSize: 14, margin: "0 0 32px" }}>Real products. Real clients. Real impact.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 60}>
                <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 12, padding: "20px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accentDim; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <span style={{ fontWeight: 700, fontSize: 15, color: textPrimary }}>{p.title}</span>
                      {p.live && <span style={{ fontSize: 10, background: "rgba(56,189,248,0.12)", color: accent, border: `1px solid rgba(56,189,248,0.3)`, padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>LIVE</span>}
                    </div>
                    <p style={{ fontSize: 13, color: textSub, lineHeight: 1.7, margin: "0 0 16px" }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                      {p.tags.map(t => <span key={t} style={{ fontSize: 11, color: textMuted, background: surface2, border: `1px solid ${border}`, borderRadius: 20, padding: "2px 10px" }}>{t}</span>)}
                    </div>
                  </div>
                  {p.link !== "#" && (
                    <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: accent, textDecoration: "none", fontWeight: 600 }}>View Live →</a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" style={{ paddingBottom: 80 }}>
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 32px", letterSpacing: -0.5 }}>What I Can Build For You</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 50}>
                <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "18px 20px", transition: "border-color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = accent}
                  onMouseLeave={e => e.currentTarget.style.borderColor = border}
                >
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: textPrimary, marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: textMuted }}>{s.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ paddingBottom: 100 }}>
          <FadeIn>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "48px 40px" }}>
              <SectionLabel>Contact</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
                <div>
                  <h2 style={{ fontSize: 30, fontWeight: 800, margin: "0 0 12px", letterSpacing: -0.8 }}>
                    Let's build something <span style={{ color: accent }}>great</span>.
                  </h2>
                  <p style={{ color: textSub, fontSize: 14, lineHeight: 1.8, margin: "0 0 28px" }}>
                    Need an MVP, AI automation system, or a complete web platform? I'm ready to execute. Let's talk.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { icon: "📞", label: "Phone", val: "+91 8377089148", href: "tel:+918377089148" },
                      { icon: "📧", label: "Email", val: "mdfarhaad@gmail.com", href: "mailto:mdfarhaad@gmail.com" },
                      { icon: "📍", label: "Location", val: "Delhi, India", href: null },
                    ].map(c => (
                      <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 8, background: surface2, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{c.icon}</div>
                        <div>
                          <div style={{ fontSize: 11, color: textMuted, marginBottom: 2 }}>{c.label}</div>
                          {c.href
                            ? <a href={c.href} style={{ fontSize: 14, color: accent, fontWeight: 600, textDecoration: "none" }}>{c.val}</a>
                            : <div style={{ fontSize: 14, color: textSub, fontWeight: 500 }}>{c.val}</div>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontSize: 13, color: textMuted, marginBottom: 4, fontWeight: 600 }}>Find me on</div>
                  {[
                    { label: "GitHub", sub: "github.com/farhaad37", href: "https://github.com/farhaad37", icon: "💻" },
                    { label: "Instagram", sub: "@farhaad3730", href: "https://www.instagram.com/farhaad3730/", icon: "📷" },
                    { label: "TryHackMe", sub: "Level 9 · 30+ rooms", href: "https://tryhackme.com/p/joninhacker02", icon: "🔒" },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: surface2, border: `1px solid ${border}`, borderRadius: 10, textDecoration: "none", transition: "border-color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = accent}
                      onMouseLeave={e => e.currentTarget.style.borderColor = border}
                    >
                      <span style={{ fontSize: 20 }}>{s.icon}</span>
                      <div>
                        <div style={{ fontSize: 14, color: textPrimary, fontWeight: 600 }}>{s.label}</div>
                        <div style={{ fontSize: 12, color: textMuted }}>{s.sub}</div>
                      </div>
                      <span style={{ marginLeft: "auto", color: accent, fontSize: 14 }}>→</span>
                    </a>
                  ))}
                  <button onClick={downloadResume} style={{ marginTop: 8, background: accent, color: "#020617", fontWeight: 700, fontSize: 14, border: "none", padding: "14px", borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    ⬇ Download My Resume
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

      </div>

      <div style={{ borderTop: `1px solid ${border}`, textAlign: "center", padding: "20px 24px", color: textMuted, fontSize: 12 }}>
        Built by Mohd Farhaad · Full Stack Developer & AI Builder · Delhi, India
      </div>
    </div>
  );
}