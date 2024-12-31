import dp from "../image/dp2.jpg";
import cv from "../cv/cv.jpg";
import { GrDocumentDownload } from "react-icons/gr";

const Hero = () => {
  return (
    <div id="about" className="h-[23rem] bg-[#003329] lg:h-[26rem]">
      <div className="flex flex-row-reverse md:flex-row">
        <div>
          <img
            src={dp}
            alt="display photo"
            className="w-[10rem] mt-[4rem] rounded-full mr-10 md:ml-10 md:w-[13rem] lg:w-[16rem]"
          />
        </div>
        <div className="mr-5 p-5 text-[#abd1c6] sm:text-[1.3rem] md:ml-[3rem] lg:text-[1.7rem]">
          <h1 className="italic mb-2 text-[#fffffe] font-bold flex align-center justify-center text-[1.7rem] sm:text-[2.3rem] lg:text-[2.7rem]">
            About
          </h1>
          <p className="mb-2">
            <span className="font-bold">Name:</span> Dr. Ibeokoye Franklin
            Chiemelie
          </p>
          <p className="mb-2">
            <span className="font-bold">Nationality:</span> Nigerian
          </p>
          <p className="mb-2">
            <span className="font-bold">College degree:</span> Optometry
          </p>
          <p className="mb-2">
            <span className="font-bold">Availabilty:</span> Freelance & Remote
          </p>
        </div>
      </div>
      <div className="mt-9">
        <a
          href={cv}
          download={cv}
          className="bg-[#f9bc60] mx-[1rem] py-1 font-bold flex align-center justify-center sm:text-[1.3rem] lg:text-[23px]"
        >
          Download CV <GrDocumentDownload className="text-xl sm:text-3xl"/>
        </a>
    </div>
    </div>
  );
};

export default Hero;
