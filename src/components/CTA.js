import React from "react";
import { motion } from "framer-motion";

export default function CTA(){
  return (
    <section className="cta" id="signup">
      <div className="container">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Start Building Your Empire Today
        </motion.h2>
        <p style={{color:"var(--muted)"}}>Sign up now and get your clan a head start.</p>
        <div style={{marginTop:16}}>
          <button className="btn btn-primary">Start Free Trial</button>
        </div>
      </div>
    </section>
  );
}
