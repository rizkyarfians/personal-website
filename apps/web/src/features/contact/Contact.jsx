export default function Contact() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.inner}>
        <h2 style={styles.title}>
          Let’s build something meaningful
        </h2>

        <p style={styles.desc}>
          I’m open to collaborations, freelance work, and long-term
          projects focused on interactive systems and thoughtful design.
        </p>

        <a
          href="mailto:rizkyarfians27@gmail.com"
          style={styles.email}
        >
          rizkyarfians27@gmail.com
        </a>

        <div style={styles.links}>
          <a href="https://github.com/rizkyarfians/rizkyarfians" style={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/rizky-arfiansyah-95a425175/" style={styles.link}>LinkedIn</a>
          
        </div>
      </div>
    </section>
  );
}


const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
  },

  inner: {
    maxWidth: "720px",
    textAlign: "center",
  },

  title: {
    fontSize: "clamp(36px, 6vw, 56px)",
    fontWeight: 500,
    marginBottom: "24px",
    letterSpacing: "0.04em",
  },

  desc: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#94a3b8",
    marginBottom: "40px",
  },

  email: {
    display: "inline-block",
    fontSize: "20px",
    color: "#c7d2fe",
    textDecoration: "none",
    marginBottom: "48px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
  },

  link: {
    fontSize: "14px",
    color: "#94a3b8",
    textDecoration: "none",
  },
};
