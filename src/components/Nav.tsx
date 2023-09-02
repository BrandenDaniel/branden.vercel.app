import Link from "next/link";
import React from "react";
import logo from "../images/bn-logo.png";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="nav">
      <Link href="/" className="nav__home">
        {/* <Image src={logo} alt="Branden ng home" /> */}
        BN.
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
