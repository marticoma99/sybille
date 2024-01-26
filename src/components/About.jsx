import commonStyles from "../assets/common.module.css";
import AboutSection from "./AboutSection";
import image1 from "../assets/images/image2.JPG";
import image2 from "../assets/images/image3.JPG";

function About() {
  return (
    <div className={commonStyles.minHeight}>
      <h1 className={commonStyles.sectionTitle}>About</h1>
      <div className={commonStyles.aboutContainer}>
        <AboutSection
          details={{
            text: "Nulla excepteur laboris adipisicing Lorem ea laboris tempor do occaecat sit adipisicing duis consequat aute. Lorem cillum commodo fugiat sunt elit culpa eiusmod est eiusmod amet fugiat non ut Lorem. Excepteur ea nisi ex eiusmod ut fugiat commodo laborum.",
            coverImage: image1,
          }}
        />
        <AboutSection
          details={{
            text: "Anim esse ut aliquip consectetur in cillum laboris aliquip duis exercitation consectetur. Occaecat consequat occaecat veniam do. Et aliquip minim dolor veniam nisi ex irure. Mollit nisi sit laborum dolor exercitation et ut. Incididunt eiusmod enim non aute. Culpa ut consequat id duis velit exercitation duis pariatur deserunt dolor Lorem dolor. Elit sit ut nostrud consectetur duis aliquip mollit.",
            coverImage: image2,
          }}
        />
      </div>
    </div>
  );
}

export default About;
