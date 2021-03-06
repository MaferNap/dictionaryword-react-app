import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      ©2021
      <span className="code">
        <a href="https://github.com/MaferNap/dictionaryword-react-app">
          <strong> Open-source code </strong>{" "}
        </a>{" "}
      </span>
      built by{" "}
      <span className="profile">
        {" "}
        <a href="https://github.com/MaferNap"> Mafer Navarrete </a>
      </span>
    </div>
  );
}
