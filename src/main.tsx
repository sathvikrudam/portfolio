import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const savedTheme = localStorage.getItem("theme");

// If user never selected theme → force dark
if (!savedTheme) {
  localStorage.setItem("theme", "dark");
  document.documentElement.classList.add("dark");
} 
else if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} 
else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
