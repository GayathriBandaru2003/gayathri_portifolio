import { projectList } from "../utils/constants";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";


const Project = () => {
  return (
    <section className="max-w-[80vw] md:max-w-[70vw] mx-auto overflow-hidden flex flex-col items-center text-[#f8fafc] mb-10" id="projects">
        <h1 className="my-6 text-4xl font-normal text-center">Projects</h1>
        {projectList.map((project) => (
            <article key={project?.name}>
                <h2 className="mb-4 text-lg md:text-2xl text-[#f9a8d4] font-medium">{project?.name}</h2>
                <div className="min-h-fit flex flex-col items-center border-[#30363d] border-[1px] rounded-xl overflow-hidden">
                    <div className="px-6 pt-6 lg:px-8 lg:pt-8 text-sm font-light">
                        <p className="mb-3">{project?.description}</p>
                        <div className="flex justify-center gap-x-3 sm:justify-start">
                            <a href={project?.demoLink} target="_blank" rel="noopener noreferrer">
                                <button className="flex gap-x-1 items-center justify-center border-slate-400 border-[1px] px-2 py-1 rounded-sm hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:font-normal">
                                    <span><HiOutlineStatusOnline /></span>Demo
                                </button>
                            </a>
                            <a href={project?.githubLink} target="_blank" rel="noopener noreferrer">
                                <button className="flex gap-x-1 items-center justify-center border-slate-400 border-[1px] px-2 py-1 rounded-sm hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:font-normal">
                                    <span><FaCode /></span>Code
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <img src={project?.image} loading="lazy"/>
                    </div>
                </div>
            </article>
        ))}
    </section>
  )
}

export default Project;