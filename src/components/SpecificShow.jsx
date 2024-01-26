import styles from "../assets/Shows.module.css";
import commonStyles from "../assets/common.module.css";

function SpecificShow(details) {
  console.log(details);
  return (
    <div className={commonStyles.specificElement}>
      <div className={styles.showContainer}>
        <h2 className={styles.month}>{details.details.month}</h2>
        <div className={styles.showInfo}>
          <h2 className={styles.showDay}>{details.details.day}</h2>
          <div className={styles.concretInfo}>
            <h3>{details.details.city}</h3>
            <h4>{details.details.place}</h4>
            <h4>{details.details.price}</h4>
            <a
              href={details.details.ticketsLink}
              target="_blank"
              rel="noreferrer"
            >
              Comprar entrades
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificShow;
