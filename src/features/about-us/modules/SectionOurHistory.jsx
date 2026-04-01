import Kitchen from "../../../assets/images/about-kitchen.webp";

import { Container, SubTitle } from "../../../components/ui";

const SectionOurHistory = () => {
  return (
    <Container>
      <SubTitle text={"Our History"} />

      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <h3 className="text-2xl font-bold text-text leading-[1.2] uppercase lg:hidden">
          From a truck to your city.
        </h3>

        <div className="w-full rounded-sm overflow-hidden">
          <img
            src={Kitchen}
            alt="Chefs preparing artisanal hamburgers in the Chest Bread kitchen"
            width={200}
            height={200}
            loading="lazy"
            className="w-full aspect-video object-cover object-top"
          />
        </div>

        <div className="flex flex-col gap-4 text-lg font-base text-text text-pretty">
          <h3 className="hidden lg:block lg:text-2xl lg:font-bold lg:text-text leading-[1.2] lg:uppercase">
            From a truck to your city.
          </h3>
          <p>
            It started with a single food truck on St. Lima Street. One grill,
            two cooks, and a line around the block every Friday night.
          </p>
          <p className="hidden lg:block">
            Five years later, Chest-Bread has grown into Toronto's most-loved
            fast food destination still using the same homemade sauces and
            fresh-ground beef we started with.
          </p>
          <p className="hidden lg:block">
            We don't cut corners. We don't freeze our patties. We don't
            apologize for making you wait two extra minutes for real food.
          </p>
          <p className="lg:hidden">
            Five years later, we're still using the same homemade sauces and
            fresh-ground beef we started with. No shortcuts. Ever.
          </p>
        </div>
      </article>
    </Container>
  );
};

export default SectionOurHistory;
