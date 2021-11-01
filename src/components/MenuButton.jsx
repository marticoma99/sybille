import styles from "../assets/NavBar.module.css";

function MenuButton({ open, handleClick }) {
  return !open ? (
    <button onClick={handleClick} className={styles.button}>
      <i class="fa fa-bars fa-2x"></i>
    </button>
  ) : (
    <button onClick={handleClick} className={styles.button}>
      <i class="fa fa-times fa-2x"></i>
    </button>
  )
}

export default MenuButton