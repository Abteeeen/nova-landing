import React from "react";

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">
          Nova<span className="dot">.</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#arena">Arena</a>
          <a href="#upgrades">Upgrades</a>
          <a href="#testimonials">Customers</a>
          <a className="btn btn-ghost" href="#signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
