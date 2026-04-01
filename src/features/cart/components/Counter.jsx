import { BsDash, BsPlus } from "react-icons/bs";

const Counter = ({ decreaseProduct, increaseProduct, quantity }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="size-6 rounded-full grid place-items-center border border-border text-text-2 bg-transparent cursor-pointer transition-colors duration-300 ease-in-out hover:bg-bg-2 hover:text-text-3"
        onClick={decreaseProduct}
        disabled={quantity <= 1}
      >
        <BsDash size={16} />
      </button>

      <span className="w-8 text-center">{quantity}</span>

      <button
        className="size-6 rounded-full grid place-items-center border border-border text-text-2 bg-transparent cursor-pointer transition-colors duration-300 ease-in-out hover:bg-bg-2 hover:text-text-3"
        onClick={increaseProduct}
      >
        <BsPlus size={16} />
      </button>
    </div>
  );
};

export default Counter;
