import React from "react";
import "../styles/Home.css";
import HeroImg from "../assets/Home/csc-hero-img.png";
import Collab from "../assets/Home/collab.webp";
import Conferences from "../assets/Home/conferences.png";
import Competitions from "../assets/Home/competitions.png";
import Volunteering from "../assets/Home/volunteering.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
import {
  Sriram,
  Rohan,
  Nandhan,
  Sai,
  Tuhina,
  Shreya,
  Tanush,
  Sudiksa,
  Arpit,
  Naavya,
} from "../assets/About/officers";

function Home() {
  const slides = [Sriram];

  console.log(slides);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <>
        <div className="hero flex flex-col">
          <img className="hero-img" src={HeroImg}></img>
          <TypeAnimation
            sequence={["Computer Science for Community", 2000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "4vw",
              fontFamily: "Red Hat Display Bold",
              color: "#3D9BE9",
              marginTop: "3vh",
            }}
          />
          {/* <h1 className="hero-txt" >Computer Science For Community.</h1> */}
          <Link className="link" to="/chapters">
            <button className="involve-btn">Get Involved</button>
          </Link>
        </div>
        <div className="about-us">
          <div className="about-us-box rounded-xl shadow-2xl shadow-[#1c5fb8]">
            <div className="about-info">
              <h1 className="about-header inline-block bg-gradient-to-r from-[#3b9aff] to-[#24a4ff] bg-clip-text text-transparent">
                About Us
              </h1>
              <h2 className="about-subheader font-bold">
                Learn about our vision and community.
              </h2>
              <h3 className="about-text font-bold">
                Get to know about the type of club we are and the members you
                are going to be working with.
              </h3>
              <Link className="link" to="/about">
                <button className="about-btn">Go Now</button>
              </Link>
            </div>
            <img className="about-img" src={Collab}></img>
          </div>
        </div>
        <div className="chapters">
          <div className="chapters-box rounded-xl shadow-2xl shadow-[#0c9207] ">
            <h1 className="chapters-head inline-block bg-gradient-to-r from-[#16CF10] to-[#02ba39] bg-clip-text text-transparent">
              Chapters
            </h1>
            <div className="line"></div>
            <p className="chapters-ptext">
              Take initiative and start a CSC chapter at your school today and
              explore the chapters already established!
            </p>
            <Link className="link" to="/chapters">
              <button className="chapters-btn">Start A Chapter</button>
            </Link>
            <Link className="link" to="/chapters">
              <button className="chapters-btn">Explore Chapters</button>
            </Link>
          </div>
        </div>
      </>
    </motion.div>
  );
}

export default Home;
