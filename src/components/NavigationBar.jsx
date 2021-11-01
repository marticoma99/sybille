import styles from "../assets/NavigationBar.module.css";
import NavBarMenu from "./NavBarMenu"
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Link to="/" className={styles.navBarContainer}>
      <h1 className={styles.title}>Sybille's On Jupiter</h1>
      <NavBarMenu/>
    </Link>
  );
}

export default NavigationBar;
