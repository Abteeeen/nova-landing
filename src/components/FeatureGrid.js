import React, { useRef } from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "⚔️", title: "Tactical Insights", text: "Predict moves and outmaneuver opponents with AI-powered strategy." },
  { icon: "🏰", title: "Fortress Security", text: "Multi-layer defense, encryption, and role-based access." },
  { icon: "🛡️", title: "Clan Collaboration", text: "Shared warboards, live chat, and role assignments." },
  { icon: "⚙️", title: "Auto Upgrades", text: "Automate upgrades with template rules and scheduling." },
  { icon: "📈", title: "Battle Analytics", text: "Deep KPIs for wins, losses, and resource yields." },
  { icon: "🚀", title: "Instant Deploys", text: "Push strategies instantly with rollback support." },
  { icon: "🧭", title: "Map Overlays", text: "Terrain-aware algorithms to choose best routes." },
  { icon: "🔗", title: "Integrations", text: "Connect telemetry, payment and analytics via plugins." },
];

function TiltCard({ children }) {
  const ref = useRef();
  function handleMove(e){
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (y - 0.5) * 10;
    const ry = (x - 0.5) * -10;
    el.querySelector(".inner").style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  function handleLeave(){
    ref.current.querySelector(".inner").style.transform = `rotateX(0deg) rotateY(0deg)`;
  }
  return (
    <div className="card card--tilt" ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="inner">{children}</div>
    </div>
  );
}

export default function FeatureGrid(){
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Battle-Ready Features</h2>
        <p style={{textAlign:"center",color:"var(--muted)"}}>Everything a modern clan needs to strategize and win.</p>

        <div className="grid" style={{marginTop:20}}>
          {features.map((f, idx) => (
            <motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <TiltCard>
                <div style={{padding:"1rem"}}>
                  <div className="icon">{f.icon}</div>
                  <div className="tag">Upgrade</div>
                  <h3 style={{marginTop:10}}>{f.title}</h3>
                  <p style={{color:"var(--muted)"}}>{f.text}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
