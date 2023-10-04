import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Navbar from "./Navbar";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
} & ComponentProps<"header">;

const Header = ({
  darkMode,
  toggleDarkMode,
  className,
  children,
  ...restProps
}: Props) => {
  return (
    <header className={twMerge("", className)} {...restProps}>
      <Navbar
        darkMode={darkMode as boolean}
        toggleDarkMode={toggleDarkMode as () => void}
      />
      {children}
    </header>
  );
};

export default Header;
