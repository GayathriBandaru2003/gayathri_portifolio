

const Header = () => {
  return (
    <nav className="max-w-full xl:max-w-[1350px] mx-auto sticky z-10 flex justify-between text-white py-5 px-16 ">
        <div className="font-semibold text-pink-600 text-2xl">AV</div>
        <div className="flex gap-x-8 uppercase font-medium tracking-wide">
          <a href="#skills" className="duration-300">Skills</a>
          <a href="#about" className="duration-300">About</a> 
          <a href="#projects" className="duration-300">Projects</a>
          <a href="#contact" className="duration-300">Contact</a>
        </div>
    </nav>
    
    
  )
}

export default Header;