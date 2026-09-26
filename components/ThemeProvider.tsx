"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const themeListeners = new Set<() => void>();

function subscribe(callback: () => void) {
  themeListeners.add(callback);

  return () => {
    themeListeners.delete(callback);
  };
}

function getTheme() {
  if (typeof document === "undefined") {
    return true;
  }

  return document.documentElement.classList.contains("dark");
}

function getServerTheme() {
  return true;
}

function notifyThemeChange() {
  themeListeners.forEach((listener) => listener());
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useSyncExternalStore(
    subscribe,
    getTheme,
    getServerTheme
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark = savedTheme !== "light";

    document.documentElement.classList.toggle("dark", isDark);

    notifyThemeChange();
  }, []);

  const toggleTheme = () => {
    const newMode = !getTheme();

    document.documentElement.classList.toggle("dark", newMode);

    localStorage.setItem(
      "theme",
      newMode ? "dark" : "light"
    );

    notifyThemeChange();
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}