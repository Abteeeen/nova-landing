import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>© {new Date().getFullYear()} NovaClash. All rights reserved.</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Docs</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
