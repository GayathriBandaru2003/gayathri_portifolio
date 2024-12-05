import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { heroImage } from "../utils/constants";

const Hero = () => {
  return (
    <section className="max-w-full xl:max-w-[1350px] relative z-10 overflow-x-hidden flex flex-col items-center md:flex md:flex-row justify-between py-8 mx-auto text-white border-white border-0">
        <div className="w-full md:w-1/2 flex flex-col gap-y-7 items-center md:items-start contai justify-center py-8 px-8 mx-10 md:mx-0 lg:mx-6 border-white border-0">
            <h1 className="bg-gradient-to-r from-fuchsia-500 to-rose-400 text-transparent text-center md:text-left bg-clip-text text-4xl md:text-3xl xl:text-4xl font-semibold">
                <span className="text-white font-light">Hey,</span> I am GAYATHRI BANDARU
            </h1>
            <p className="text-sky-500 text-xl xl:text-2xl font-medium flex">
                <span className="text-white mr-1">A</span>
                <span><Typewriter
                    options={{
                      strings: [
                        "Front End Developer",
                        "React Js Developer",
                        "Web Enthusiast",
                      ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                    pauseFor: 0,
                    }}
                /></span>
            </p>
            <nav className="flex gap-x-3 mt-2 justify-center">
                <a className="rounded-full hover:scale-110 transition justify-center items-center flex gap-x-2 py-2 px-3" href="https://www.linkedin.com/in/gayathri-bandaru-62a553224/" target="_blank" rel="noopener"> 
                    <span className="text-white text-2xl"><FaLinkedin /></span>
                    LinkedIn
                </a>
                
                <a className="rounded-full hover:scale-110 transition justify-center items-center flex gap-x-2 py-2 px-3" href="https://github.com/gayathribandaru92003" target="_blank" rel="noopener"> 
                    <span className="text-white text-2xl"><FaGithub /></span>
                    Github
                </a>


            </nav>
            
            <div className="text-sm lg:text-base bg-black rounded-full border-fuchsia-500 border-[1px] drop-shadow-[0_0_8px_#f0abfc] text-center text-pretty mt-2 py-2 px-8">
                <a href="mailto: gayathribandaru2003@gmail.com">
                    gayathribandaru2003@gmail.com
                </a>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center border-white border-0 py-8 mx-10 md:mx-0 lg:mx-6">
            <img className="mx-auto w-full sm:w-4/5 lg:w-3/5 cover" src={heroImage} alt="developer"/>
        </div>
        
    </section>
  )
}

export default Hero;
