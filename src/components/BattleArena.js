import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function SmallScene(){
  return (
    <Canvas camera={{position:[0,1.8,4], fov:50}} style={{height:380}}>
      <ambientLight intensity={0.6}/>
      <directionalLight position={[5,5,5]} intensity={1}/>
      <Float floatIntensity={0.6}>
        <mesh position={[0,0.2,0]}>
          <boxGeometry args={[1.6,0.6,1.6]} />
          <meshStandardMaterial color="#7a3e0b" metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
      <OrbitControls enablePan={false} enableZoom={false}/>
    </Canvas>
  );
}

export default function BattleArena(){
  return (
    <section className="arena" id="arena">
      <div className="container">
        <div className="arena-grid">
          <div>
            <h2>Battle Arena</h2>
            <p style={{color:"var(--muted)"}}>Simulate strategy clashes and preview expected outcomes before commit.</p>

            <div style={{display:"grid",gap:12,marginTop:16}}>
              <div className="panel">Scenario Editor — create multiple rival setups</div>
              <div className="panel">Combat forecast — win probability and resource loss</div>
              <div className="panel">Replay viewer — see past battles in timeline</div>
            </div>
          </div>

          <div className="panel canvas-wrap">
            <SmallScene />
          </div>
        </div>
      </div>
    </section>
  );
}
