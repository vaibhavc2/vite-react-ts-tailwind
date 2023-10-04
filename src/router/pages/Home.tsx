import { Fragment } from "react";
import Navbar from "../../components/header/Navbar";
import useDarkMode from "../../hooks/useDarkMode";

const Home = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <Fragment>
      <Navbar
        darkMode={darkMode as boolean}
        toggleDarkMode={toggleDarkMode as () => void}
      />
    </Fragment>
  );
};

export default Home;
