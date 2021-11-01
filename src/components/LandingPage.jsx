import coverImage from "../assets/images/coverImage.jpg";
import styles from "../assets/LandingPage.module.css";
import FooterLandingPage from "./FooterLandingPage";

function LandingPage() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={coverImage} alt="Cover" className={styles.coverImage} />
      </div>
      <FooterLandingPage />
    </div>
  );
}

export default LandingPage;
