import React from 'react'

function Projects() {
  return (
    <section id='projects' className='mx-auto max-w-7xl px-6 py-20'>
      <div className='max-w-3xl'>
        <h2 className='text-4xl font-bold text-white md:text-5xl'> Featured Projects</h2>
        <p className='mt-4 text-lg leading-8 text-white/70'>
          A selection of my recent full-stack applications and freelance projects.
        </p>
      </div>
      <div className='mt-12 gap-6 grid grid-cols-2'>
        <div className='overflow-hidden rounded-3xl border border-white/10 bg-white/5'>
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-black">
                Live Project
              </span>
            </div>
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMG1hcCUyMGFwcCUyMG5hdmlnYXRpb258ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="QuickBreak AI-powered motorway service finder application interface"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className='p-8'>
            <h3 className='text-2xl font-bold text-white'>
              QuickBreak
            </h3>
            <p className='mt-4 text-lg leading-8 text-white/70'>
              AI-powered motorway service finder designed to help drivers locate optimal rest stops based on real-time data and route preferences. Built using MERN stack with API integration for location-based services. Used API integration to deliver real-time location-based results.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                React
              </span>
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                Node.js
              </span>
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                Express
              </span>
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                MongoDB
              </span>
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                OpenAI API
              </span>
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                MapBox
              </span>
            </div>
            <div className="mt-6 flex gap-4">
              <a 
                href="https://quick-break-backend.onrender.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-black hover:bg-emerald-500 transition-colors duration-200"
              >
                View Live Project
              </a>
              <a 
                href="https://github.com/Deep4755/quick_break" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
         <div className='overflow-hidden rounded-3xl border border-white/10 bg-white/5'>
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                Business Website
              </span>
            </div>
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1591018799176-450ee29b5463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBmbG9vcmluZyUyMGluc3RhbGxhdGlvbiUyMHJvb218ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Local Carpet Fitter professional business website homepage"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className='p-8'>
            <h3 className='text-2xl font-bold text-white'>
              Local Carpet Fitter
            </h3>
            <p className='mt-4 text-lg leading-8 text-white/70'>
              A professional business website built for a local carpet fitting service to improve online presence and customer conversion. Designed to improve local SEO and increase customer enquiries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                React
              </span>
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                Tailwind CSS
              </span>
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                Express
              </span>
              <span className='rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm text-white/80'>
                MongoDB
              </span>
            </div>
            <div className="mt-6">
              <a 
                href="https://localcarpetfitter.co.uk" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block rounded-2xl bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-black hover:bg-emerald-500 transition-colors duration-200"
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