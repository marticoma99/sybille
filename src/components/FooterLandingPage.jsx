import styles from "../assets/FooterLandingPage.module.css";
import AudioPlayer from "./AudioPlayer";
import audio from "../assets/Revolució.mp3"

function FooterLandingPage() {
  return (
    <div className={styles.footerGlobalContainer}>
      
      <AudioPlayer audio={audio}/>
      <div className={styles.footerContainer}>
        <a
          href="http://localhost:3000"
          className="fab fa-spotify fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="http://localhost:3000"
          className="fab fa-instagram fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="http://localhost:3000"
          className="fab fa-twitter fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="http://localhost:3000"
          className="fab fa-youtube fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="http://localhost:3000"
          className="fab fa-facebook fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="http://localhost:3000"
          className="fab fa-tiktok fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="http://localhost:3000"
          className="fab fa-amazon fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="http://localhost:3000"
          className="fab fa-itunes fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </div>
    </div>
  );
}

export default FooterLandingPage;
