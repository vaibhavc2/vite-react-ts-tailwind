import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import ToggleDarkModeButton from "./ToggleDarkModeButton";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
} & ComponentProps<"nav">;

const Navbar = ({
  className,
  children,
  darkMode,
  toggleDarkMode,
  ...restProps
}: Props) => {
  return (
    <nav
      className={twMerge("flex items-center justify-around", className)}
      {...restProps}
    >
      <div className="flex items-center justify-start">
        <h1 className="m-3 text-center font-serif text-3xl font-bold">
          Template: I am a Navbar
        </h1>
      </div>

      <div className="flex items-center justify-end">
        <ToggleDarkModeButton
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
