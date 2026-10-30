import { createContext, useState } from "react";

//task 5: share selected theme
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  //store current theme
  const [theme, setTheme] = useState("light");

  //switch between light and dark
  function toggleTheme() {
    setTheme((oldTheme) =>
      oldTheme === "light" ? "dark" : "light"
    );
  }

  //share theme and toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}