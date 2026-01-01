import { useState } from "react";
import { works } from "./workData";
import WorkSlide from "./WorkSlide";

const SLIDE_WIDTH = 80; // vw
const GAP = 6;         // vw

export default function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const prev = () =>
    setActiveIndex((i) => Math.max(i - 1, 0));

  const next = () =>
    setActiveIndex((i) =>
      Math.min(i + 1, works.length - 1)
    );

  return (
    <div style={styles.wrapper}>
      {/* TRACK — HANYA GESER VIA ARROW */}
      <div
        style={{
          ...styles.track,
          transform: `translateX(-${activeIndex * (SLIDE_WIDTH + GAP)}vw)`,
        }}
      >
        {works.map((work, index) => {
          const isHighlighted =
            hoverIndex !== null
              ? index === hoverIndex
              : index === activeIndex;

          return (
            <WorkSlide
              key={work.id}
              work={work}
              isActive={isHighlighted}
              onHover={() => setHoverIndex(index)}
              onLeave={() => setHoverIndex(null)}
            />
          );
        })}
      </div>

      {/* CONTROLS */}
      <div style={styles.controls}>
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
}


const styles = {
  wrapper: {
    overflow: "hidden",
    width: "100%",
  },

  track: {
    display: "flex",
    gap: "6vw",
    transition: "transform 0.6s cubic-bezier(.22,.61,.36,1)",
  },

  controls: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "24px",
  },

  arrow: {
    fontSize: "24px",
    background: "none",
    border: "none",
    color: "#e5e7eb",
    cursor: "pointer",
    opacity: 0.75,
    transition: "opacity 0.2s ease",
  },
};
