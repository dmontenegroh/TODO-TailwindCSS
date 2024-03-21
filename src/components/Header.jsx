import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

// const initialStateDarkMode = localStorage.getItem("theme") === 'dark' ? true : false; // <- forma 1
const initialStateDarkMode = localStorage.getItem("theme") === "dark"; // <- forma 2

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  // const refHeader = useRef(null); // -> siempre debe partir en null un metodo para no utilizar el document.documentElement

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      // console.log(refHeader.current);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header
      className="container mx-auto px-4 pt-8 "
      // ref={refHeader}
    >
      <div className="flex justify-between">
        <h1 className="font-mono text-2xl font-semibold uppercase tracking-[0.3em] text-white">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
