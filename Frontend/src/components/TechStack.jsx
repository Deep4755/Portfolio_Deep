import React from 'react'
import { Code2, Server, Database, FileJson, Blocks, Paintbrush, Wind, Github } from "lucide-react";

function TechStack() {
  return (
   <section id='techstack' className='mx-auto max-w-7xl px-6 py-20'>
    <div className='text-center'>
      <h2 className='text-4xl font-bold text-white md:text-5xl'>
        Tech Stack
      </h2>
      <p className='mx-auto mt-6 max-w-3xl text-lg text-white/70'>
          My primary tools for building full-stack applications and modern web experiences.
      </p>
    </div>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
      <Code2 size={32} className="mb-6 text-cyan-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">React</h3>
  </div>
  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
    <Server size={32} className="mb-6 text-emerald-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">Node.js</h3>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
    <FileJson size={32} className="mb-6 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">Express</h3>
  </div>
  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
    <Database size={32} className="mb-6 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">MongoDB</h3>
  </div>
  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
    <FileJson size={32} className="mb-6 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">JavaScript</h3>
  </div>
</div>

<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
<Blocks size={32} className="mb-6 text-cyan-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">HTML</h3>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
    <Paintbrush size={32} className="mb-6 text-emerald-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">CSS</h3>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
    <Wind size={32} className="mb-6 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">Tailwind</h3>
  </div>
  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:bg-white/10 transition-all duration-300 group">
    <Github size={32} className="mb-6 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-2xl font-semibold text-white">GitHub</h3>
  </div>
</div>

   </section>
  )
}

export default TechStack