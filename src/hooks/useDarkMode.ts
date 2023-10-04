import { useCallback, useState } from "react";
import { toggleDarkModeSettings } from "../functions/toggleDarkModeSettings";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const darkModeSettingsSetter = () => {
    toggleDarkModeSettings(setDarkMode);
  };

  const toggleDarkMode = useCallback(darkModeSettingsSetter, [
    darkMode,
    setDarkMode
  ]);

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
