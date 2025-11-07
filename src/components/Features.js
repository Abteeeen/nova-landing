import React from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "⚡", title: "Fast Performance", text: "Optimized builds and blazing load times." },
  { icon: "🔒", title: "Secure by Design", text: "Enterprise-grade security baked in." },
  { icon: "📈", title: "Scalable Growth", text: "Built to grow with your vision." },
  { icon: "🎨", title: "Modern Aesthetics", text: "Beautiful and responsive design system." },
];

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose Nova?</h2>
        <div className="grid">
          {features.map((f, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
