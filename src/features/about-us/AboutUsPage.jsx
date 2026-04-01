import { Seo } from "../../components/ui";
import {
  SectionHero,
  SectionBanner,
  SectionCards,
  SectionOurHistory,
} from "./modules";

const AboutUsPage = () => {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn the story behind Chest-Bread. Born in Lima, built on fresh ingredients and real fast food."
      />

      <div className="max-w-360 mx-auto">
        <SectionHero />
        <SectionOurHistory />
        <SectionCards />
      </div>
      <SectionBanner />
    </>
  );
};

export default AboutUsPage;
