import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">

        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
          Sandeep Kaur
        </div>

        <p className="text-sm text-white/50 text-center">
          © {new Date().getFullYear()} Sandeep Kaur. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Deep4755"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-white/50 hover:text-white transition-colors duration-200"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-kaur-61b4232b7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-white/50 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={22} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
