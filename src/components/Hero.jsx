import dp from "../image/dp2.jpg";
import cv from "../cv/resume.jpg";
import { GrDocumentDownload } from "react-icons/gr";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div id="#about" className="h-[26.5rem] bg-[#003329] lg:h-[30rem]">
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
            <span className="font-bold">College degree:</span> Optometry
          </p>
          <p className="mb-2">
            <span className="font-bold">Zodiac:</span> Virgo♍ (August 26)
          </p>
          <p>
            <span className="font-bold">Availabilty:</span> Freelance & Remote
          </p>
        </div>
      </div>
      <div className="mt-5">
        <a
          href={cv}
          download={cv}
          className="bg-[#f9bc60] mx-[1rem] py-1 font-bold flex align-center justify-center sm:text-[1.3rem] lg:text-[23px]"
        >
          Download CV <GrDocumentDownload className="text-xl sm:text-3xl"/>
        </a>
    </div>
    <div className="flex text-[#abd1c6] text-[22px] justify-center mt-2 sm:mt-3 font-bold sm:text-[25px] lg:text-[28px]">Socials</div>
    <div className="flex space-x-4 gap-6 justify-center sm:gap-8 lg:gap-10">
            <a href="https://github.com/Emeliege" className="text-[#fffffe]">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://ng.linkedin.com/in/franklin-ibeokoye-141670238" className=" text-[#fffffe]">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ibeokoyefrankli@gmail.com.com" className=" text-[#fffffe]">
              <Mail className="w-6 h-6" />
              </a>
            <a href="https://www.instagram.com/itsfrankfort_official/profilecard/?igsh=MXN4NjV4bDkwcWRhcA==" className=" text-[#fffffe]">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/share/RFg7qgSPtQRLaaWU/?mibextid=LQQJ4d" className=" text-[#fffffe]">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
    </div>
  );
};

export default Hero;
