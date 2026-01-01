
import { useState } from "react";
import AboutPeek from "./AboutPeek";
export default function Overview() {
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <section style={styles.wrapper}>
    <div style={styles.heroInner}>
      {/* Name / Identity */}
      <span style={styles.title}>
        Interactive System Builder
      </span>


      <h1 style={styles.name}>
       RIZKY ARFIANSYAH
      </h1>
      

      
      

      {/* <p style={styles.description}>
        I design and develop web-based experiences that combine
        real-world data, 3D interfaces, and modern frontend
        architecture.
      </p> */}

      <div style={styles.tags}>
        <span style={styles.tag}>Web</span>
        <span style={styles.tag}>3D / XR</span>
        <span style={styles.tag}>AIoT</span>
        <span style={styles.tag}>Mobile Apps</span>
      </div>
      <button
  style={styles.aboutBtn}
  onClick={() => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  About me
</button>

</div>
{aboutOpen && (
  <AboutPeek onClose={() => setAboutOpen(false)} />
)}
    </section>
  );
}

const styles = {
  wrapper: {
  height: "100vh",        // 🔥 HERO FULLSCREEN DI SINI
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},


  

 heroInner: {
  maxWidth: "100%",         // ❗ BUKAN 100vw
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",

  // 🔥 optical centering (halus)
  transform: "translateY(-30%)",
},


  title: {
    fontSize: "13px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)",
  
  },

  name: {
    fontSize: "clamp(56px, 8vw, 92px)",
  fontWeight: 600,
  // letterSpacing: "0.06em",
  lineHeight: 1.05,
  marginBottom: "28px",
  },

  description: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "#94a3b8",
    margin: "0 auto 32px auto", // 👉 paragraf ikut center
    maxWidth: "640px",
  },

  tags: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",   // 👉 tags ke tengah
  },

  tag: {
    padding: "6px 14px",
    fontSize: "16px",
    borderRadius: "999px",
    fontWeight: 500,
    color: "rgba(196, 207, 255, 0.75)",
    // backdropFilter: "blur(6px)",
  },


  aboutBtn: {
  minWidth: "250px",
  marginTop: "36px",
  padding: "10px 22px",
  fontSize: "18px",
  borderRadius: "999px",
  opacity: 0.85,
  background: "#4460daff",
},
aboutBtnHover: {
  background: "rgba(231, 0, 0, 1)",
}
};