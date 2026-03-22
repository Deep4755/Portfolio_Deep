import React from 'react'
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
   <section id='contact' className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid items-start gap-12 md:grid-cols-2">
      <div>
        <h2 className="text-4xl font-bold text-white md:text-6xl">
          Let's build something amazing together.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Currently available for freelance projects and open to new full-time opportunities. Drop me a message and let's chat.
        </p>
           <div className='mt-10'>
        <a href="mailto:sandeep8837505136@gmail.com"
        className='flex items-center gap-4 text-white hover:opacity-80 transition-opacity duration-200'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full border-white/10 bg-white/5'>
            <Mail size={22}  className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-white/50">Email</p>
            <p className="text-lg text-white">sandeep8837505136@gmail.com</p>
          </div>
        </a>

        <div className="mt-6">
           <a href="https://github.com/Deep4755"
          target="_blank"
          rel="noopener noreferrer"
        className='flex items-center gap-4 text-white hover:opacity-80 transition-opacity duration-200'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full border-white/10 bg-white/5'>
            <Github size={22}  className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-white/50">Github</p>
            <p className="text-lg text-white">github.com/Deep4755</p>
          </div>
        </a>
        </div>

          <div className="mt-6">
 <a href="https://www.linkedin.com/in/sandeep-kaur-61b4232b7/"
  target="_blank"
  rel="noopener noreferrer"
        className='flex items-center gap-4 text-white hover:opacity-80 transition-opacity duration-200'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full border-white/10 bg-white/5'>
            <Linkedin size={22}  className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-white/50">LinkedIn</p>
            <p className="text-lg text-white">linkedin.com/in/sandeepkaur</p>
          </div>
        </a>
          </div>
        
      
      </div>
      
      </div>
      
     <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
       <div className="mb-6">
        <label className="mb-2 block text-sm text-white" htmlFor="name">
          Name
        </label>
        <input 
          type="text" 
          id="name"
          placeholder='Your name' 
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-emerald-400" 
        />
       </div>
       <div className="mb-6">
        <label htmlFor="email" className="mb-2 block text-sm text-white">
          Email
        </label>
        <input 
          id='email' 
          type="email" 
          placeholder='your.email@example.com' 
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-emerald-400" 
        />
       </div>
       <div className="mb-6">
        <label className="mb-2 block text-sm text-white" htmlFor="message">
          Message
        </label>
        <textarea 
          id='message' 
          rows="6" 
          placeholder='Tell me about your project' 
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-emerald-400 resize-none" 
        />
       </div>
       <button
         type="button"
         className="w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-4 text-lg font-semibold text-black hover:from-emerald-500 hover:to-cyan-500 transition-all duration-200"
         aria-label="Send message to Sandeep Kaur"
       >
         Send Message
       </button>
     </div>
    </div>
    
    
   </section>
  )
}

export default Contact