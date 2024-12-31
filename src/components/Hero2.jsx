import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const hero2 = () => {
  return (
    <div className="h-[41rem] p-2 bg-[#abd1c6] lg:h-[38.5rem] xl:h-[37rem]">
      <div className="text-[#001e1d] sm:text-[20px] sm:mb-5 md:text-[1.3rem]">
        I’m a passionate frontend developer who transforms ideas into visually
        stunning, interactive, and user-friendly web experiences. With a strong
        foundation in HTML, CSS, and JavaScript, I specialize in crafting
        user-centric interfaces that are not only responsive but also engaging.
        When I’m not debugging code or exploring new design trends, you’ll find
        me experimenting with animations, diving into new frameworks, or
        learning the latest in web technologies. My mission is to create
        seamless digital experiences that leave a lasting impression.
        <p>Let’s turn ideas into beautiful, interactive realities!😊</p>
      </div>
      <div className="grid grid-cols-3 p-5 gap-4 justify-center md:gap-6">
        <div className="text-[#001e1d] mb-4 text-7xl sm:text-8xl">
            <FaHtml5 title="HTML5" />
        </div>
        <div className="text-[#001e1d] mb-4 text-7xl sm:text-8xl">
            <FaCss3Alt title="CSS3" />
        </div>
        <div className="text-[#001e1d] mb-4 text-7xl sm:text-8xl">
            <FaJs title="Javascript" />
        </div>
        <div className="text-[#001e1d] mb-4 text-7xl sm:text-8xl">
            <SiTypescript title="Typescript" />
        </div>
        <div className="text-[#001e1d] mb-4 text-7xl sm:text-8xl">
            <FaReact title="React" />
        </div>
        <div className="text-[#001e1d] mb-4 text-7xl sm:text-8xl">
            <FaVuejs title="Vue.js" />
        </div> 
        <div className="text-[#001e1d] mb-4 text-7xl sm:text-8xl">
            <SiTailwindcss title="Tailwind css" />
        </div>
      </div>
    </div>
  );
};

export default hero2;
