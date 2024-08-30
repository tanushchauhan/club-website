import Event1 from "../assets/Events/event1.webp";

function Events() {
  return (
    <div>
      <h1 className="m-[4vh] inline-block bg-gradient-to-r from-[#3b9aff] to-[#16CF10] bg-clip-text text-transparent text-[4vh] font-[Red_Hat_Display_Bold] ">
        See What We're Up To.
      </h1>

      {/* cont for all events */}
      <div className="m-auto">
        <div className="m-auto rounded-lg shadow-2xl shadow-[#48abe0] w-[75vw] lg:w-[50vw] h-fit xs:p-5 p-[4vh] bg-gradient-to-t from-[#3b9aff] to-[#38afff] bg-opacity-20">
          <h1 className="font-[Red_Hat_Display_Bold] text-white text-[3vh]">
            Raising Awareness About Neurodiversity with Our First Competition
          </h1>
          <h2 className="mb-[2vh] font-[Red_Hat_Display_Light] text-white text-[2vh]">
            Feb 3-10, 2024
          </h2>
          <img
            src={Event1}
            className="rounded shadow-2xl shadow-[#1c5fb8] m-auto w-[50%] mb-[3vh]"
          />
          <p className="text-white font-bold">
            For a full week, CSC held a two-part competition as part of a
            collaboration with local organization Art4Neurodiversity, a
            student-led organization focused on increasing awareness about
            neurodiversity. The first part of the competition tested
            competitors' logical reasoning with several programming problems,
            while the second part tested their innovation with a
            neurodiversity-themed hackathon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;
