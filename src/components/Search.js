import React, { useState } from "react";
import Logo from "./image/logo.png";
import Avatar from "./image/avatar.png";

const Search = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);

  const onkeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
      document.querySelector('.noResult').innerHTML = '';
    }
  };

  return (
    <>
      <div className="header">
        <a href="/">
          <img src={Logo} alt="logo" className="LogoBrand" />
        </a>
        <input
          className="input_search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={onkeyPress}
        />

        <div className="icons">
          <div className="functions">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{
                "pointerEvents": "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{
                "pointerEvents": "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{
                "pointerEvents": "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </div>
          <a href="/">
            <img src={Avatar} alt="Profile" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Search;
