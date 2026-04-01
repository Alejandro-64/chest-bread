import { formatterPrice, formatterText } from "../../../helpers/formatter";

import { BsTrash } from "react-icons/bs";

import Counter from "./Counter";

const Card = ({
  decreaseProduct,
  increaseProduct,
  deleteProduct,
  ...product
}) => {
  return (
    <article className="p-4 rounded-sm flex gap-4 shadow">
      <div className="size-28 rounded-sm overflow-hidden">
        <img
          src={product.image}
          alt={product.slug}
          width={200}
          height={200}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="grow flex flex-col gap-1">
        <span className="w-max px-2 py-1 rounded-sm bg-bg-2 text-text-3 text-sm leading-none">
          {formatterText(product.category)}
        </span>
        <h3 className="text-2xl font-bold line-clamp-1">{product.name}</h3>
        <p className="mt-2 text-lg font-bold leading-none">
          {formatterPrice(product.price)}
        </p>
      </div>

      <div className="relative flex items-center">
        <Counter
          decreaseProduct={decreaseProduct}
          increaseProduct={increaseProduct}
          quantity={product.quantity}
        />

        <button
          aria-label="Remove Product"
          className="absolute z-10 bottom-0 right-0 size-8 grid place-items-center rounded-full text-text bg-transparent cursor-pointer transition-colors duration-300 ease-in-out hover:text-text-3 hover:bg-bg-3"
          onClick={deleteProduct}
        >
          <BsTrash size={16} />
        </button>
      </div>
    </article>
  );
};

export default Card;
