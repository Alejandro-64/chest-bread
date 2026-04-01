import { Seo } from "../../components/ui";
import {
  SectionHero,
  SectionFood,
  SectionAboutUs,
  SectionContact,
} from "./modules";

const HomePage = () => {
  return (
    <>
      <Seo />

      <div className="max-w-360 mx-auto">
        <SectionHero />
        <SectionFood />
        <SectionAboutUs />
        <SectionContact />
      </div>
    </>
  );
};

export default HomePage;
