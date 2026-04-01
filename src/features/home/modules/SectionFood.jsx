import { Link } from "react-router-dom";

import Burger from "../../../assets/images/home-burger.webp";
import HotDog from "../../../assets/images/home-hot-dog.webp";
import Drink from "../../../assets/images/home-drink.webp";
import Fries from "../../../assets/images/home-fries.webp";

import { Container, SubTitle } from "../../../components/ui";
import { Card } from "../components";

const SectionFood = () => {
  return (
    <Container>
      <SubTitle text={"Your Food"} />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <Link to={"menu"}>
          <Card src={Burger} text={"Burgers"} />
        </Link>

        <Link to={"menu"}>
          <Card src={HotDog} text={"Hot Dog"} />
        </Link>

        <Link to={"menu"}>
          <Card src={Drink} text={"Drinks"} />
        </Link>

        <Link to={"menu"}>
          <Card src={Fries} text={"Fries"} />
        </Link>
      </div>
    </Container>
  );
};

export default SectionFood;
