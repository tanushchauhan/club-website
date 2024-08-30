import "../styles/About.css";
import AboutNavbar from "../components/AboutNavbar";

function About() {
  return (
    <div>
      <div className="about-hero">
        <div className="m-auto transition ease-in-out">
          <h1 className="text-[5vh] text-white">About Us</h1>
          <h2 className="text-[3vh] text-white font-['Red_Hat_Display_Light']">
            Learn more about us!
          </h2>
        </div>
      </div>
      <AboutNavbar />
    </div>
  );
}

export default About;
