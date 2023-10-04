import Router from "./router/Router";
import { darkModePreference } from "./scripts/darkModePreference";

function App() {
  darkModePreference();
  return <Router />;
}

export default App;
