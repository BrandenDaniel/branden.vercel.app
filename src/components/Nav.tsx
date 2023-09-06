"use client";

import Link from "next/link";

const Nav = () => {
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.querySelector("nav")!.classList.add("nav--scroll-active");
    } else {
      document.querySelector("nav")!.classList.remove("nav--scroll-active");
    }
  };

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  return (
    <nav className="nav container">
      <Link href="/" className="nav__home">
        bn.
      </Link>

      <ul className="nav__links">
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
