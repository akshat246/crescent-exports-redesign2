import { createContext } from "react";

const initialState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeContext = createContext(initialState);



export default ThemeContext;