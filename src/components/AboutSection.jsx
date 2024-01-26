import styles from "../assets/AboutSection.module.css";

function AboutSection(details) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <img src={details.details.coverImage} alt="Cover" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <p>{details.details.text}</p>
      </div>
    </div>
  );
}

export default AboutSection;
