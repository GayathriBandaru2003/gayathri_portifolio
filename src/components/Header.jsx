

const Header = () => {
  return (
    <nav className="w-full sticky z-10 flex justify-between text-white py-5 px-16 mx-auto">
        <div className="font-semibold text-pink-600 text-2xl">AV</div>
        <div className="flex gap-x-8 uppercase font-medium tracking-wide">
          <a href="#skills">Skills</a>
          <a href="#about">About</a> 
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
    </nav>
    
    
  )
}

export default Header;