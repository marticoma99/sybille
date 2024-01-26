import commonStyles from "../assets/common.module.css";

function ContactInformation() {
  return (
    <div className={commonStyles.minHeight}>
      <h1 className={commonStyles.sectionTitle}>Contact</h1>
      <div className={commonStyles.generalContainer}>
        <div className={commonStyles.specificElement}>
          <h2 className={commonStyles.sectionTitles}>Nom Cognom</h2>
          <h4>example@email.com</h4>
          <h4>(+34) 987 65 43 21</h4>
        </div>
        <div className={commonStyles.specificElement}>
          <h2 className={commonStyles.sectionTitles}>Nom Cognom</h2>
          <h4>example@email.com</h4>
          <h4>(+34) 987 65 43 21</h4>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
