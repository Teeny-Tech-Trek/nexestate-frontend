import React, { useMemo, useState } from "react";
import { ArrowRight, Check, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import BarChartImg from "/Website-Images/Newsletter-Images/Graph.png";
import EnvelopeImg from "/Website-Images/Newsletter-Images/Envelope.png";
import BellImg from "/Website-Images/Newsletter-Images/Bell.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 45 }, (_, id) => ({
        id,
        size: Math.random() * 2.1 + 0.8,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.45 + 0.08,
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setEmail("");
      setTimeout(() => setDone(false), 4000);
    }, 1200);
  };

  return (
    <section
      id="newsletter"
      style={{
        background: "linear-gradient(135deg,#060b24 0%,#0d1340 50%,#060b24 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "890px",
        padding: "22px 0 30px",
      }}
    >
      <style>{`
        @keyframes nl-shimmer { 0%,100%{background-position:0%} 50%{background-position:100%} }
        @keyframes nl-spin { to{transform:rotate(360deg)} }
        @keyframes nl-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes nl-twinkle { 0%,100%{opacity:.08;transform:scale(1)} 50%{opacity:.55;transform:scale(1.35)} }
        #nl-inp::placeholder { color:rgba(255,255,255,0.56); }
        #nl-inp:focus {
          outline:none;
          border-color:rgba(119,137,255,.82)!important;
          box-shadow:0 0 0 3px rgba(91,107,255,.16), inset 0 0 22px rgba(97,118,255,.08);
        }
        @media (max-width: 900px) {
          #newsletter { min-height: auto !important; padding: 54px 0 !important; }
          .nl-side-art { display: none !important; }
          .nl-check-float { display: none !important; }
          .nl-title-main { font-size: clamp(3rem, 14vw, 5.2rem) !important; }
          .nl-title-gradient { font-size: clamp(2.75rem, 13vw, 4.7rem) !important; }
          .nl-card-inner { padding: 32px 20px 24px !important; }
          .nl-card-header { gap: 16px !important; }
          .nl-mail-disc { width: 58px !important; height: 58px !important; }
        }
      `}</style>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <motion.div
          style={{ position: "absolute", inset: 0 }}
          animate={{
            background: [
              "radial-gradient(ellipse 55% 55% at 15% 50%,rgba(59,130,246,0.22) 0%,transparent 65%)",
              "radial-gradient(ellipse 55% 55% at 20% 55%,rgba(99,102,241,0.28) 0%,transparent 65%)",
              "radial-gradient(ellipse 55% 55% at 15% 50%,rgba(59,130,246,0.22) 0%,transparent 65%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          style={{ position: "absolute", inset: 0 }}
          animate={{
            background: [
              "radial-gradient(ellipse 50% 60% at 85% 40%,rgba(108,63,197,0.25) 0%,transparent 65%)",
              "radial-gradient(ellipse 50% 60% at 80% 45%,rgba(139,92,246,0.30) 0%,transparent 65%)",
              "radial-gradient(ellipse 50% 60% at 85% 40%,rgba(108,63,197,0.25) 0%,transparent 65%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.045,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background: "white",
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity,
              animation: `nl-twinkle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
        className="nl-side-art"
        style={{
          position: "absolute",
          left: "max(4px, calc(50% - 706px))",
          bottom: "170px",
          width: "clamp(190px, 19vw, 300px)",
          zIndex: 6,
          pointerEvents: "none",
          animation: "nl-float 5s ease-in-out infinite",
        }}
      >
        <img
          src={BarChartImg}
          alt=""
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          style={{ width: "100%", height: "auto", filter: "drop-shadow(0 24px 45px rgba(68,81,255,0.70))", userSelect: "none" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
        className="nl-side-art"
        style={{
          position: "absolute",
          right: "max(185px, calc(50% - 542px))",
          top: "316px",
          width: "clamp(190px, 17vw, 255px)",
          zIndex: 13,
          pointerEvents: "none",
          animation: "nl-float 4.5s ease-in-out infinite",
          animationDelay: "0.6s",
        }}
      >
        <img
          src={EnvelopeImg}
          alt=""
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          style={{ width: "100%", height: "auto", filter: "drop-shadow(0 18px 38px rgba(91,107,255,0.78))", userSelect: "none" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.45 }}
        className="nl-side-art"
        style={{
          position: "absolute",
          right: "max(8px, calc(50% - 696px))",
          bottom: "100px",
          width: "clamp(150px, 15vw, 225px)",
          zIndex: 6,
          pointerEvents: "none",
          animation: "nl-float 5.5s ease-in-out infinite",
          animationDelay: "1.2s",
        }}
      >
        <img
          src={BellImg}
          alt=""
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          style={{ width: "100%", height: "auto", filter: "drop-shadow(0 18px 35px rgba(89,71,255,0.72))", userSelect: "none" }}
        />
      </motion.div>

      <div style={{ maxWidth: 914, margin: "0 auto", padding: "0 22px", position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 17,
              padding: "13px 31px",
              borderRadius: 999,
              marginBottom: 22,
              background: "rgba(9,10,35,0.62)",
              border: "1.5px solid rgba(152,83,255,0.92)",
              boxShadow: "0 0 28px rgba(132,79,255,0.20), inset 0 0 18px rgba(91,107,255,0.10)",
            }}
          >
            <Sparkles size={25} color="#8f95ff" strokeWidth={2.3} />
            <span style={{ fontSize: "clamp(1rem,1.7vw,1rem)", fontWeight: 700, color: "rgba(255,255,255,0.92)", lineHeight: 1 }}>
              Insights that give you an edge
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          >
            <h2
              className="nl-title-main"
              style={{
                fontWeight: 900,
                fontSize: "clamp(4.2rem,6vw,4rem)",
                color: "#fff",
                lineHeight: 0.95,
                margin: "0 0 2px",
                textShadow: "0 4px 40px rgba(0,0,0,0.6)",
              }}
            >
              Stay Ahead
            </h2>
            <h2
              className="nl-title-gradient"
              style={{
                fontWeight: 900,
                fontSize: "clamp(4.2rem,6vw,4rem)",
                lineHeight: 0.96,
                margin: 0,
                background: "linear-gradient(90deg,#ffffff 0%,#ffffff 13%,#7edaff 32%,#8d92ff 58%,#d070ff 100%)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "nl-shimmer 5s ease infinite",
                filter: "drop-shadow(0 0 22px rgba(139,92,246,0.42))",
              }}
            >
              of the Curve
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{
              fontSize: "clamp(1.18rem,2vw,1.4rem)",
              color: "rgba(255,255,255,0.76)",
              lineHeight: 1.35,
              marginTop: 22,
            }}
          >
            Get the latest insights on real estate technology,
            <br />
            AI agents, and industry trends
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{
            borderRadius: 42,
            background: "linear-gradient(180deg,rgba(31,39,95,0.72),rgba(10,12,39,0.88))",
            border: "1.4px solid rgba(133,143,255,0.62)",
            boxShadow: "0 24px 70px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 0 46px rgba(86,97,255,0.10)",
            backdropFilter: "blur(22px)",
            marginBottom: 0,
            position: "relative",
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <form className="nl-card-inner" onSubmit={handleSubmit} style={{ padding: "55px 55px 27px" }}>
            <div className="nl-card-header" style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 25 }}>
              <div
                className="nl-mail-disc"
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "radial-gradient(circle at 35% 25%,rgba(128,119,255,0.76),rgba(50,41,126,0.96))",
                  border: "1.4px solid rgba(137,127,255,0.72)",
                  boxShadow: "0 0 32px rgba(107,91,255,0.50), inset 0 0 18px rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Mail size={38} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "clamp(1.45rem,2.2vw,1.5rem)", color: "#fff", lineHeight: 1.16 }}>
                  Join our newsletter
                </div>
                <div style={{ fontSize: "clamp(1rem,1.5vw,1.1rem)", color: "rgba(255,255,255,0.66)", marginTop: 6 }}>
                  No spam. Just valuable insights.
                </div>
              </div>
            </div>

            <div style={{ position: "relative", marginBottom: 30 }}>
              <span style={{ position: "absolute", left: 26, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.58)", pointerEvents: "none" }}>
                <Mail size={24} strokeWidth={1.8} />
              </span>
              <input
                id="nl-inp"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  paddingLeft: 82,
                  paddingRight: 24,
                  paddingTop: 27,
                  paddingBottom: 27,
                  borderRadius: 20,
                  fontSize: "clamp(1.05rem,1.7vw,1.2rem)",
                  fontWeight: 500,
                  color: "#fff",
                  background: "rgba(6,9,33,0.48)",
                  border: "1.5px solid rgba(128,137,255,0.42)",
                  boxShadow: "inset 0 0 28px rgba(22,29,80,0.72)",
                  transition: "all 0.2s",
                }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                padding: "24px 24px",
                borderRadius: 18,
                background: "linear-gradient(90deg,#3f8cff 0%,#555eff 42%,#8328de 100%)",
                boxShadow: "0 0 0 2px rgba(177,196,255,0.28), 0 10px 32px rgba(84,64,255,0.58), inset 0 1px 0 rgba(255,255,255,0.38)",
                border: "1.3px solid rgba(210,218,255,0.46)",
                cursor: submitting ? "not-allowed" : "pointer",
                color: "#fff",
                fontWeight: 900,
                fontSize: "clamp(1.18rem,2vw,1.4rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                opacity: submitting ? 0.75 : 1,
              }}
              whileHover={{ scale: submitting ? 1 : 1.02, boxShadow: "0 6px 36px rgba(108,63,197,0.65)" }}
              whileTap={{ scale: 0.97 }}
            >
              {submitting ? (
                <>
                  <div
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      border: "2.5px solid rgba(255,255,255,0.35)",
                      borderTopColor: "#fff",
                      animation: "nl-spin 0.75s linear infinite",
                    }}
                  />
                  Subscribing...
                </>
              ) : done ? (
                <>
                  <Check size={24} strokeWidth={2.7} />
                  You're subscribed!
                </>
              ) : (
                <>
                  Subscribe Now
                  <ArrowRight size={32} strokeWidth={2.5} />
                </>
              )}
            </motion.button>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, marginTop: 33, fontSize: "clamp(0.88rem,1.3vw,1rem)", color: "rgba(255,255,255,0.58)" }}>
              <ShieldCheck size={20} strokeWidth={1.9} />
              We respect your privacy. Unsubscribe anytime.
            </div>
          </form>
        </motion.div>

      </div>

      {/* <div
        className="nl-check-float"
        style={{
          position: "absolute",
          right: "calc(50% - 470px)",
          top: 552,
          zIndex: 14,
          width: 86,
          height: 86,
          borderRadius: "50%",
          background: "linear-gradient(145deg,#4c9dff,#5548e7 58%,#8831e0)",
          border: "2px solid rgba(149,186,255,0.86)",
          boxShadow: "0 0 28px rgba(64,130,255,0.72), inset 0 1px 0 rgba(255,255,255,0.30)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <Check size={44} color="#fff" strokeWidth={3.4} />
      </div> */}
    </section>
  );
};

export default Newsletter;
