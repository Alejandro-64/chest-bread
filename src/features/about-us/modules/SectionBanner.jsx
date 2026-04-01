import { Link } from "react-router-dom";

const SectionBanner = () => {
  return (
    <section className="h-screen px-4 flex items-center justify-center">
      <article className="flex flex-col items-center gap-20">
        <h2 className="text-5xl font-black leading-[1.2] text-center uppercase text-text-2 md:text-8xl lg:text-9xl">
          Your next <br /> favorite meal <br /> is one click away.
        </h2>

        <Link
          to={"/menu"}
          className="h-12 px-8 grid place-items-center rounded-sm text-lg font-bold leading-none uppercase bg-bg-2 text-text-3"
        >
          Order Now
        </Link>
      </article>
    </section>
  );
};

export default SectionBanner;
