"use client";

import { useState } from "react";
import {
  ArrowUpRight, Check, ChevronRight, Clock3, Cloud, Code2, Crosshair,
  FileSearch, Github, Globe2, Linkedin, LockKeyhole, Mail, Menu, Network,
  Radar, ShieldCheck, Terminal, X, Zap
} from "lucide-react";

const services = [
  { icon: Globe2, title: "Web & API Security", text: "Find the flaws automated scanners miss across your attack surface.", tags: ["OWASP ASVS", "GraphQL", "OAuth 2.0"], time: "2–4 weeks" },
  { icon: Crosshair, title: "Red Team Operations", text: "Test your people, processes and perimeter with realistic adversary emulation.", tags: ["MITRE ATT&CK", "C2", "Social Engineering"], time: "4–8 weeks" },
  { icon: Cloud, title: "Cloud & Infrastructure", text: "Harden AWS, Azure and GCP environments before an attacker gets there.", tags: ["IAM", "Kubernetes", "Terraform"], time: "2–3 weeks" },
  { icon: FileSearch, title: "Incident Response", text: "Contain, investigate and recover from security incidents with confidence.", tags: ["Forensics", "Threat Hunting", "IR retainer"], time: "24/7 on-call" },
  { icon: Terminal, title: "Security Engineering", text: "Build resilient products with security embedded from the first commit.", tags: ["DevSecOps", "AppSec", "Threat Modeling"], time: "Ongoing" },
  { icon: ShieldCheck, title: "Compliance & Assurance", text: "Turn complex requirements into evidence, controls and customer trust.", tags: ["ISO 27001", "SOC 2", "PCI DSS"], time: "6–12 weeks" },
];

