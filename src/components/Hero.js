import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Bounds } from "@react-three/drei";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/* === Load & Adjust 3D Dome Model === */
function DomeModel() {
  const { scene } = useGLTF("/models/Geodesic_Dome.glb"); // your model path

  // Adjust model orientation and size
  scene.rotation.y = Math.PI / 2; // turn to face camera
  scene.position.set(0, -1.0, 0); // center vertically
  scene.scale.set(2.5, 2.5, 2.5); // scale uniformly

  return <primitive object={scene} />;
}

/* === 3D Scene with Camera & Lighting === */
function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} />
      <pointLight position={[-3, -2, -2]} intensity={0.4} />

      {/* Auto-fit and render model */}
      <Bounds fit clip observe margin={1.2}>
        <DomeModel />
      </Bounds>

      {/* Reflections + Auto rotation */}
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}

/* === Hero Section === */
export default function Hero() {
  const [ready, setReady] = useState(false);

  // initialize particles once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  return (
    <section className="hero" id="home">
      <div
        className="container"
        style={{ display: "flex", gap: "2rem", alignItems: "center" }}
      >
        {/* LEFT TEXT SECTION */}
        <div className="left">
          <h1 className="title">
            Forge Your Empire with <span className="accent">NovaClash</span>
          </h1>
          <p className="lead">
            Build. Battle. Dominate. The strategy platform where data meets
            warfare — analytics, collaboration, and power upgrades in one realm.
          </p>

          <div className="actions">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-ghost">Watch Demo</button>
          </div>

          <div
            style={{
              marginTop: "1.25rem",
              display: "flex",
              gap: ".6rem",
              alignItems: "center",
            }}
          >
            <div
              className="panel"
              style={{ display: "flex", gap: ".6rem", alignItems: "center" }}
            >
              <strong style={{ color: "var(--gold)", marginRight: 8 }}>45%</strong>
              <span style={{ color: "var(--muted)" }}>Avg speed boost</span>
            </div>
            <div
              className="panel"
              style={{ display: "flex", gap: ".6rem", alignItems: "center" }}
            >
              <strong style={{ color: "var(--ember)", marginRight: 8 }}>24/7</strong>
              <span style={{ color: "var(--muted)" }}>Clan support</span>
            </div>
          </div>
        </div>

        {/* RIGHT 3D MODEL SECTION */}
        <div className="right panel canvas-wrap" aria-hidden>
          <div style={{ width: "100%", height: 420, position: "relative" }}>
            <ThreeScene />
            {ready && (
              <Particles
                id="tsparticles"
                options={{
                  fullScreen: { enable: false },
                  fpsLimit: 60,
                  particles: {
                    number: { value: 40 },
                    color: { value: ["#ff9a3c", "#ffd36b", "#ff5a00"] },
                    size: { value: { min: 1, max: 4 } },
                    move: { direction: "top", speed: 0.6, outModes: "out" },
                    opacity: { value: { min: 0.2, max: 0.9 } },
                  },
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 420,
                  pointerEvents: "none",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* === Preload model for smoother startup === */
useGLTF.preload("/models/Geodesic_Dome.glb");
