import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Github, Linkedin, Instagram, PenOff} from 'lucide-react';
import logo from '../image/logo1.jpg';
import hill1 from '../parallax/hill1.png';
import hill2 from '../parallax/hill2.png';
import hill3 from '../parallax/hill3.png';
import hill4 from '../parallax/hill4.png';
import hill5 from '../parallax/hill5.png';
import tree from '../parallax/tree.png';
import leaf from '../parallax/leaf.png';
import plant from '../parallax/plant.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (textRef.current) {
        textRef.current.style.transform = `translateY(${value * 2.5}px)`;
      }
      if (leafRef.current) {
        leafRef.current.style.transform = `translate(${value * 1.5}px, ${value * -1.5}px)`;
      }
      if (hill5Ref.current) {
        hill5Ref.current.style.transform = `translateX(${value * 1.5}px)`;
      }
      if (hill4Ref.current) {
        hill4Ref.current.style.transform = `translateX(${value * -1.5}px)`;
      }
      if (hill1Ref.current) {
        hill1Ref.current.style.transform = `translateY(${value * 1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="relative overflow-hidden bg-white h-screen">
      <div className="sm:px-6 lg:px-8">
        <div className="flex justify-flex-start">
            <img src={logo} alt='logo' className='m-2 w-[3rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] lg:w-[6rem] lg:h-[6rem]' />
            
          {/* Desktop Menu */}
          <div className="hidden sm-hidden md:flex items-center space-x-6 lg:ml-7 lg:text-[20px]">
            <a href="#home" className="text-[#359381] rounded-full px-2 py-1 font-bold hover:text-white hover:bg-[#359381]">Home</a>
            <a href="#about" className="text-[#359381] rounded-full px-2 py-1 font-bold hover:text-white hover:bg-[#359381]">About</a>
            <a href="#projects" className="text-[#359381] rounded-full px-2 py-1 font-bold hover:text-white hover:bg-[#359381]">Projects</a>
            <a href="#contact" className="text-[#359381] rounded-full px-2 py-1 font-bold hover:text-white hover:bg-[#359381]">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-center items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-[#359381]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 sm:px-3 flex">
            <a href="#home" className="block px-2 py-2 text-gray-600 hover:text-gray-900">Home</a>
            <a href="#about" className="block px-2 py-2 text-gray-600 hover:text-gray-900">About</a>
            <a href="#projects" className="block px-2 py-2 text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#contact" className="block px-2 py-2 text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
          <img src={hill1} alt='hill1' ref={hill1Ref} className='absolute object-cover top-0 left-0 pointer-events-none h-screen w-[100%]'/>
          <img src={hill2} alt='hill2' className='absolute top-0 left-0 pointer-events-none h-screen w-[100%]' />
          <img src={hill3} alt='hill3' className='absolute top-0 left-0 pointer-events-none h-screen w-[100%]' />
          <img src={hill4} alt='hill4' ref={hill4Ref} className='absolute top-0 left-0 pointer-events-none h-screen w-[100%]' />
          <img src={hill5} alt='hill5' ref={hill5Ref} className='absolute top-0 left-0 pointer-events-none h-screen w-[100%]' />
          <img src={tree} alt='tree' className='absolute top-0 left-0 pointer-events-none h-screen w-[100%]' />
          <h2  ref={textRef} className="relative mt-[18rem] text-center text-white text-[3rem] font-bold sm:text-[5rem] sm:mt-[13rem] lg:text-[6rem]">WELCOME</h2>
          <img src={leaf} alt='leaf'  ref={leafRef} className='absolute top-0 left-0 pointer-events-none h-screen w-[100%]' />
          <img src={plant} alt='plant' className='absolute top-0 left-0 pointer-events-none h-screen w-[100%]' />
    </nav>
  );
};

export default Header;