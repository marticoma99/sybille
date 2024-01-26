import commonStyles from "../assets/common.module.css";
import SpecificShow from "./SpecificShow";

function Shows() {
  return (
    <div className={commonStyles.minHeight}>
      <h1 className={commonStyles.sectionTitle}>Shows</h1>
      <div className={commonStyles.generalContainer}>
        <SpecificShow
          details={{
            month: "Novembre",
            day: "12",
            city: "Berga",
            place: "Pavelló municipal d'esports",
            price: "Preu: 5€ anticipada",
            ticketsLink: "https://google.com",
          }}
        />
        <SpecificShow
          details={{
            month: "Novembre",
            day: "12",
            city: "Berga",
            place: "Pavelló municipal d'esports",
            price: "Preu: 5€ anticipada",
            ticketsLink: "https://google.com",
          }}
        />
        <SpecificShow
          details={{
            month: "Novembre",
            day: "12",
            city: "Berga",
            place: "Pavelló municipal d'esports",
            price: "Preu: 5€ anticipada",
            ticketsLink: "https://google.com",
          }}
        />
        <SpecificShow
          details={{
            month: "Novembre",
            day: "12",
            city: "Berga",
            place: "Pavelló municipal d'esports",
            price: "Preu: 5€ anticipada",
            ticketsLink: "https://google.com",
          }}
        />
      </div>
    </div>
  );
}

export default Shows;
