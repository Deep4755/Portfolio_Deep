function Projects() {
  return (
    <section id='projects' className='mx-auto max-w-7xl px-6 py-20'>
      <div className='max-w-2xl'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>Featured Projects</h2>
        <p className='mt-4 text-base sm:text-lg leading-8 text-white/70'>
          A selection of my recent full-stack applications and freelance projects.
        </p>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'>

        {/* QuickBreak */}
        <div className='overflow-hidden rounded-3xl border border-white/10 bg-white/5 flex flex-col'>
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-black">
                Live Project
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMG1hcCUyMGFwcCUyMG5hdmlnYXRpb258ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="QuickBreak AI-powered motorway service finder application interface"
              className="h-52 sm:h-64 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className='p-6 sm:p-8 flex flex-col flex-1'>
            <h3 className='text-xl sm:text-2xl font-bold text-white'>QuickBreak</h3>
            <p className='mt-3 text-sm sm:text-base leading-7 text-white/70 flex-1'>
              AI-powered motorway service finder designed to help drivers locate optimal rest stops based on real-time data and route preferences. Built using MERN stack with API integration for location-based services.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'MapBox'].map(tag => (
                <span key={tag} className='rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80'>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://quick-break-backend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-black hover:bg-emerald-500 transition-colors duration-200"
              >
                View Live Project
              </a>
              <a
                href="https://github.com/Deep4755/quick_break"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Local Carpet Fitter */}
        <div className='overflow-hidden rounded-3xl border border-white/10 bg-white/5 flex flex-col'>
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                Business Website
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1591018799176-450ee29b5463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBmbG9vcmluZyUyMGluc3RhbGxhdGlvbiUyMHJvb218ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Local Carpet Fitter professional business website homepage"
              className="h-52 sm:h-64 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className='p-6 sm:p-8 flex flex-col flex-1'>
            <h3 className='text-xl sm:text-2xl font-bold text-white'>Local Carpet Fitter</h3>
            <p className='mt-3 text-sm sm:text-base leading-7 text-white/70 flex-1'>
              A professional business website built for a local carpet fitting service to improve online presence and customer conversion. Designed to improve local SEO and increase customer enquiries.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'Express', 'MongoDB'].map(tag => (
                <span key={tag} className='rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80'>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://localcarpetfitter.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block rounded-2xl bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-black hover:bg-emerald-500 transition-colors duration-200"
              >
                View Live Project
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
