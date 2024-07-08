import { useEffect } from "react";
import { techStack } from "../utils/constants"
import { FaGithub } from "react-icons/fa";



const Skills = () => {

    useEffect(() => {
        const marquees = document.querySelectorAll(".marquee");

        function addAnimation() {
            marquees.forEach((marquee) => {
              marquee.setAttribute("data-animated", true);
      
              const marqueeInner = marquee.querySelector(".marquee-inner");
              const marqueeContent = Array.from(marqueeInner.children);
        
              marqueeContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                marqueeInner.appendChild(duplicatedItem);
              });
            });
          }

          function removeAnimation() {
            marquees.forEach((marquee) => {
              marquee.removeAttribute('data-animated');
      
              const marqueeInner = marquee.querySelector('.marquee-inner');
              const duplicatedItems = marqueeInner.querySelectorAll('[aria-hidden="true"]');
              
              duplicatedItems.forEach((item) => {
                marqueeInner.removeChild(item);
              });
            });
          }

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
          }
        
        return () => {
          removeAnimation();
        };
    }, []);

  return (
    <section className="flex flex-col items-center bg-black text-[#f8fafc] pt-10 md:pt-20 pb-10" id="skills">
        <h1 className="mb-6 text-4xl font-normal">Skills</h1>
        <div className="marquee max-w-[80vw] md:w-[70vw] md:max-w-[956px] mx-auto overflow-hidden">
            <div className="marquee-inner">
                {techStack.map((skill) => (
                    <div className="min-w-fit flex items-center gap-x-2 py-[6px] px-2 rounded-md bg-black border-fuchsia-500 border-[1px] 
                    drop-shadow-[0_0_4px_#f0abfc]" key={skill?.name}>
                        {skill?.imgLogo && (
                            <img className="w-6 h-6 md:w-8 md:h-8"
                              src={skill?.imgLogo}
                              alt="skill logo"
                            />
                        )}
                        {skill?.imgLogo === null && (
                            <span className="text-white text-2xl md:text-3xl"><FaGithub /></span>
                        )}
                        <span className="text-white text-sm md:text-lg font-light">{skill?.name}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="marquee max-w-[80vw] md:w-[70vw] md:max-w-[956px] mx-auto overflow-hidden" data-direction="right">
            <div className="marquee-inner">
                {techStack.map((skill) => (
                    <div className="min-w-fit flex items-center gap-x-2 py-[6px] px-2 rounded-md bg-black border-fuchsia-500 border-[1px] 
                    drop-shadow-[0_0_4px_#f0abfc]" key={skill?.name}>
                        {skill?.imgLogo && (
                            <img className="w-6 h-6 md:w-8 md:h-8"
                              src={skill?.imgLogo}
                              alt="skill logo"
                            />
                        )}
                        {skill?.imgLogo === null && (
                            <span className="text-white text-2xl md:text-3xl"><FaGithub /></span>
                        )}
                        <span className="text-white text-sm md:text-lg font-light">{skill?.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills