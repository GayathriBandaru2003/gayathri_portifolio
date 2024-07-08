import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";


const App = () => {
  return (
    <main className="max-w-full relative z-[10] bg-black overflow-x-hidden m-0 p-0 font-poppins">
      <div className="rad-gradient absolute top-0 z-[-2] h-screen w-full bg-black overflow-x-hidden"></div>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <About />
      <Contact />
    </main>
  )
};
export default App;