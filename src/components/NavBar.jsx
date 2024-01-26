import styles from "../assets/NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar({open, closeMenu}) {
  let className = styles.navBarContainer;
  if (!open) className += " " + styles.navContainerClosed;
  return (
    <li className={className} onClick={closeMenu}>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/shows">
        <p>Shows</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </li>
  );
}

export default NavBar;
