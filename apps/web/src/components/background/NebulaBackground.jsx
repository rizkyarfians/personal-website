import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";

function NebulaLayer({ size, color, emissive, speed, opacity, position = [0, 0, 0] }) {

  const mesh = useRef();

  useFrame((state, delta) => {
  if (!mesh.current) return;

  const t = state.clock.elapsedTime;
  mesh.current.scale.setScalar(1 + Math.sin(t * 0.15) * 0.008);

  mesh.current.rotation.y += delta * speed;
  mesh.current.rotation.x += delta * speed * 0.6;
});

  return (
    <Sphere args={[size, 64, 64]} ref={mesh} position={position}>

      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={1}
        transparent
        opacity={opacity}
        roughness={1}
        metalness={0}
        depthWrite={false}   // 🔑 VERY IMPORTANT
      />
    </Sphere>
  );
}

function CoreSphere({ position = [0,0,0] }) {
  const mesh = useRef();

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.12;
  });

  return (
    <Sphere args={[2.2, 64, 64]} ref={mesh} position={position}>
      <meshStandardMaterial
        color="#020617"
        emissive="#6366f1"
        emissiveIntensity={0.9}
        transparent
        opacity={0.18}
        roughness={1}
        metalness={0}
        depthWrite={false}   // 🔑 VERY IMPORTANT
      />
    </Sphere>
  );
}

export default function NebulaBackground() {
  return (
    <div style={styles.wrapper}>
      <Canvas camera={{ position: [1.2, 0.6, 10], fov: 55 }}>
        
        {/* ✅ FOG — THIS IS THE ONLY PLACE IT GOES */}
        <fog attach="fog" args={["#020617", 6, 18]} />

        {/* Lights */}
        <ambientLight intensity={0.25} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />

        {/* Nebula layers */}
        <NebulaLayer
  size={6}
  color="#020617"
  emissive="#312e81"
  speed={0.004}
  opacity={0.045}
  position={[-0.8, 0.4, -2]}
/>

<NebulaLayer
  size={4.2}
  color="#020617"
  emissive="#38bdf8"
  speed={0.008}
  opacity={0.065}
  position={[0.6, -0.5, 0]}
/>


        {/* Core */}
        <CoreSphere position={[0.2, 0.1, 1]} />

      </Canvas>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
};
