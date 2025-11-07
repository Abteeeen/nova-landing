import React from "react";
import { motion } from "framer-motion";

const plans = [
  {title:"Bronze Clan", price:"Free", features:["Basic analytics","3 projects"]},
  {title:"Gold Clan", price:"$29/mo", features:["Advanced analytics","Unlimited projects","Priority support"]},
  {title:"Legendary", price:"$99/mo", features:["SLA","Custom integrations","Dedicated support"]},
];

export default function Upgrades(){
  return (
    <section className="upgrades" id="upgrades">
      <div className="container">
        <h2 style={{textAlign:"center"}}>Upgrades & Plans</h2>
        <div className="upgrade-grid" style={{marginTop:16}}>
          {plans.map((p, i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <div className="card panel">
                <h3>{p.title}</h3>
                <h4 style={{color:"var(--gold)"}}>{p.price}</h4>
                <ul style={{color:"var(--muted)"}}>
                  {p.features.map((f,idx)=><li key={idx}>{f}</li>)}
                </ul>
                <button className="btn btn-primary" style={{marginTop:12}}>Choose</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
