import ThemeContext from "./themeContext";
import { useEffect, useState } from "react";
import Proptype from "prop-types";

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
  }) {
    const [theme, setTheme] = useState(
      () => localStorage.getItem(storageKey) || defaultTheme
    );
  
    useEffect(() => {
      const root = window.document.documentElement;
  
      root.classList.remove("light", "dark");
  
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
  
        root.classList.add(systemTheme);
        return;
      }
  
      root.classList.add(theme);
    }, [theme]);
  
    const value = {
      theme,
      setTheme: (theme) => {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      },
    };
  
    return (
      <ThemeContext.Provider {...props} value={value}>
        {children}
      </ThemeContext.Provider>
    );
  }

ThemeProvider.propTypes = {
    children: Proptype.node.isRequired,
    defaultTheme: Proptype.string,
    storageKey: Proptype.string,
};