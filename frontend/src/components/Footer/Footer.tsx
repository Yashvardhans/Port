import React from "react";
import "./Footer.css";

interface FooterProps {
  footerClass?: string;
}

const Footer: React.FC<FooterProps> = ({ footerClass }) => {
  return (
    <div className={`footer ${footerClass || ''}`}>
      <a href="mailto:yashvardhans016@gmail.com">yash05vardhans@gmail.com</a>
    </div>
  );
};

export default Footer;