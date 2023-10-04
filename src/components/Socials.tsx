import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

const Socials = () => {
  return (
    <div className="socials">
      <Link
        href="https://github.com/BrandenDaniel"
        target="_blank"
        aria-label="Github external link"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/brandendaniel/"
        aria-label="Linkedin external link"
      >
        <SlSocialLinkedin />
      </Link>
      <Link
        href="mailto:brandendanielng@gmail.com"
        aria-label="External mail to brandendanielng@gmail.com"
      >
        <MdAlternateEmail />
      </Link>
    </div>
  );
};

export default Socials;
