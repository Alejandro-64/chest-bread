import { Seo } from "../../components/ui";
import { SectionHero, SectionList } from "./modules";

const MenuPage = () => {
  return (
    <>
      <Seo
        title="Menu"
        description="Explore our full menu — burgers, hot dogs, drinks and fries. Fresh ingredients and real flavor."
      />

      <div className="max-w-360 mx-auto">
        <SectionHero />
        <SectionList />
      </div>
    </>
  );
};

export default MenuPage;
