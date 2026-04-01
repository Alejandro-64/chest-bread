import { Link, NavLink } from "react-router-dom";
import { Logo } from "./ui";
import { BsCart, BsList, BsXLg } from "react-icons/bs";
import { useState } from "react";
import { selectTotalQuantity, useCartStore } from "../store/cart.store";

const listItem = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "About Us",
    to: "/about-us",
  },
  {
    id: 3,
    label: "Menu",
    to: "/menu",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useCartStore(selectTotalQuantity);

  const handleIsOpen = () => setIsOpen(true);

  return (
    <nav className="relative max-w-360 mx-auto p-4 flex items-center justify-between">
      <button
        className="text-text-2 cursor-pointer transition-colors duration-300 ease-in-out lg:hidden"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={handleIsOpen}
      >
        <BsList size={24} />
      </button>

      <Logo />

      <div className="hidden lg:grid lg:place-items-center lg:py-4 lg:px-20 lg:rounded-sm lg:bg-bg-2">
        <ul className="flex items-center gap-8 text-lg font-bold uppercase leading-none text-text-3">
          {listItem.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.to}
                className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-bg after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <Link to={"cart"} className="relative text-text-2">
        <BsCart size={24} />

        {totalQuantity > 0 && (
          <span className="absolute z-10 -top-1/2 -right-2 size-6 grid place-items-center rounded-full text-sm text-text-3 bg-bg-2">
            {totalQuantity}
          </span>
        )}
      </Link>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        inert={!isOpen}
        className={`fixed inset-0 bg-bg-2 z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold uppercase text-text-3">
          <button
            aria-label="Close menu"
            className="absolute z-10 top-6 left-4 cursor-pointer text-text-3"
            onClick={() => setIsOpen(false)}
          >
            <BsXLg size={24} />
          </button>

          {listItem.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-bg after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
