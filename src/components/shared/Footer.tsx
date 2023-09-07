import Link from "next/link";
import React from "react";

const Footer = () => {
  let currentDate = new Date();

  return (
    <footer className="footer container">
      <Link href="/">
        bn. <span>{currentDate.getFullYear()}</span>
      </Link>
    </footer>
  );
};

export default Footer;
