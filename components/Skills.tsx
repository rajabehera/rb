import { useState, useEffect } from "react";

const skills = [
  { name: "UX Strategy", category: "RESEARCH", accent: "#00FFB2", years: "8y" },
  { name: "UI Design", category: "VISUAL", accent: "#BF5FFF", years: "8y" },
  { name: "Interaction Design", category: "BEHAVIOR", accent: "#FF5FA0", years: "6y" },
  { name: "Frontend Dev", category: "CODE", accent: "#5FA8FF", years: "8y" },
  { name: "Design Systems", category: "ARCHITECTURE", accent: "#FFB800", years: "6y" },
  { name: "Motion Design", category: "ANIMATION", accent: "#FF6B35", years: "4y" },
  { name: "Prototyping", category: "TOOLING", accent: "#00D4FF", years: "8y" },
  { name: "Accessibility", category: "INCLUSION", accent: "#7FFF00", years: "6y" },
];

const tools = ["Figma", "Framer", "React", "TypeScript", "Tailwind", "After Effects", "Webflow", "Storybook"];

const noise = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='300' height='300' filter='url(#n)' opacity='0.04'/></svg>`;
const noiseSVG = `url("data:image/svg+xml,${encodeURIComponent(noise)}")`;

function SkillTag({ skill, index, isVisible }: { skill: typeof skills[0]; index: number; isVisible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "14px 16px",
        border: `1px solid ${hovered ? skill.accent + "50" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "2px",
        background: hovered ? `${skill.accent}08` : "rgba(255,255,255,0.01)",
        cursor: "default",
        transition: "all 0.25s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.97)",
        transitionDelay: `${index * 60}ms`,
        boxShadow: hovered ? `0 0 20px ${skill.accent}15, inset 0 0 20px ${skill.accent}05` : "none",
      }}
    >
      {/* Top-left accent dot */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: skill.accent,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.25s ease",
          boxShadow: hovered ? `0 0 6px ${skill.accent}` : "none",
        }}
      />

      {/* Category label */}
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "8px",
          letterSpacing: "0.18em",
          color: skill.accent,
          opacity: hovered ? 0.9 : 0.5,
          marginBottom: "8px",
          paddingLeft: "12px",
          transition: "opacity 0.25s ease",
        }}
      >
        {skill.category}
      </div>

      {/* Skill name */}
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          color: hovered ? "#FFFFFF" : "#C0C0D8",
          letterSpacing: "0.01em",
          lineHeight: 1.2,
          transition: "color 0.25s ease",
          paddingLeft: "12px",
        }}
      >
        {skill.name}
      </div>

      {/* Years badge - bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "12px",
          fontFamily: "'Space Mono', monospace",
          fontSize: "9px",
          color: skill.accent,
          opacity: hovered ? 0.9 : 0.35,
          transition: "opacity 0.25s ease",
          letterSpacing: "0.05em",
        }}
      >
        {skill.years}
      </div>
    </div>
  );
}

export default function UXEngineerSkills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
      
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #00FFB230; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        .blink { animation: blink 1s step-end infinite; }
      `}</style>

      {/* Scanline */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{
          position: "absolute", left: 0, right: 0, height: "2px",
          background: "linear-gradient(transparent, rgba(0,255,178,0.025), transparent)",
          animation: "scanline 7s linear infinite",
        }} />
      </div>

      {/* Card */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "560px",
          background: "rgba(255,255,255,0.015)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "2px",
          padding: "40px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Corner brackets */}
        {[
          { top: -1, left: -1, borderTop: "1px solid #00FFB250", borderLeft: "1px solid #00FFB250" },
          { top: -1, right: -1, borderTop: "1px solid #00FFB250", borderRight: "1px solid #00FFB250" },
          { bottom: -1, left: -1, borderBottom: "1px solid #00FFB250", borderLeft: "1px solid #00FFB250" },
          { bottom: -1, right: -1, borderBottom: "1px solid #00FFB250", borderRight: "1px solid #00FFB250" },
        ].map((s, i) => (
          <div key={i} style={{ position: "absolute", width: "14px", height: "14px", ...s }} />
        ))}

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.22em", color: "#00FFB2" }}>
              SYS://PROFILE
            </span>
            <span className="blink" style={{ color: "#00FFB2", fontSize: "11px", lineHeight: 1 }}>▋</span>
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(26px, 5vw, 34px)",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            lineHeight: 1,
            marginBottom: "6px",
          }}>
            UX ENGINEER
          </h1>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            color: "#404060",
            letterSpacing: "0.1em",
          }}>
            — CAPABILITY MATRIX v2.6
          </p>
        </div>

        {/* Section label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "16px",
        }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", color: "#404060" }}>
            CORE_SKILLS
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "#404060" }}>
            {skills.length}
          </span>
        </div>

        {/* Skills grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          marginBottom: "28px",
        }}>
          {skills.map((skill, index) => (
            <SkillTag
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Tools section */}
        {/* <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "16px",
        }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", color: "#404060" }}>
            TOOLS
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
        </div> */}

        {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px" }}>
          {tools.map((tool, i) => (
            <span
              key={tool}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.1em",
                color: "#606080",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "4px 10px",
                borderRadius: "2px",
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.4s ease`,
                transitionDelay: `${500 + i * 40}ms`,
              }}
            >
              {tool}
            </span>
          ))}
        </div> */}

        {/* Footer */}
        <div style={{
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "8px", color: "#252535", letterSpacing: "0.15em" }}>
            LAST_UPDATED: 2026.02
          </span>
          <div style={{ display: "flex", gap: "5px" }}>
            {["#00FFB2", "#BF5FFF", "#5FA8FF", "#FF5FA0", "#FFB800", "#FF6B35"].map((c, i) => (
              <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: c, opacity: 0.5 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}