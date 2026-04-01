import { Container } from "../../../components/ui";
import { SubTitle } from "../../../components/ui";
import { Card } from "../components";

const contentCard = [
  {
    id: 1,
    span: "01",
    title: "Fresh, always",
    description: {
      desktop:
        "No freezers for our patties. Every burger starts with beef ground fresh that morning.",
      mobile: "Beef ground fresh every morning. No freezers, no compromise.",
    },
  },
  {
    id: 2,
    span: "02",
    title: "Real ingredients",
    description: {
      desktop:
        "We source locally. Our buns are baked in-house. Our sauces are made from scratch daily.",
      mobile: "Locally sourced, in-house baked buns, scratch-made sauces.",
    },
  },
  {
    id: 3,
    span: "03",
    title: "No shortcuts",
    description: {
      desktop:
        "If it takes longer to make it right, we take longer. Quality over speed, every single time.",
      mobile: "Quality over speed, every single time.",
    },
  },
];

const SectionCards = () => {
  return (
    <Container>
      <SubTitle text={"Build Different"} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {contentCard.map((card) => (
          <div key={card.id}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SectionCards;
