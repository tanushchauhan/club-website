import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Chapters.css";
import HeroImg from "../assets/Chapters/startChapterBg.webp";
import { TypeAnimation } from "react-type-animation";

function Chapters() {
  // TODO: get current chapters on there

  let ref = useRef();

  function scroll() {
    console.log("hi");
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    // TODO: debug footer
    <div className="chaptersPage">
      <div className="chapter-hero">
        <div className="hero-box">
          <div className="text-box">
            <h1>Start a Chapter</h1>
            <h3>Ignite passion among coders in your community today</h3>
            <div className="button-box">
              <button className="contact-btn" onClick={() => scroll()}>
                Benefits
              </button>
              <Link className="link" to="/contact-us">
                <button className="contact-btn">Start Now!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="why-box">
        <div className="why-information" ref={ref}>
          <h2 className="ready-txt">Ready to start a chapter?</h2>
          <Link className="link" to="/contact-us">
            <button className="start-btn">Click me!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Chapters;
