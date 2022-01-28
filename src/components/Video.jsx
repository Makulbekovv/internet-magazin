import React from "react";
import "../styles/Video.css";
const Video = () => {
  return (
    <div id="video2">
      <video autoPlay loop muted id="video">
        <source
          src="https://content.rolex.com/dam/homepage/hss/watches/classic-watches/oyster-perpetual/oyster-perpetual-41/homepage-hss-oyster-perpetual-41-m124300-0001.mp4"
          type="video/mp4"
        ></source>
      </video>
      <h2 className="area">Интернет-магазин наручных часов в Бишкеке</h2>
    </div>
  );
};

export default Video;
