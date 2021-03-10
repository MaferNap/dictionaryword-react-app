import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      ©2021
      <span className="code">
        <a
          href="https://github.com/MaferNap/dictionaryword-react-app"
          target="_blank"
          rel="noreferrer"
        >
          <strong> Open-source code </strong>{" "}
        </a>{" "}
      </span>
      built by{" "}
      <span className="profile">
        {" "}
        <a href="https://github.com/MaferNap" target="_blank" rel="noreferrer">
          {" "}
          Mafer Navarrete{" "}
        </a>
      </span>
    </div>
  );
}
