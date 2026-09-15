import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  Gem,
  Globe2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "./styles.css";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const metrics = [
  { value: "50GB+", label: "tick-data pipeline" },
  { value: "2", label: "systematic strategies back-tested" },
  { value: "3.6", label: "expected HKU GPA" },
  { value: "2028.06", label: "expected graduation" },
];

const projects = [
  {
    kicker: "Private Equity",
    title: "Pre-IPO AI Infrastructure Deal Review",
    period: "PreIPO Capital · May-Jul 2026",
    text: "Built diligence views across financial statements, market positioning, competitive moats, and downside protection scenarios for pre-IPO-stage targets.",
    tags: ["DCF", "LBO", "Comparable Analysis", "Investment Memo"],
  },
  {
    kicker: "Quant Research",
    title: "Systematic Strategy Backtesting Engine",
    period: "Super Quantum Fund · Jun-Aug 2025",
    text: "Back-tested equity and futures strategies, engineered a 50GB+ tick-data ETL pipeline, and ran factor regressions to surface non-correlated alpha signals.",
    tags: ["Python", "ETL", "Factor Regression", "Sharpe Optimization"],
  },
  {
    kicker: "Wealth Management",
    title: "PWM Portfolio Construction Study",
    period: "Goldman Sachs Summer Series · Jul 2025",
    text: "Analyzed risk-tiered portfolio construction for high-net-worth clients and evaluated macro and geopolitical impacts on cross-asset returns.",
    tags: ["Asset Allocation", "Cross-Asset", "Macro", "Client Advisory"],
  },
];

const strengths = [
  {
    icon: TrendingUp,
    title: "Financial Analysis",
    text: "Comfortable turning valuation, market research, and risk factors into clear investment narratives.",
  },
  {
    icon: Database,
    title: "Data Systems",
    text: "Builds research pipelines and tests quantitative signals with Python, statistical analysis, and optimization.",
  },
  {
    icon: Code2,
    title: "Product Mindset",
    text: "Frontend and full-stack experience with Vue, APIs, responsive interfaces, Git workflows, and code review.",
  },
  {
    icon: Globe2,
    title: "Global Communication",
    text: "Mandarin, English, Cantonese, and Japanese, with experience presenting technical ideas to business audiences.",
  },
];

