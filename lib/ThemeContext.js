"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storageKey = "theme";
  const isSystemDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useState(isSystemDark);

  useEffect(() => {
    // Check if we're in the browser (client-side)
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem(storageKey);
      if (savedTheme !== null) {
        setIsDark(JSON.parse(savedTheme));
      } else {
        localStorage.setItem(storageKey, JSON.stringify(isDark));
      }
    }
  }, [isDark]);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(isDark));
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
