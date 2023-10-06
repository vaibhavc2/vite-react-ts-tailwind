import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import useDarkMode from "../hooks/useDarkMode";

const Layout = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header
        darkMode={darkMode as boolean}
        toggleDarkMode={toggleDarkMode as () => void}
      />

      {/* From React Router Dom */}
      <Outlet />

      <Footer className="text-center" />
    </div>
  );
};

export default Layout;
