import { useState, createContext } from 'react';

// 1. init context
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // Init state
  const [theme, setTheme] = useState("dark");

  // Function to change theme
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
}
