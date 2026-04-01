import { NavLink } from "react-router-dom";

import LogoImage from "../../assets/images/logo-2.svg";

const Logo = () => {
  return (
    <div>
      <NavLink to={"/"} className="block w-18 h-12">
        <img
          src={LogoImage}
          alt="Chest-Bread — Fast Food"
          width={32}
          height={32}
          loading="lazy"
          className="w-full h-full"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
