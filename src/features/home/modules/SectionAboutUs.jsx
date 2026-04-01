import Kitchen from "../../../assets/images/about-kitchen.webp";
import Burger from "../../../assets/images/about-burger.webp";
import Eating from "../../../assets/images/about-eating.webp";

import { Container, SubTitle } from "../../../components/ui";

const SectionAboutUs = () => {
  return (
    <Container>
      <SubTitle text={"About Us"} />

      <article className="grid grid-cols-12 gap-4">
        <div className="col-span-full rounded-sm overflow-hidden md:col-span-4">
          <img
            src={Kitchen}
            alt="Chefs preparing artisanal hamburgers in the Chest Bread kitchen"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-full md:col-span-8 flex flex-col gap-4 text-lg text-text font-normal text-pretty">
          <div className="grid grid-cols-8 gap-4">
            <p className="col-span-full lg:col-span-4">
              At <strong className="font-normal">Chest Bread</strong>, we're
              passionate about offering you the best burgers, fries, and hot
              dogs, prepared with fresh, high-quality ingredients. Our goal is
              to provide you with a delicious experience in every bite, in a
              welcoming atmosphere, and with exceptional service. Come
              experience the real flavor!
            </p>
            <div className="hidden overflow-hidden rounded-sm lg:block lg:col-span-4 xl:h-42">
              <img
                src={Eating}
                alt="Classic Chest Bread Burger with fresh ingredients"
                width={200}
                height={200}
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 gap-4">
            <div className="hidden sm:block sm:col-span-2 lg:col-span-1">
              <img
                src={Burger}
                alt="Classic Chest Bread Burger with fresh ingredients"
                width={200}
                height={200}
                loading="lazy"
                className="w-full h-full"
              />
            </div>
            <p className="col-span-full sm:col-span-6 lg:col-span-7">
              We believe that authentic flavor comes from tradition and
              meticulous care. Every order is carefully prepared on the spot to
              guarantee maximum freshness and taste. Come and discover our
              unique secret recipes and find out why we have become the favorite
              local spot for true food lovers and families looking for quality.
            </p>
          </div>

          <p>
            Experience the perfect harmony between modern taste and community
            spirit. Our friendly staff is always ready to serve you the best
            meal in town with a smile. Join us today at Chest Bread for an
            unforgettable dining journey that will definitely keep you coming
            back for more of our signature dishes and cozy vibes.
          </p>
        </div>
      </article>
    </Container>
  );
};

export default SectionAboutUs;
