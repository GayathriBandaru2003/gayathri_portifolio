import  { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="max-w-full xl:max-w-[1350px] mx-auto sticky z-20 flex flex-col md:flex-row items-center justify-between text-white pt-5 pb-0 md:pt-5 md:pb-5 px-16">
        <div className='w-full md:w-auto flex items-center justify-between'>
            <div className="font-semibold text-pink-600 text-xl md:text-2xl">AV</div>
            <button className='md:hidden text-xl cursor-pointer text-white' onClick={toggleLinks}>
                {showLinks ? <IoClose /> : <IoMenu />}
            </button>
        </div>
        
        <div className={`w-full px-10 pl-16 md:pl-10 overflow-hidden absolute md:static md:z-20 z-[-1] transition-all duration-700 ease-in ${showLinks ? 'top-12 backdrop-blur-md opacity-100' : 'top-[-200px]'} opacity-0 md:opacity-100`}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end md:gap-x-8 uppercase font-medium tracking-wide ">
              <a href="#skills" className="mt-2 md:mt-0 transition-all duration-300 ease-in">Skills</a>
              <a href="#about" className="mt-2 md:mt-0 transition-all duration-300 ease-in">About</a> 
              <a href="#projects" className="mt-2 md:mt-0 transition-all duration-300 ease-in">Projects</a>
              <a href="#contact" className="mt-2 md:mt-0 transition-all duration-300 ease-in">Contact</a>
            </div>
        </div>
    </nav>
    
    
  )
}

export default Header;