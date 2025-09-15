import { Moon, Sun,  } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utlis";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
            document.documentElement.classList.add("dark");

        
    }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
    }
  }
  return (
    <div></div>
    
  );
};

export default ThemeToggle;