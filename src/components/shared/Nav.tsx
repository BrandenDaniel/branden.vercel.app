"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isScrollActive, setIsScrollActive] = useState(false);

  const pathname = usePathname();

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setIsScrollActive(true);
    } else {
      setIsScrollActive(false);
    }
  };

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  return (
    <>
      <nav
        className={`nav container nav--scroll ${
          isScrollActive ? "nav--scroll-active" : ""
        }`}
      >
        <Link href="/" className="nav__home" tabIndex={isScrollActive ? 0 : -1}>
          bn.
        </Link>

        <ul className="nav__links">
          <li>
            <Link
              href="/projects"
              tabIndex={isScrollActive ? 0 : -1}
              className={pathname == "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              tabIndex={isScrollActive ? 0 : -1}
              className={pathname.includes("work") ? "active" : ""}
            >
              Work
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="nav container">
        <Link href="/" className="nav__home" tabIndex={isScrollActive ? -1 : 0}>
          bn.
        </Link>

        <ul className="nav__links">
          <li>
            <Link
              href="/projects"
              tabIndex={isScrollActive ? -1 : 0}
              className={pathname == "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              tabIndex={isScrollActive ? -1 : 0}
              className={pathname.includes("work") ? "active" : ""}
            >
              Work
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
