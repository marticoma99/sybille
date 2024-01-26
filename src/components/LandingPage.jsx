import styles from "../assets/LandingPage.module.css";
import FooterLandingPage from "./FooterLandingPage";

function LandingPage() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <div className={styles.coverImage} />
      </div>
      <FooterLandingPage />
    </div>
  );
}

export default LandingPage;
