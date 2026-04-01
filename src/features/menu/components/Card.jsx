import { formatterPrice } from "../../../helpers/formatter";

const Card = ({ onClick, ...product }) => {
  return (
    <article className="rounded-md overflow-hidden shadow group">
      <header className="w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.slug}
          width={200}
          height={200}
          loading="lazy"
          className="w-full aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </header>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-2xl font-bold leading-[1.2] text-text">
          {product.name}
        </h3>
        <p className="h-14 text-base font-base text-text line-clamp-2">
          {product.description}
        </p>
      </div>

      <footer className="p-4 flex items-center justify-between gap-2">
        <span className="text-lg font-bold leading-none">
          {formatterPrice(product.price)}
        </span>

        <button
          className="h-8 px-4 rounded-sm grid place-items-center text-base font-base bg-bg-2 text-text-3 cursor-pointer"
          onClick={onClick}
        >
          Add to cart
        </button>
      </footer>
    </article>
  );
};

export default Card;
