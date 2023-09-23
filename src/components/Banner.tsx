"use client";

import Image from "next/image";
import profilePic from "../assets/images/profile.png";
import Socials from "./Socials";
import Link from "next/link";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const Banner = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <header className="banner">
      <div className="banner__bio">
        <h1>{`hey, I'm branden 👋`}</h1>
        <p>
          {`I'm a frontend developer, personal finance nerd, and minimalist.`}{" "}
          {!showMore && (
            <button onClick={() => setShowMore(true)}>
              <FiMoreHorizontal />
            </button>
          )}
        </p>

        {showMore && (
          <>
            <p>
              {
                "I enjoy turning complex challenges into intuitive products. This portfolio is a collection of web apps and sites I've personally built."
              }
            </p>
            <p>
              My current focus is{" "}
              <Link href="https://react.dev/" target="_blank">
                <FaReact />
                React
              </Link>
              ,{" "}
              <Link href="https://nextjs.org/" target="_blank">
                <SiNextdotjs /> Next.js
              </Link>
              , and{" "}
              <Link href="https://www.typescriptlang.org/" target="_blank">
                <SiTypescript />
                TypeScript
              </Link>
              .
            </p>
          </>
        )}

        <div className="banner__links">
          <Socials />
          <Link href="/docs/CV.pdf" target="_blank" download>
            download cv.
          </Link>
        </div>
      </div>
      <div className="banner__picture">
        <Image src={profilePic} alt="Profile picture of me" quality={100} />
      </div>
    </header>
  );
};

export default Banner;
