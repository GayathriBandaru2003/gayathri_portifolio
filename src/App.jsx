import Header from "./components/Header";
import Hero from "./components/Hero";


const App = () => {
  return (
    <main className="max-w-full relative z-[10] bg-black overflow-x-hidden m-0 p-0 font-poppins">
      <div className="rad-gradient absolute top-0 z-[-2] h-screen w-full bg-black overflow-x-hidden"></div>
      <Header />
      <Hero />
    </main>
  )
};
export default App;