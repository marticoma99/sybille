import FooterLinks from "./FooterLinks";
import styles from "../assets/GeneralFooter.module.css";

function GeneralFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerElements}>
          <h2>CONTACT</h2>
          <div className={styles.contactElements}>
            <h3>example@email.com</h3>
            <h3>(+34) 627 83 73 82</h3>
          </div>
        </div>
        <div className={styles.footerElements}>
          <h2>FOLLOW US!</h2>
          <FooterLinks />
        </div>
      </div>
    </div>
  );
}

export default GeneralFooter;
