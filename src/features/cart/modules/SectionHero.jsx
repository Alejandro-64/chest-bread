import { useCartStore } from "../../../store/cart.store";

const SectionHero = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <section className="w-full py-8 px-4 flex items-center overflow-hidden">
      <article className="w-full flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h1 className="text-6xl font-black text-text-2 uppercase leading-[1.2] text-center md:text-8xl md:text-start">
          Your <br /> Cart
        </h1>

        <p className="text-lg font-base text-text leading-none text-center md:text-end">
          {cart.length} items · Review your order
        </p>
      </article>
    </section>
  );
};

export default SectionHero;
