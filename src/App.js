import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import BattleArena from "./components/BattleArena";
import Upgrades from "./components/Upgrades";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <BattleArena />
      <Upgrades />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