function App() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isNavHidden, setIsNavHidden] = React.useState(false);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext("2d");
    if (!ctx || !canvas.captureStream) return;

    const points = Array.from({ length: 96 }, (_, index) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      phase: Math.random() * Math.PI * 2,
      warm: index % 5 === 0,
    }));

    let frame = 0;
    let animationId = 0;
    const draw = () => {
      const { width, height } = canvas;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#05070a");
      gradient.addColorStop(0.48, "#0b1119");
      gradient.addColorStop(1, "#05070a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.globalAlpha = 0.48;
      ctx.strokeStyle = "#1e333d";
      ctx.lineWidth = 1;
      const shift = frame * 0.7;
      for (let x = -width; x < width * 2; x += 76) {
        ctx.beginPath();
        ctx.moveTo(x + shift, 0);
        ctx.lineTo(x + shift + 240, height);
        ctx.stroke();
      }
      for (let y = -height; y < height * 2; y += 76) {
        ctx.beginPath();
        ctx.moveTo(0, y - shift * 0.55);
        ctx.lineTo(width, y - shift * 0.55 - 130);
        ctx.stroke();
      }

      const glow = ctx.createRadialGradient(
        width * 0.74 + Math.sin(frame * 0.01) * 110,
        height * 0.42,
        20,
        width * 0.74,
        height * 0.42,
        480,
      );
      glow.addColorStop(0, "rgba(131,240,211,0.18)");
      glow.addColorStop(1, "rgba(131,240,211,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      points.forEach((point, index) => {
        const x = (point.x + frame * 0.42 + Math.sin(frame * 0.018 + point.phase) * 22) % width;
        const y = (point.y + Math.cos(frame * 0.015 + point.phase) * 16 + height) % height;
        const color = point.warm ? "rgba(215,186,125,0.9)" : "rgba(131,240,211,0.9)";
        ctx.globalAlpha = 0.62;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, point.warm ? 5 : 3, point.warm ? 2 : 3);
        if (index % 9 === 0) {
          ctx.strokeStyle = color;
          ctx.beginPath();
          ctx.moveTo(x - 54, y);
          ctx.lineTo(x + 112, y + Math.sin(frame * 0.018 + point.phase) * 28);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;
      frame += 1;
      animationId = window.requestAnimationFrame(draw);
    };

    draw();
    const stream = canvas.captureStream(30);
    video.srcObject = stream;
    void video.play();

    return () => {
      window.cancelAnimationFrame(animationId);
      stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const updateNav = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastY;
      setIsNavHidden(isScrollingDown && currentY > 120);
      lastY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section className="hero" id="home">
        <video
          ref={heroVideoRef}
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          poster={assetPath("hero-poster.png")}
        />
        <div className="heroFallback" />
        <div className="grain" />

        <nav className={`nav${isNavHidden ? " navHidden" : ""}`}>
          <a className="brand" href="#home" aria-label="Helen portfolio home">
            Helen
          </a>
          <div className="navLinks" aria-label="Primary navigation">
            <a href="#profile">Profile</a>
            <a href="#projects">Projects</a>
            <a href="#strengths">Strengths</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="navCta" href="mailto:helenhm328@gmail.com">
            <Mail size={16} />
            Contact
          </a>
        </nav>

        <div className="heroInner">
          <p className="eyebrow">HKU Data and System Engineering · Class of 2028</p>
          <h1>Menghan Hu</h1>
          <p className="heroName">Helen</p>
          <p className="heroCopy">
            A finance-minded DASE student building at the intersection of quantitative research,
            private markets, and elegant digital systems.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">
              View selected work
              <ArrowUpRight size={18} />
            </a>
            <a className="ghostButton" href="mailto:helenhm328@gmail.com">
              helenhm328@gmail.com
            </a>
          </div>
        </div>
        <div className="scrollCue">Scroll</div>
      </section>

      <section className="section profile" id="profile">
        <div className="sectionShell profileGrid">
          <div className="portraitPanel">
            <img src={assetPath("helen-portrait.png")} alt="Portrait of Menghan Hu" />
            <div className="portraitCaption">
              <span>Hong Kong, China</span>
              <span>DASE · Finance · Systems</span>
            </div>
          </div>

          <div className="profileContent">
            <p className="sectionLabel">Profile</p>
            <h2>Data systems discipline, investment analysis clarity.</h2>
            <p>
              I am Helen Hu Menghan, a University of Hong Kong undergraduate in Data and System
              Engineering, expected to graduate in June 2028. My work spans pre-IPO investment
              diligence, quantitative fund research, portfolio construction, and web product
              development.
            </p>
            <p>
              I like problems where numbers, systems, and judgment meet: testing alpha signals,
              modeling private company value, and translating complex research into decisions a
              client or investment committee can act on.
            </p>

            <div className="contactGrid">
              <a href="mailto:helenhm328@gmail.com">
                <Mail size={18} />
                helenhm328@gmail.com
              </a>
              <a href="tel:+85255302364">
                <Phone size={18} />
                +852 5530 2364
              </a>
              <span>
                <MapPin size={18} />
                Hong Kong, China
              </span>
            </div>

            <div className="metrics">
              {metrics.map((item) => (
                <div className="metric" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="sectionShell">
          <div className="sectionHeader">
            <p className="sectionLabel">Selected Projects</p>
            <h2>Finance experience shaped as investable stories.</h2>
          </div>

          <div className="projectGrid">
            {projects.map((project, index) => (
              <article className="projectCard" key={project.title}>
                <div className="projectIndex">0{index + 1}</div>
                <p>{project.kicker}</p>
                <h3>{project.title}</h3>
                <span>{project.period}</span>
                <p>{project.text}</p>
                <div className="tagRow">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section strengths" id="strengths">
        <div className="sectionShell">
          <div className="sectionHeader compact">
            <p className="sectionLabel">Strengths</p>
            <h2>Calm execution across markets, models, and interfaces.</h2>
          </div>

          <div className="strengthGrid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article className="strengthCard" key={title}>
                <div className="iconBox">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="finalContact" id="contact">
        <div className="grain" />
        <div className="sectionShell contactShell">
          <p className="sectionLabel">Contact</p>
          <h2>Let us build the next investment story with sharper data.</h2>
          <div className="finalActions">
            <a className="primaryButton" href="mailto:helenhm328@gmail.com">
              <Mail size={18} />
              Email Helen
            </a>
            <a className="ghostButton" href="tel:+85255302364">
              <Phone size={18} />
              +852 5530 2364
            </a>
          </div>
          <div className="footerSignal">
            <span>
              <BriefcaseBusiness size={16} />
              Open to finance, data, and product opportunities
            </span>
            <span>
              <ShieldCheck size={16} />
              HKU · Expected Graduation June 2028
            </span>
            <span>
              <Gem size={16} />
              Portfolio v0.1
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
