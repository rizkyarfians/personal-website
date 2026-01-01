export default function About() {
  const isMobile = window.innerWidth < 768;

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container(isMobile)}>
        {/* FOTO */}
        <div style={styles.photoBox(isMobile)}>
          <img
            src="/profile2.jpg"
            alt="Profile"
            style={styles.photo}
          />
        </div>

        {/* TEXT */}
        <div style={styles.content(isMobile)}>
          <h2 style={styles.title}>About Me</h2>

          <p style={styles.text}>
            I design and build interactive web systems with a strong focus on
            3D interfaces, system thinking, and clean architecture.
          </p>

          <p style={styles.text}>
            My work lives at the intersection of frontend engineering,
            experimentation, and visual clarity—where complex systems are
            translated into intuitive, engaging digital experiences.
          </p>

          {/* STACK */}
          <div style={styles.stack(isMobile)}>
            {["React", "Unity", "Node.js", "Arduino", "Python", "Flutter"].map(
              (item) => (
                <span key={item} style={styles.tag}>
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


const styles = {
  section: {
    padding: "160px 24px",
  },

  container: (isMobile) => ({
    display: isMobile ? "flex" : "grid",
    flexDirection: isMobile ? "column" : undefined,
    gridTemplateColumns: isMobile ? undefined : "420px 1fr",
    gap: isMobile ? "40px" : "80px",
    maxWidth: "1100px",
    margin: "0 auto",
    alignItems: "center",
  }),

  photoBox: (isMobile) => ({
    width: "100%",
    maxWidth: isMobile ? "260px" : "360px",
    aspectRatio: "1 / 1",
    borderRadius: "20px",
    overflow: "hidden",
    margin: isMobile ? "0 auto" : "0",
    boxShadow: `
      0 0 0 2px rgba(255,255,255,0.06),
      0 0 40px rgba(99,102,241,0.25)
    `,
  }),

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(1) contrast(1.05)",
    transform : "translate(-2.5%, 30%) scale(2)",
  },

  content: (isMobile) => ({
    maxWidth: "640px",
    textAlign: isMobile ? "center" : "left",
  }),

  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#c7d2fe",
  },

  text: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#94a3b8",
    marginBottom: "14px",
  },

  stack:(isMobile) => ({ 
    marginTop: "24px",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: isMobile ? "center" : "flex-start",
 }),

  tag: {
    fontSize: "12px",
    padding: "6px 14px",
    borderRadius: "999px",
    background: "rgba(68, 95, 218, 0.75)",
    color: "#e5e7eb",
  },
};
