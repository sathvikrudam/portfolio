import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = localStorage.getItem("theme") || "light";

if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
