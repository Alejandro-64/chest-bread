import { BsCircleFill } from "react-icons/bs";

const Card = ({ src, text }) => {
  const items = Array.from({ length: 8 });

  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img
        src={src}
        alt={`${text} category`}
        width={400}
        height={400}
        loading="lazy"
        className="w-full h-full aspect-square object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
      />

      <div
        className={`absolute z-10 inset-0 flex items-center bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out group-hover:opacity-100`}
        aria-hidden="true"
      >
        <ul className="w-max flex items-center text-text-3 slideProduct">
          {items.map((_, index) => (
            <li
              key={`${text}-${index}`}
              className="shrink-0 flex items-center gap-4 mr-4"
            >
              <span className="text-2xl font-bold uppercase leading-none whitespace-nowrap">
                {text}
              </span>
              <BsCircleFill size={12} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
