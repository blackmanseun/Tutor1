import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import "./Css/footer.style.scss";

function Footer() {
  return (
    <div className="footer">
        <div>
        <AiOutlineCopyrightCircle />
        </div>
        <span>
        Copyright 2021
        </span>
    </div>
  );
}

export default Footer;
