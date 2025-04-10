import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function Toggle() {
  const [toggleMode, setToggleMode] = useState(false);

  function toggleTheme() {
    setToggleMode(!toggleMode);

    const theme = localStorage.getItem("theme") || "dark";

    if (theme == "dark") {
      localStorage.setItem("theme", "light");
      document.body.classList.replace("dark", "light");
    } else {
      localStorage.setItem("theme", "dark");
      document.body.classList.replace("light", "dark");
    }
  }

  return (
    <div className="z-20 w-5 h-5 absolute right-0 m-4">
      {toggleMode ? (
        <Sun className="relative text-vermelho" onClick={() => toggleTheme()} />
      ) : (
        <Moon className="relative text-rosinha" onClick={() => toggleTheme()} />
      )}
    </div>
  );
}
