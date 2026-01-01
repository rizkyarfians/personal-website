import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";

function SoftShadow({ shadowRef }) {
  return (
    <mesh
      ref={shadowRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.2, 0]}
    >
      <planeGeometry args={[8, 8]} />
      <meshBasicMaterial
        transparent
        opacity={0.25}
      >
        <canvasTexture
          attach="map"
          image={(() => {
            const c = document.createElement("canvas");
            c.width = c.height = 256;
            const ctx = c.getContext("2d");

            const g = ctx.createRadialGradient(
              128, 128, 10,
              128, 128, 120
            );
            g.addColorStop(0, "rgba(0,0,0,0.6)");
            g.addColorStop(1, "rgba(0,0,0,0)");

            ctx.fillStyle = g;
            ctx.fillRect(0, 0, 256, 256);
            return c;
          })()}
        />
      </meshBasicMaterial>
    </mesh>
  );
}
function FloatingSphere({ shadowRef }) {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;

    const t = state.clock.elapsedTime;

    const x = Math.sin(t * 0.25) * 1.2;
    const y = Math.cos(t * 0.18) * 0.8;
    const z = Math.sin(t * 0.15) * 0.6;

    mesh.current.position.set(x, y, z);

    // sync shadow
    if (shadowRef?.current) {
      shadowRef.current.position.x = x;
      shadowRef.current.position.y = y - 2.2;
    }

    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x += 0.0015;
  });

  return (
    <Sphere args={[2.8, 64, 64]} ref={mesh}>
      <meshStandardMaterial
        color="#020617"
        emissive="#6366f1"
        emissiveIntensity={0.8}
        roughness={0.8}
        metalness={0.1}
        transparent
        opacity={0.35}
      />
    </Sphere>
  );
}



export default function SphereBackground() {
  const shadowRef = useRef();

  return (
    <div style={styles.wrapper}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />

        <SoftShadow shadowRef={shadowRef} />
        <FloatingSphere shadowRef={shadowRef} />
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