const findings = [
  { id: "CVE-2025-44228", title: "Authentication bypass in enterprise gateway", severity: "Critical", score: "9.8", date: "02.14.25" },
  { id: "CVE-2024-7812", title: "Remote code execution via crafted archive", severity: "High", score: "8.1", date: "11.07.24" },
  { id: "CVE-2024-5399", title: "Stored XSS in administration console", severity: "High", score: "7.4", date: "08.21.24" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#"><span className="brand-mark"><Radar size={17} /></span> SENTINEL<span className="brand-dot">.</span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#research" onClick={() => setMenuOpen(false)}>Research</a><a href="#team" onClick={() => setMenuOpen(false)}>Team</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero page-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> SYSTEMS UNDER WATCH <span className="eyebrow-line" /></div>
          <h1>Think like an<br /><em>attacker.</em><br />Build like a defender.</h1>
          <p className="hero-lede">SENTINEL is an independent offensive security team helping ambitious companies find what others overlook — before the threat actors do.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Request an assessment <ArrowUpRight size={17} /></a><a className="text-link" href="#services">Explore capabilities <ChevronRight size={16} /></a></div>
          <div className="trust-row"><span>Trusted by teams at</span><strong>northstar</strong><strong>arc<span className="green">/</span>one</strong><strong>MONUMENT</strong></div>
        </div>
        <div className="hero-art" aria-label="Network visualization">
          <div className="scan-ring ring-one" /><div className="scan-ring ring-two" /><div className="scan-ring ring-three" />
          <div className="core"><LockKeyhole size={28} /><span>SECURE<br />THE CORE</span></div>
          <i className="node n1" /><i className="node n2" /><i className="node n3" /><i className="node n4" />
          <span className="art-label label-one">THREAT SURFACE / 04</span><span className="art-label label-two">LIVE MONITORING</span>
        </div>
      </section>

      <section className="metrics"><div><b>1,247</b><span>vulnerabilities disclosed</span></div><div><b>98.6<span>%</span></b><span>critical issues remediated</span></div><div><b>12</b><span>countries protected</span></div><div><b>24<span>/7</span></b><span>response coverage</span></div></section>

      <section className="section" id="services"><div className="section-heading"><div><div className="eyebrow">01 / CAPABILITIES</div><h2>Security that holds<br /><em>under pressure.</em></h2></div><p>We combine deep technical expertise with an adversarial mindset to make your security program measurably stronger.</p></div><div className="service-grid">{services.map((service, i) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="card-top"><span className="service-number">0{i + 1}</span><Icon size={22} /></div><h3>{service.title}</h3><p>{service.text}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-foot"><span><Clock3 size={14} /> {service.time}</span><ArrowUpRight size={17} /></div></article> })}</div></section>

      <section className="split-section" id="research"><div className="research-panel"><div className="eyebrow">02 / RESEARCH</div><h2>Curiosity is a<br /><em>security control.</em></h2><p>Our research team publishes the techniques, tooling and hard-won lessons that keep the community a step ahead.</p><a className="text-link" href="#findings">View all research <ArrowUpRight size={15} /></a></div><div className="article-list"><article><span className="article-type">THREAT INTELLIGENCE · 06 MIN READ</span><h3>When identity becomes the new perimeter</h3><p>Why session integrity is the next frontier of cloud security.</p><span className="article-date">MAR 18, 2025 <ArrowUpRight size={14} /></span></article><article><span className="article-type">CVE ANALYSIS · 09 MIN READ</span><h3>The quiet escalation: chaining three “low” findings</h3><p>A practical look at compound risk and attack path analysis.</p><span className="article-date">FEB 27, 2025 <ArrowUpRight size={14} /></span></article><article><span className="article-type">FIELD NOTES · 04 MIN READ</span><h3>What a good red team report looks like</h3><p>Turning technical findings into decisions leadership can act on.</p><span className="article-date">JAN 09, 2025 <ArrowUpRight size={14} /></span></article></div></section>

      <section className="section findings" id="findings"><div className="section-heading"><div><div className="eyebrow">03 / HALL OF FAME</div><h2>Findings that<br /><em>changed the game.</em></h2></div><p>Responsible disclosure is how we turn individual discoveries into collective defense. Explore a selection of vulnerabilities disclosed by our team.</p></div><div className="finding-table"><div className="table-head"><span>IDENTIFIER</span><span>DESCRIPTION</span><span>SEVERITY</span><span>CVSS</span><span>DATE</span></div>{findings.map(f => <div className="finding-row" key={f.id}><strong>{f.id}</strong><span>{f.title}</span><b className={f.severity.toLowerCase()}>{f.severity}</b><span className="score">{f.score}</span><span>{f.date}</span></div>)}</div></section>

      <section className="team-section section" id="team"><div className="eyebrow">04 / THE TEAM</div><div className="team-heading"><h2>Small team.<br /><em>Large surface area.</em></h2><p>Researchers, operators and engineers who have spent years thinking about how systems fail — and how to make them resilient.</p></div><div className="team-grid">{[["AL","ALEX LEE","Principal Consultant","RED TEAM · CLOUD"],["MS","MAYA SINGH","Security Researcher","APPSEC · RESEARCH"],["JR","JON RIVERA","Detection Engineer","DFIR · THREAT HUNTING"]].map(([initials,name,role,focus]) => <div className="person" key={name}><div className="avatar">{initials}</div><div><h3>{name}</h3><p>{role}</p><small>{focus}</small></div><Linkedin size={16} /></div>)}</div></section>

      <section className="contact-section" id="contact"><div><div className="eyebrow">05 / LET&apos;S TALK</div><h2>Ready to find<br /><em>the unknown?</em></h2><p>Tell us what you&apos;re building, what keeps you up at night, or simply where you want to get stronger.</p><div className="contact-details"><span><Mail size={16} /> hello@sentinel.security</span><span><Globe2 size={16} /> Remote · Worldwide</span></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}><label>Name<input required placeholder="Your name" /></label><label>Work email<input required type="email" placeholder="you@company.com" /></label><label>How can we help?<textarea required placeholder="A little context goes a long way..." rows={4} /></label><button className="button button-primary" type="submit">{sent ? <><Check size={17} /> Message received</> : <>Send securely <ArrowUpRight size={17} /></>}</button><small>By submitting, you agree to our privacy policy. Sensitive details can be shared via PGP after initial contact.</small></form></section>

      <footer><a className="brand" href="#"><span className="brand-mark"><Radar size={17} /></span> SENTINEL<span className="brand-dot">.</span></a><span>© 2025 SENTINEL SECURITY GROUP</span><span className="footer-links"><a href="#contact">Privacy</a><a href="#contact">PGP key</a><a href="#contact">Status <span className="status-dot" /></a></span></footer>
    </main>
  );
}
