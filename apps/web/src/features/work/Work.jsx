import { useRef, useState } from "react";
import { works } from "./workData";
import WorkSlide from "./WorkSlide";
import WorkModal from "./WorkModal";
import { createPortal } from "react-dom";

export default function Work() {
  const isMobile = window.innerWidth < 768;

  const ITEMS_PER_PAGE = isMobile ? 1 : 2;

  const [page, setPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);

  const totalPages = Math.ceil(works.length / ITEMS_PER_PAGE);
  const scrollLock = useRef(false);

  const handleWheel = (e) => {
    if (isMobile) return;

    if (scrollLock.current) return;
    scrollLock.current = true;
    setTimeout(() => (scrollLock.current = false), 700);

    if (e.deltaY > 0) {
      setPage((p) => Math.min(p + 1, totalPages - 1));
    } else {
      setPage((p) => Math.max(p - 1, 0));
    }
  };

  return (
    <>
      <section style={styles.section} onWheel={handleWheel}>
        <h2 style={styles.heading}>Selected Work</h2>

        {/* VIEWPORT */}
        <div style={styles.viewport}>
          {/* TRACK */}
          <div
            style={{
              ...styles.track,
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {works.map((work, index) => (
              <div
                key={work.id}
                style={{
                  ...styles.slide,
                  flex: isMobile ? "0 0 100%" : "0 0 50%",
                }}
              >
                <WorkSlide
                  work={work}
                  isActive={hoveredIndex === index}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedWork(work)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* INDICATOR */}
        <div style={styles.indicator}>
          {String(page + 1).padStart(2, "0")} /{" "}
          {String(totalPages).padStart(2, "0")}
        </div>

        {/* MOBILE ARROW */}
        {isMobile && (
          <div style={styles.controls}>
            <button
              style={styles.arrow}
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
            >
              ←
            </button>

            <button
              style={styles.arrow}
              onClick={() =>
                setPage((p) => Math.min(p + 1, totalPages - 1))
              }
              disabled={page === totalPages - 1}
            >
              →
            </button>
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedWork &&
        createPortal(
          <WorkModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
          />,
          document.body
        )}
    </>
  );
}

const styles = {
  section: {
    padding: "160px 0",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "64px",
  },

  viewport: {
    overflow: "hidden",
    width: "100%",
  },

  track: {
    display: "flex",
    transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "transform",
  },

  slide: {
    display: "flex",
    justifyContent: "center",
  },

  indicator: {
    marginTop: "48px",
    textAlign: "center",
    fontSize: "13px",
    letterSpacing: "0.2em",
    color: "rgba(255,255,255,0.55)",
  },

  controls: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "center",
    gap: "24px",
  },

  arrow: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    opacity: 0.85,
  },
};
