import React from "react";
import { motion } from "framer-motion";

const items = [
  {name:"Ava T.", quote:"We shaved weeks off our release cycle and our clan loves the dashboards."},
  {name:"Ravi P.", quote:"The strategic simulations are a game-changer for us."},
  {name:"Sara L.", quote:"Beautiful UX and robust performance."},
];

export default function Testimonials(){
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 style={{textAlign:"center"}}>Trusted by Clans Worldwide</h2>
        <div className="testimonial-grid" style={{marginTop:18}}>
          {items.map((t,i)=>(
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <div className="testimonial-card panel">
                <p style={{color:"var(--muted)"}}>"{t.quote}"</p>
                <h4 style={{marginTop:10,color:"var(--gold)"}}>— {t.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
