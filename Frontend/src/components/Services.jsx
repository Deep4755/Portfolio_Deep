import React from 'react'
import { AppWindow, CodeXml, Laptop } from "lucide-react";
function Services() {
  return (
    <section id='services' className='mx-auto max-w-7xl px-6 py-20'>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
           What I Build
        </h2>
        <p className='mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/70'>Specialized in crafting digital experiences that combine modern aesthetics with robust backend systems.</p>
      </div>

      <div className="mt-12 grid gap-6 flex-wrap sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5'>
<Laptop size={28} className="text-cyan-400" />
          </div>
          <h3 className='text-3xl font-bold text-white'>
                Business Websites
          </h3>
           <p className="mt-4 text-lg leading-8 text-white/70">
            High-performance, responsive websites tailored for local businesses to drive conversion and digital presence.
          </p>
        </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5'>
<AppWindow size={28} className="text-cyan-400" />
          </div>
          <h3 className='text-3xl font-bold text-white'>
              Full-Stack Web Apps
          </h3>
           <p className="mt-4 text-lg leading-8 text-white/70">
            Complex, data-driven web applications built with scalable MERN stack architecture and intuitive UIs.
          </p>
        </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5'>
<CodeXml size={28} className="text-cyan-400" />
          </div>
          <h3 className='text-3xl font-bold text-white'>
         API Development
          </h3>
           <p className="mt-4 text-lg leading-8 text-white/70">
            Secure, fast, and robust RESTful APIs built with Node.js and Express to power modern frontends.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default Services;