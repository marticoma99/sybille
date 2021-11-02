import styles from "../assets/NavigationBar.module.css";
import NavBarMenu from "./NavBarMenu";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className={styles.navBarContainer}>
      <Link to="/" className={styles.titleLink}>
        <h1 className={styles.title}>Sybille's On Jupiter</h1>
      </Link>
      <NavBarMenu />
    </div>
  );
}

export default NavigationBar;
