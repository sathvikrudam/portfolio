import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
  document.documentElement.classList.add("dark");
  setDark(true);
} else {
  document.documentElement.classList.remove("dark");
  setDark(false);
}
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 border border-border rounded-full hover:bg-muted transition"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
