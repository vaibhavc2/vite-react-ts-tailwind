import { ComponentProps } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
} & ComponentProps<"button">;

const ToggleDarkModeButton = ({
  className,
  children,
  darkMode,
  toggleDarkMode,
  ...restProps
}: Props) => {
  return (
    <button
      className={twMerge("rounded-lg border-2 border-gray-500 p-3", className)}
      onClick={toggleDarkMode}
      type="button"
      {...restProps}
    >
      {darkMode ? BsMoonStarsFill() : BsSunFill()}
    </button>
  );
};

export default ToggleDarkModeButton;
