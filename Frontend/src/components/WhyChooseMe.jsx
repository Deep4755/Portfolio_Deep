import React from 'react'
import { CheckCircle, Code, Zap } from "lucide-react";

function WhyChooseMe() {
  return (
    <section id='why-choose-me' className='mx-auto max-w-7xl px-6 py-20'>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
           Why Choose Me
        </h2>
        <p className='mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/70'>
          A commitment to quality, professionalism, and delivering measurable results.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300">
          <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10'>
            <CheckCircle size={28} className="text-emerald-400" />
          </div>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Real Projects
          </h3>
          <p className="text-lg leading-8 text-white/70">
            Built and deployed real-world applications used by actual users and businesses, not just demo projects.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300">
          <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10'>
            <Code size={28} className="text-cyan-400" />
          </div>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Clean Code
          </h3>
          <p className="text-lg leading-8 text-white/70">
            Maintainable, scalable code following modern development best practices and industry standards.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300">
          <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/30 bg-yellow-500/10'>
            <Zap size={28} className="text-yellow-400" />
          </div>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Fast Delivery
          </h3>
          <p className="text-lg leading-8 text-white/70">
            Reliable delivery with clear communication and efficient workflow, without compromising quality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMe;