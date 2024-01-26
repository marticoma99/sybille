import styles from "../assets/FooterLandingPage.module.css";
import AudioPlayer from "./AudioPlayer";
import FooterLinks from "./FooterLinks";
import audio from "../assets/Revolució.mp3"

function FooterLandingPage() {
  return (
    <div className={styles.footerGlobalContainer}>
      <AudioPlayer audio={audio}/>
      <FooterLinks/>
    </div>
  );
}

export default FooterLandingPage;
