import { Link } from "react-router-dom";
import { Container } from "./ui";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-360 mx-auto">
      <Container>
        <div className="pt-8 border-t-2 border-border grid grid-cols-1 [grid-template-areas:'box2'_'box1'_'box3'] gap-8 text-text-2 md:grid-cols-3 md:[grid-template-areas:'box1_box2_box3']">
          <ul className="[grid-area:box1] flex flex-col items-center gap-4 md:items-start">
            <li className="hover:underline">
              <Link to={"/"}>Legal Notice</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/"}>Privacy policy</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/"}>Terms of Service</Link>
            </li>
          </ul>

          <div className="[grid-area:box2] flex flex-col items-center gap-8">
            <p className="text-2xl font-bold uppercase leading-none">
              Follow Us
            </p>
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  title="Instagram"
                >
                  <BsInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" title="Facebook">
                  <BsFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" title="TikTok">
                  <BsTiktok size={24} />
                </a>
              </li>
            </ul>
          </div>

          <ul className="[grid-area:box3] flex flex-col items-center gap-4 md:items-end">
            <li className="hover:underline">
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="text-xs font-normal leading-none text-center text-text-2">
          <p>
            © {new Date().getFullYear()} CRIM PAYS STUDIO. ALL RIGHTS RESERVED
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
