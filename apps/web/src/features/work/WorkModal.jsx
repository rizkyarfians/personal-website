export default function WorkModal({ work, onClose }) {
  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()} // ⛔ jangan tutup saat klik modal
      >
        {/* CLOSE */}
        <button style={styles.close} onClick={onClose}>
          ✕
        </button>

        {/* CONTENT */}
        <h2 style={styles.title}>{work.title}</h2>

        {/* IMAGES */}
        <div style={styles.images}>
          <img src={work.images[0]} style={styles.image} />
          <img src={work.images[1]} style={styles.image} />
        </div>

        {/* DESC */}
        <p style={styles.desc}>{work.description}</p>
        <p style={styles.desc}>{work.longDescription}</p>

        {/* TAGS */}
        <div style={styles.tags}>
          {work.tags.map((tag) => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",        // 🔑 WAJIB
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
    zIndex: 9999,             // 🔑 DI ATAS SEMUA
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  modal: {
    width: "80vw",
    maxWidth: "960px",
    maxHeight: "80vh",
    overflowY: "auto",
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "24px",
    padding: "32px",
    position: "relative",
  },

  close: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "20px",
    color: "#fff",
    cursor: "pointer",
  },

  title: {
    fontSize: "32px",
    marginBottom: "24px",
  },

  images: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "24px",
  },

  image: {
    width: "100%",
    height: "240px",
    objectFit: "contain",
    borderRadius: "16px",
  },

  desc: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#cbd5f5",
    marginBottom: "24px",
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
    background: "rgba(255,255,255,0.15)",
  },
};
