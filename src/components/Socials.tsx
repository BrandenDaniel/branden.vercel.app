import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className="socials">
      <Link href="https://github.com/BrandenDaniel" target="_blank">
        <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/brandendaniel/">
        <FaLinkedinIn />
      </Link>
      <Link href="mailto:brandendanielng@gmail.com">
        <MdAlternateEmail />
      </Link>
    </div>
  );
};

export default Socials;
