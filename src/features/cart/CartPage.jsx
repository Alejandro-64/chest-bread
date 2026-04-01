import { Seo } from "../../components/ui";
import { SectionHero, SectionList } from "./modules";

const CartPage = () => {
  return (
    <>
      <Seo
        title="Your Cart"
        description="Review your order and send it via WhatsApp. Fast delivery in Lima."
      />

      <div className="max-w-360 mx-auto">
        <SectionHero />
        <SectionList />
      </div>
    </>
  );
};

export default CartPage;
