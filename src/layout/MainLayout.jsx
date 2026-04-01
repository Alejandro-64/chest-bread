import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Toaster position="top-center" reverseOrder={false} />

      <header>
        <Navbar />
      </header>

      <main className="grow">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
