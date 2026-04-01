import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layout";
import { NotFoundPage } from "../features/not-found";

import { AboutUsPage } from "../features/about-us";
import { CartPage } from "../features/cart";
import { MenuPage } from "../features/menu";
import { HomePage } from "../features/home";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default AppRouter;
