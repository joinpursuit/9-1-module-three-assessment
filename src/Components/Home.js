import React from "react";
import "./Home.css";
import ghibli from "../ghibli_scenes.mp4";

export default function Home() {
  return (
    <div className="home">
      <div className="contains_vid">
        <video src={ghibli} autoPlay loop muted />
      </div>
      <div className="home_title">
        <h1>Welcome to GhibliApp</h1>
      </div>
    </div>
  );
}
