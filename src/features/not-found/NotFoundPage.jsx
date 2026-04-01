import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Seo } from "../../components/ui";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404 — Page Not Found" />

      <div className="h-screen bg-bg">
        <div className="max-w-360 mx-auto h-full pt-40 pb-4 px-4">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-black leading-[1.2] text-text-2 md:text-8xl">
              404 <br />
              Not Found
            </h1>

            <NavLink
              to={"/"}
              className="w-max flex items-center gap-2 text-lg leading-none text-text-2 hover:underline"
            >
              <BsArrowLeft size={16} /> Go to home
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
