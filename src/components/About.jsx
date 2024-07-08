import { userPhoto } from "../utils/constants"


const About = () => {
  return (
    <section className="text-[#f8fafc] py-10 max-w-[80vw] md:w-[70vw] md:max-w-[956px] mx-auto" id="about">
        <div className="min-h-fit">
            <div className="rounded-t-3xl md:rounded-t-[48px] bg-gradient-to-b from-fuchsia-800 to-black w-full overflow-x-hidden">
                <h1 className="my-6 text-4xl font-normal text-center">Who am I?</h1>
                <div className="flex flex-col lg:flex-row justify-around items-center px-4 pb-6">
                    <div className="w-full lg:w-1/3 flex items-center justify-center m-2">
                        <img className="w-44 lg:w-64 rounded-lg mb-4" src={userPhoto}/>
                    </div>
                    <div className="max-w-[540px] lg:w-2/3 mx-4 text-sm font-light">
                        <p>Hello, I'm an aspiring <span className="font-medium">Frontend Developer</span> based in <span className="font-medium">Ranchi, India</span>.</p>
                        <br />
                        <p>Although I'm at the beginning of my journey with zero experience, my passion for JavaScript and design fuels my hunger to learn and grow in this exciting field.</p>
                        <br />
                        <p>By passion, I'm a Cricket aficionado, Melophile, and a JavScript enthusiast.</p>
                        <br />
                        <p>I'm actively seeking opportunities to kickstart my career and collaborate on innovative projects.</p>
                        <br />
                        <p>Let's <span className="font-medium">connect</span> and build something amazing together!</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About