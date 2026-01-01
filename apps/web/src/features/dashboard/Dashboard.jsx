import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Overview from "./Overview";
import AboutPeek from "./AboutPeek";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import About from "../about/About";


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  


  const closeSidebar = () => {
    setClosing(true); 
    setTimeout(() => {
      setSidebarOpen(false);
      setClosing(false);
    }, 300); // must match CSS animation duration
  };

  return (
    <div style={styles.container}>
      {(sidebarOpen || closing) && (
        <Sidebar onClose={closeSidebar} closing={closing} />
      )}

      <main style={styles.main}>
      
        <header style={styles.header}>
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              style={styles.burger}
              aria-label="Open menu"
            >
              ☰
            </button>
          )}
        </header>

        <Overview />
        <About/>
        <Work />  
        <Contact />
   
        


        {/* <section id="projects" style={styles.section}>
          <h1>Projects</h1>
        </section>

        <section id="skills" style={styles.section}>
          <h1>Skills</h1>
        </section>

        <section id="experience" style={styles.section}>
          <h1>Experience</h1>
        </section>

        <section id="contact" style={styles.section}>
          <h1>Contact</h1>
        </section> */}
      </main>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
  zIndex: 1,
  minHeight: "100vh",
  width: "100%",
  overflowX: "hidden", // 🔑 HILANGIN horizontal scroll
  color: "#e5e7eb",
  // background: "rgba(0,0,0,0.85)",
// background: `
    

//   #000000`,
// background: `
//     linear-gradient(
//   180deg,
  
//   rgba(13, 31, 73, 0.85),rgba(0, 0, 0, 0.65)
// )

//   `,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(14px)",

  /* Inner glow (key part) */
  boxShadow: `
    inset 0 1px 0 rgba(196, 34, 34, 0),
    inset 0 0 40px rgba(68, 96, 218, 0.37),
    inset 0 0 120px rgba(28, 48, 114, 0.36)
  `,


},
 main: {
    width: "100vw",          // ❗ BUKAN 100vw
    minHeight: "100vh",
    padding: "24px",
    position: "relative",   // 🔑 anchor stacking
    zIndex: 1,
  },


  header: {
    height: "48px",
    display: "flex",
    alignItems: "center",
    marginBottom: "24px",
  },
  burger: {
    fontSize: "24px",
    background: "none",
    color: "#e5e7eb",
    border: "none",
    cursor: "pointer",
  },
  section: {
    marginBottom: "64px",
    padding: "160px 0",
  background: "transparent",
  },
  


};
