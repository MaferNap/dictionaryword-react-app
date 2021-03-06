import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      ©2021
      <span className="code">
        <strong> Open-source code </strong>{" "}
      </span>
      built by{" "}
      <span className="profile">
        {" "}
        <a href="https://github.com/MaferNap"> Mafer Navarrete </a>
      </span>
    </div>
  );
}
