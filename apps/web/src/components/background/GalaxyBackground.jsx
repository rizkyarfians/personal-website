import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";

function GalaxySphere() {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.05;
    mesh.current.rotation.x += delta * 0.02;
  });

  return (
    <Sphere args={[3.5, 64, 64]} ref={mesh}>
      <meshStandardMaterial
        color="#4f46e5"
        emissive="#6366f1"
        emissiveIntensity={0.6}
        roughness={0.9}
        metalness={0.1}
        transparent
        opacity={0.15}
      />
    </Sphere>
  );
}

export default function GalaxyBackground() {
  return (
    <div style={styles.wrapper}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <GalaxySphere />
      </Canvas>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none", // 🔑 UI stays clickable
  },
};
