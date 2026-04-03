import React from "react";

function Banner() {
  return (
    <header className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Stranger Things</h1>

        <div className="banner-buttons">
          <button className="banner-button">▶ Play</button>
          <button className="banner-button info">ℹ More Info</button>
        </div>

        <p className="banner-description">
          When a young boy disappears, his mother, a police chief,
          and his friends confront terrifying supernatural forces.
        </p>
      </div>

      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;