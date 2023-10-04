import { Dispatch, SetStateAction } from "react";

export const toggleDarkModeSettings = (
  setDarkMode: Dispatch<SetStateAction<boolean>>
) => {
  setDarkMode((prev) => !prev);
  // document.getElementsByTagName("body")[0]?.classList.toggle("dark");
  document.documentElement.classList.toggle("dark");
};
