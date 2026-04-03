import { Code2, Server, Database, FileJson, Blocks, Paintbrush, Wind, Github } from "lucide-react";

const techs = [
  { icon: Code2, label: 'React', color: 'text-cyan-400' },
  { icon: Server, label: 'Node.js', color: 'text-emerald-400' },
  { icon: FileJson, label: 'Express', color: 'text-yellow-400' },
  { icon: Database, label: 'MongoDB', color: 'text-green-400' },
  { icon: FileJson, label: 'JavaScript', color: 'text-yellow-300' },
  { icon: Blocks, label: 'HTML', color: 'text-orange-400' },
  { icon: Paintbrush, label: 'CSS', color: 'text-blue-400' },
  { icon: Wind, label: 'Tailwind', color: 'text-cyan-300' },
  { icon: Github, label: 'GitHub', color: 'text-white/80' },
]

function TechStack() {
  return (
    <section id='techstack' className='mx-auto max-w-7xl px-6 py-20'>
      <div className='text-center'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
          Tech Stack
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/70'>
          My primary tools for building full-stack applications and modern web experiences.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techs.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-all duration-300 group"
          >
            <Icon size={28} className={`mb-4 mx-auto ${color} group-hover:scale-110 transition-transform duration-300`} />
            <h3 className="text-base font-semibold text-white">{label}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
