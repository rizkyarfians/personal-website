export default function AboutPeek({ onClose }) {
  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div
        style={styles.card}
        onClick={(e) => e.stopPropagation()} // prevent close on card click
      >
        <button style={styles.close} onClick={onClose}>
          ✕
        </button>
        <div style={styles.photoWrapper}>
  <img
    src="/profile.jpg"
    alt="Profile"
    style={styles.photo}
  />
</div>

        <h2 style={styles.title}>About me</h2>
<div style={styles.textContainer}>

        <p style={styles.text}>
          I design and build interactive web systems with a strong focus on 3D interfaces, system thinking, and clean architecture.

My work lives at the intersection of frontend engineering, experimentation, and visual clarity—where complex systems are translated into intuitive, engaging digital experiences.


        </p>

        <p style={styles.text}>
          Currently, I am actively working as a Storyboard Designer at Zeus Animation, where I develop visual narratives that bridge concept, motion, and storytelling. This role sharpens my ability to think spatially, communicate ideas visually, and structure complex sequences into clear, impactful story flows.
        </p>
        <p style={styles.text}>
         Alongside my professional work, I am also involved in multiple Internet of Things (IoT) research projects at Universitas Negeri Malang, with a primary focus on smart systems, AIoT, and applied research for real-world environments. These projects deepen my interest in system architecture, data-driven interaction, and the integration between physical devices and digital interfaces.
        </p>
        <p style={styles.text}>
         Through this combination of industry practice and academic research, I continuously explore how technology, design, and system-level thinking can work together to create interactive solutions that are not only functional, but also meaningful and visually coherent.
        </p>
</div>
      </div>
    </div>
  );
}


const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    animation: "fadeIn 0.25s ease-out",
    
  },

  card: {
    position: "relative",
    width: "100vw",
    height: "80vh",
    maxWidth: "90%",
    // padding: "32px",s
    borderRadius: "20px",
    background: "rgba(15, 23, 42, 0.8)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
    color: "#e5e7eb",
    animation: "scaleIn 0.25s ease-out",
     padding: "124px",   
  },

  close: {
    position: "absolute",
    top: "16px",
    right: "18px",
    background: "none",
    border: "none",
    color: "#e5e7eb",
    fontSize: "18px",
    cursor: "pointer",
  },

  title: {
    fontSize: "24px",
    marginBottom: "16px",
    color: "#c7d2fe",
  },

  text: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#94a3b8",
    marginBottom: "14px",
  },
  photoWrapper: {
  width: "120px",
  height: "120px",
  margin: "0 auto 20px",
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",

  // subtle glow
  boxShadow: `
    0 0 0 2px rgba(255,255,255,0.08),
    0 0 30px rgba(99,102,241,0.35)
  `,
},

photo: {
 
width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 100%",
  transform: "translate(-2.5%, 65%) scale(3)",
  filter: "grayscale(1) contrast(1.05)",
},
textContainer: {
    paddingRight: "100px",
    
    boxSizing: "border-box",

    textAlign: "justify",
},
};

