function Navbar() {
  return (
    <header className=" fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <nav  className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Sandeep Kaur
        </h1>

        <div className="flex items-center gap-8">
          <a href="#home" className="block text-white hover:text-emerald-400 transition-colors duration-200">
            Home
          </a>
          <a href="#techstack" className="block text-white hover:text-emerald-400 transition-colors duration-200">
            Tech Stack
          </a>
          <a href="#projects" className="block text-white hover:text-emerald-400 transition-colors duration-200">
            Projects
          </a>
          <a href="#services" className="block text-white hover:text-emerald-400 transition-colors duration-200">
            Services
          </a>
          <a href="#why-choose-me" className="block text-white hover:text-emerald-400 transition-colors duration-200">
            Why Me
          </a>
          <a href="#contact" className="block text-white hover:text-emerald-400 transition-colors duration-200">
            Contact
          </a>
        </div>
        <a
  href="#contact"
  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition-colors duration-200 shadow-lg"
  aria-label="Contact me for hire"
>
  Hire Me
</a>
      </nav>
    </header>
  );
}

export default Navbar;