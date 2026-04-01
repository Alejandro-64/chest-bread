const Card = ({ ...card }) => {
  return (
    <article
      key={card.id}
      className="p-8 rounded-sm flex flex-col gap-4 bg-bg-2"
    >
      <span className="text-5xl font-black leading-none text-text-3">
        {card.span}
      </span>

      <h3 className="text-2xl font-bold leading-none text-text-3">
        {card.title}
      </h3>

      <div className="text-base text-text-3 font-base">
        <p className="hidden md:block">{card.description.desktop}</p>
        <p className="md:hidden">{card.description.mobile}</p>
      </div>
    </article>
  );
};

export default Card;
