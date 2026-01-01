import { useRef, useState } from "react";

export default function WorkSlide({
  work,
  isActive,
  onHover,
  onLeave,
  onClick,
}) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    if (!hovered || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 18;
    const moveY = (y - rect.height / 2) / 18;

    imageRef.current.style.transform = `
      translate3d(${moveX}px, ${moveY}px, 0)
      scale(1.08)
    `;
  };

  const handleLeave = () => {
    setHovered(false);
    imageRef.current.style.transform =
      "translate3d(0,0,0) scale(1)";
    onLeave?.();
  };

  return (
    <div
  ref={cardRef}
  onClick={onClick}
  onMouseEnter={() => {
    setHovered(true);
    onHover?.();
  }}
  onMouseLeave={() => {
    handleLeave();
    onLeave?.();
  }}
  onMouseMove={handleMove}
  style={{
    ...styles.slide,
    cursor: "pointer",
    // opacity: isActive ? 1 : 0.35,
    transform: isActive ? "scale(1)" : "scale(0.96)",

    // 🔥 GLOW TIPIS DI SINI
    boxShadow: isActive
      ? `
        0 0 0 1px rgba(99,102,241,0.35),
        0 20px 60px rgba(99,102,241,0.25)
      `
      : "0 20px 50px rgba(0,0,0,0.45)",
  }}
>

      {/* IMAGE */}
     <div style={styles.imageWrap}>
  <img src={work.image} style={styles.image} />
  <div style={styles.imageOverlay} />
</div>

      {/* TEXT OVERLAY */}
      <div style={styles.overlay}>
        <h2 style={styles.title}>{work.title}</h2>

        <p style={styles.desc}>{work.description}</p>

        <div style={styles.tags}>
          {work.tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


const styles = {
  slide: {
  position: "relative",
  width: "100%",
height: "520px",
maxWidth: "720px",
  borderRadius: "24px",
  overflow: "hidden",
  transition: "transform 0.25s ease, box-shadow 0.3s ease",
  transformStyle: "preserve-3d",
  outline: "1px solid rgba(255,255,255,0.15)",
},


  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "transform 0.15s ease-out",
    willChange: "transform",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    padding: "48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    background: `
      linear-gradient(
        to top,
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.25),
        rgba(255, 255, 255, 0)
      )
    `,
  },

  title: {
    fontSize: "32px",
    marginBottom: "12px",
  },

  desc: {
    maxWidth: "520px",
    fontSize: "16px",
    lineHeight: 1.6,
    color: "#e5e7eb",
    marginBottom: "16px",
  },

  tags: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  tag: {
    fontSize: "12px",
    padding: "6px 14px",
    borderRadius: "999px",
    background: "rgba(68, 95, 218, 0.75)",
  },

  imageWrap: {
  position: "absolute",
  inset: 0,
},



imageOverlay: {
  position: "absolute",
  inset: 0,
  background: `
    linear-gradient(
      to top,
      rgba(0,0,0,0.75),
      rgba(0,0,0,0.35),
      rgba(0,0,0,0)
    )
  `,
}
  
};
