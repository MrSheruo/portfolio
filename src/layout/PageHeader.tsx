import { Menu, Moon, Sun, X } from "lucide-react";
import Button from "../components/Button";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { links } from "../lib/consts";
import { useTheme } from "../context/themeContext";

export default function PageHeader() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("light");
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");

    setTheme((mode) => (mode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <motion.div
        className="fixed top-0 right-0 left-0 origin-[0] h-2 bg-warning z-30"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="fixed top-0 py-4 left-0 right-0 bg-background border-b-4 shadow-md border-secondary z-20 mx-auto hidden md:flex justify-center items-center flex-wrap gap-4">
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            <Button variant={link.name === "Contact Me" ? "default" : "link"}>
              {link.name}
            </Button>
          </a>
        ))}
      </nav>
      <header className=" p-4 md:hidden">
        {/* nav on mobile */}

        <motion.nav
          style={{ x: open ? 0 : "100%" }}
          className={`flex flex-col fixed top-0 right-0 bottom-0 border-secondary bg-background/50 border-l-4 pr-8 pl-4 pt-4 z-50 transition-transform duration-700 backdrop-blur-[4px]`}
        >
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              <Button variant={"link"}>{link.name}</Button>
            </a>
          ))}
        </motion.nav>
        <div className="fixed top-4 left-4 z-50 flex gap-4">
          <Button type="button" onClick={() => setOpen(!open)} size={"icon"}>
            {open ? <X /> : <Menu />}
          </Button>
          <Button size={"icon"} onClick={toggleTheme}>
            {mode === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </header>
      <Button
        size={"icon"}
        type="button"
        title="Toggle theme"
        className="fixed bottom-8 right-8 z-50 hidden md:flex"
        onClick={toggleTheme}
      >
        {mode === "light" ? <Moon /> : <Sun />}
      </Button>
    </>
  );
}
