import Image from "next/image";
import React from "react";
import profilePic from "../images/profile.png";
import Socials from "./Socials";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner__bio">
        <h1>hey, I'm branden 👋</h1>
        <p>I'm a frontend developer, personal finance nerd, and minimalist.</p>
        <div className="banner__links">
          <Socials />
          <a href="/" download>
            download cv.
          </a>
        </div>
      </div>
      <div className="banner__picture">
        <Image src={profilePic} alt="Profile picture of me" quality={100} />
      </div>
    </header>
  );
};

export default Banner;
