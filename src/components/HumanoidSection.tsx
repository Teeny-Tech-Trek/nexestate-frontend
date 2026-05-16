import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, TrendingUp, ArrowUpRight } from "lucide-react";

const HumanoidSection = () => {
  const [hovered, setHovered]     = useState<number | null>(null);

  const items = [
    {
      number: "01",
      icon: <Home size={22} strokeWidth={2} />,
      label: "AI Sales",
      title: <>We're bringing <em style={{ fontStyle:"normal", color:"#60A5FA" }}>AI&nbsp;sales agents</em> to real estate</>,
      description: "Transform your real estate business with intelligent AI agents that understand property details and buyer preferences.",
      accent:    "#3B82F6",
      accentMid: "#818CF8",
      accentLt:  "#BAE6FD",
      glow:      "rgba(59,130,246,0.6)",
    },
    {
      number: "02",
      icon: <Users size={22} strokeWidth={2} />,
      label: "Automation",
      title: <>We're automating lead capture and qualification <em style={{ fontStyle:"normal", color:"#E879F9" }}>24/7</em></>,
      description: "Never miss a potential client. Our AI works round the clock to capture, qualify, and nurture leads automatically.",
      accent:    "#A855F7",
      accentMid: "#D946EF",
      accentLt:  "#F0ABFC",
      glow:      "rgba(168,85,247,0.6)",
    },
    {
      number: "03",
      icon: <TrendingUp size={22} strokeWidth={2} />,
      label: "Assistance",
      title: <>We're creating sales <em style={{ fontStyle:"normal", color:"#2DD4BF" }}>assistants</em>, not replacements</>,
      description: "Empower your team with AI that handles routine tasks, letting them focus on building relationships and closing deals.",
      accent:    "#14B8A6",
      accentMid: "#06B6D4",
      accentLt:  "#99F6E4",
      glow:      "rgba(20,184,166,0.6)",
    },
  ];

  return (
    <section
      id="why-humanoid"
      className="overflow-hidden relative w-full py-20 md:py-28"
      style={{ background: "linear-gradient(135deg,#060b24 0%,#0d1340 50%,#060b24 100%)" }}
    >
      <style>{`
        @keyframes hero-pulse { 0%,100%{opacity:.8;transform:scale(1)} 50%{opacity:.3;transform:scale(1.4)} }
        @keyframes spin-ring  { to{transform:rotate(360deg)} }
        @keyframes card-shine { 0%{transform:translateX(-100%) skewX(-15deg)} 100%{transform:translateX(220%) skewX(-15deg)} }
        @keyframes num-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
      `}</style>

      {/* ── Background: same as Hero ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute inset-0"
          animate={{ background: [
            "radial-gradient(ellipse 55% 55% at 10% 50%,rgba(59,130,246,0.2) 0%,transparent 65%)",
            "radial-gradient(ellipse 55% 55% at 20% 55%,rgba(99,102,241,0.26) 0%,transparent 65%)",
            "radial-gradient(ellipse 55% 55% at 10% 50%,rgba(59,130,246,0.2) 0%,transparent 65%)",
          ]}}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div className="absolute inset-0"
          animate={{ background: [
            "radial-gradient(ellipse 50% 60% at 85% 40%,rgba(108,63,197,0.22) 0%,transparent 65%)",
            "radial-gradient(ellipse 50% 60% at 80% 45%,rgba(139,92,246,0.28) 0%,transparent 65%)",
            "radial-gradient(ellipse 50% 60% at 85% 40%,rgba(108,63,197,0.22) 0%,transparent 65%)",
          ]}}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`, height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.55 + 0.08,
              animation: `hero-pulse ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container px-6 lg:px-12 mx-auto relative z-10">

        {/* ── Header — centered ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-16 lg:mb-20 text-center flex flex-col items-center"
        >
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-5 justify-center">
            <span className="w-8 h-px" style={{ background: "linear-gradient(90deg,transparent,#818CF8)" }} />
            <span className="text-[11px] tracking-[0.32em] uppercase font-bold"
              style={{ color:"#818CF8" }}>
              Why Choose Us
            </span>
            <span className="w-8 h-px" style={{ background: "linear-gradient(90deg,#818CF8,transparent)" }} />
          </div>

          <h2 className="font-black text-white leading-[1.05] mb-5"
            style={{ fontSize:"clamp(2.8rem,6vw,5rem)", textShadow:"0 8px 40px rgba(0,0,0,0.5)" }}>
            Why Virtual
            <span className="block" style={{
              background: "linear-gradient(90deg,#a78bfa,#60a5fa,#a78bfa)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Agents?
            </span>
          </h2>

          <p className="text-white/60 leading-relaxed max-w-2xl"
            style={{ fontSize:"clamp(0.95rem,1.5vw,1.1rem)" }}>
            Revolutionizing real estate sales with intelligent automation that works alongside your team, not against them.
          </p>
        </motion.div>

        {/* ════════ TWO COLUMN ════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ════════ LEFT — ITEMS ════════ */}
          <div className="relative flex flex-col gap-5">

            {/* vertical timeline line */}
            <div className="absolute left-[38px] md:left-[43px] top-12 bottom-12 w-px hidden sm:block"
              style={{ background: "linear-gradient(180deg,rgba(129,140,248,0.4) 0%,rgba(168,85,247,0.4) 50%,rgba(20,184,166,0.4) 100%)" }}
            />

            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + index * 0.18 }}
                className="relative group"
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
              >
                {/* ── NO CARD BORDER — clean bare layout ── */}
                <div className="relative">
                  <div className="flex items-start gap-5 md:gap-6 py-2">

                    {/* ── ICON BADGE ── */}
                    <div className="relative flex-shrink-0">
                      {/* spinning arc ring */}
                      <div className="absolute inset-[-3px] rounded-full overflow-hidden"
                        style={{ animation: "spin-ring 8s linear infinite" }}>
                        <div className="w-full h-full rounded-full"
                          style={{
                            background: `conic-gradient(from 0deg, ${item.accent} 0%, ${item.accentMid} 30%, transparent 55%, transparent 100%)`,
                            filter: "blur(0.5px)",
                          }}
                        />
                      </div>

                      {/* glow halo */}
                      <div className="absolute inset-[-6px] rounded-full"
                        style={{
                          boxShadow: `0 0 20px ${item.glow}, 0 0 40px ${item.glow.replace("0.6","0.3")}`,
                          opacity: hovered === index ? 1 : 0.55,
                          transition: "opacity 0.4s",
                        }}
                      />

                      {/* icon disc */}
                      <div className="relative w-[74px] h-[74px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.06), #060b24)`,
                          border: `1.5px solid ${item.accent}66`,
                          boxShadow: `inset 0 0 20px ${item.glow.replace("0.6","0.3")}`,
                          color: item.accentLt,
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* ── TEXT BLOCK ── */}
                    <div className="flex-1 min-w-0 pt-0.5">

                      {/* Number + Title */}
                      <div className="flex items-start gap-3 mb-3">
                        {/* big number */}
                        <span className="font-black leading-none flex-shrink-0 select-none"
                          style={{
                            fontSize: "clamp(3.25rem, 5vw, 3.75rem)",
                            background: `linear-gradient(160deg,${item.accentLt},${item.accent})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            filter: `drop-shadow(0 0 16px ${item.accent}88)`,
                            animation: hovered === index ? "num-float 2s ease-in-out infinite" : "none",
                          }}
                        >
                          {item.number}
                        </span>

                        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-white leading-snug pt-2">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[13.5px] md:text-[14.5px] leading-relaxed text-white/55">
                        {item.description}
                      </p>

                      {/* Read more link on hover */}
                      <motion.div
                        className="flex items-center gap-1 mt-3 cursor-pointer"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: hovered === index ? 1 : 0, x: hovered === index ? 0 : -8 }}
                        transition={{ duration: 0.25 }}
                      >
                        <span className="text-[12px] font-semibold" style={{ color: item.accentLt }}>
                          Learn more
                        </span>
                        <ArrowUpRight size={13} style={{ color: item.accentLt }} />
                      </motion.div>
                    </div>
                  </div>

                  {/* bottom accent line — grows on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg,${item.accent},${item.accentMid},transparent)` }}
                    initial={{ width: "0%" }}
                    animate={{ width: hovered === index ? "60%" : "0%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* timeline dot */}
                <div className="absolute left-[38px] md:left-[43px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full hidden sm:block z-10"
                  style={{
                    background: item.accent,
                    boxShadow: `0 0 10px ${item.glow}, 0 0 20px ${item.glow}`,
                    border: "2px solid #060b24",
                    transition: "transform 0.3s",
                    transform: hovered === index ? "translate(-50%,-50%) scale(1.5)" : "translate(-50%,-50%) scale(1)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* ════════ RIGHT — IMAGE ════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
            className="relative w-full flex items-center justify-center"
          >
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "80%", height: "80%",
                top: "10%", left: "10%",
                background: "radial-gradient(circle,rgba(139,92,246,0.35) 0%,rgba(59,130,246,0.18) 45%,transparent 70%)",
                filter: "blur(50px)",
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* ════════════════════════════════
                Replace src with your image:
                  import RightImg from "...";
                  src={RightImg}
                ════════════════════════════════ */}
            <img
             src="/Website-Images/HumanoidSection-Image.png"
              alt="AI Real Estate Visual"
              loading="lazy"
              decoding="async"
              draggable={false}
              onContextMenu={e => e.preventDefault()}
              className="w-full h-auto relative z-10 select-none"
              style={{
                maxWidth: 620,
                filter: "drop-shadow(0 30px 70px rgba(108,63,197,0.55))",
                pointerEvents: "none",
                userSelect: "none",
              } as React.CSSProperties}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;

