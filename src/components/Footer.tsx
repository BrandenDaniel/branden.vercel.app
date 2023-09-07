import React from "react";

const Footer = () => {
  let currentDate = new Date();

  return (
    <footer className="footer container">
      <p>
        bn. <span>{currentDate.getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
