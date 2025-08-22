import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="rounded-xl p-2 border-1  text-[var(--color-text)] hover:text-[var(--color-main)]"
      aria-label="Сменить тему сайта"
    >
      {isDark ? (
        <BsSun />
      ) : (
        <BsMoon />
      )}
    </button>
  );
};

export default ThemeToggle;
