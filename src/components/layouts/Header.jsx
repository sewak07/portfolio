import { useEffect, useState } from "react";

import Navbar from "./Navbar.jsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-0 top-0 z-[1000]
        flex w-full items-center justify-between
        box-border px-5 py-[18px]
        transition-all duration-300 ease-in-out
        md:px-8 md:py-6
        ${scrolled
          ? "border-b-2 border-gray-200 bg-white/70 backdrop-blur-[10px]"
          : "border-b-2 border-transparent bg-white/0 backdrop-blur-none"
        }
      `}
    >
      {/* Logo */}
      <div className="header-logo">
        <h2 className="ml-0 text-[22px] font-bold tracking-[-0.5px] md:ml-[100px] md:text-2xl">
          <a
            href="/"
            className="text-inherit no-underline after:text-orange-500 after:content-['.']"
          >
            Sewak
          </a>
        </h2>
      </div>

      {/* Navigation */}
      <Navbar />
    </header>
  );
}