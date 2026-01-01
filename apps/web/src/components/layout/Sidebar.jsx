import { useState } from "react";

export default function Sidebar({ onClose, closing }) {
  const [active, setActive] = useState("projects");
  return (
    
    <aside
      style={{
        ...styles.sidebar,
        animation: closing
          ? "sidebarOut 0.3s ease-in forwards"
          : "sidebarIn 0.35s ease-out forwards",
      }}
    >
      {/* Top */}
      <div style={styles.top}>
        <button onClick={onClose} style={styles.close}>
          ✕
        </button>
      </div>

      {/* Center */}
      <nav style={styles.nav}>
  <a
    href="#projects"
    onMouseEnter={() => setActive("projects")}
    onClick={onClose}
    style={active === "projects" ? styles.navPrimary : styles.navItem}
  >
    Projects
  </a>

  <a
    href="#skills"
    onMouseEnter={() => setActive("skills")}
    onClick={onClose}
    style={active === "skills" ? styles.navPrimary : styles.navItem}
  >
    Skills
  </a>

  <a
    href="#experience"
    onMouseEnter={() => setActive("experience")}
    onClick={onClose}
    style={active === "experience" ? styles.navPrimary : styles.navItem}
  >
    Experience
  </a>
</nav>


      {/* Bottom spacer */}
      <div />
    </aside>
  );
}

const styles = {
  sidebar: {
    position: "fixed",
  top: 0,
  left: 0,
  width: "280px",
  height: "100vh",
  padding: "24px",
  zIndex: 1000,

  /* Glass base */
  background: `
    linear-gradient(
  180deg,
  rgba(3, 9, 24, 0.85),
  rgba(24, 54, 122, 0.65)
)

  `,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(14px)",

  /* Inner glow (key part) */
  boxShadow: `
    inset 0 1px 0 rgba(1, 14, 19, 1),
    inset 0 0 40px rgba(79, 172, 226, 0.51),
    inset 0 0 120px rgba(71, 91, 158, 0.84)
  `,

  /* Edge definition */
  borderRight: "1px solid rgba(255,255,255,0.18)",


  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  animation: "sidebarIn 0.35s ease-out forwards",
  },

  close: {
    alignSelf: "flex-end",
    background: "none",
    border: "none",
    color: "#ffffffbb",
    fontSize: "20px",
    cursor: "pointer",
     textShadow: "0 0 8px rgba(255, 255, 255, 1)",
  },

  name: {
    margin: 0,
    fontSize: "22px",
  },

  role: {
    marginTop: "6px",
    fontSize: "14px",
    color: "#94a3b8",
  },

  nav: {
    flex: 1,                      // 🔑 this enables vertical centering
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",     // 🔑 vertical center
    gap: "18px",
  },

  navPrimary: {
    fontSize: "32px",
    fontWeight: 500,
    color: "#ebefffff",
    transition: "all 0.2s ease",
    textShadow: "0 0 5px rgba(255, 255, 255, 1)",
  },

  navItem: {
    fontSize: "18px",
    color: "#94a3b89d",
    transition: "all 0.2s ease",
  },
 

  
  
  
  
};

