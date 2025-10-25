import { ExternalLink } from 'lucide-react'
import Tag from '../Tag'
import Title from '../Title'
import Paragraph from '../Paragraph'

interface Project {
  title: string // 'E-commerce Platform',
  description: string // 'Plataforma completa con procesamiento de pagos y gestión de inventario',
  tech: string[] // ['React', 'Node.js', 'MongoDB'],
  gradient: string // 'from-blue-500/10 to-purple-500/10',
  aspectRatio: string // 'aspect-[4/3]'
}

export default function ProjectSection() {
  const projects: Project[] = []

  return (
    <section id='proyectos' className='py-32 px-6 bg-slate-950/50 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='space-y-4'>
          <Tag>Proyectos</Tag>
          <Title>Proyectos Destacados</Title>
          {/* <Paragraph>Una selección de mis trabajos más recientes y desafiantes</Paragraph> */}
          <Paragraph>Lamentablemente por el momento no cuento con proyectos públicos desplegados.</Paragraph>
        </div>

        {projects.length > 0 && (
          <div className='columns-1 sm:columns-2 lg:columns-3 gap-6 mt-16'>
            {projects.map((project, idx) => (
              <div key={idx} className='break-inside-avoid mb-6'>
                <div className='group relative rounded-xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden'>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Image placeholder */}
                  <div className={`relative w-full bg-slate-800 ${project.aspectRatio}`}>
                    <svg className='absolute inset-0 w-full h-full' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid slice'>
                      <rect width='400' height='300' fill={`url(#grad-${idx})`} opacity='0.1' />
                      <defs>
                        <linearGradient id={`grad-${idx}`} x1='0%' y1='0%' x2='100%' y2='100%'>
                          <stop offset='0%' style={{ stopColor: idx % 3 === 0 ? '#3b82f6' : idx % 3 === 1 ? '#8b5cf6' : '#06b6d4', stopOpacity: 1 }} />
                          <stop offset='100%' style={{ stopColor: idx % 3 === 0 ? '#06b6d4' : idx % 3 === 1 ? '#ec4899' : '#10b981', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <circle cx='200' cy='150' r='40' fill='currentColor' className='text-slate-700' opacity='0.5' />
                      <rect x='170' y='165' width='60' height='8' rx='4' fill='currentColor' className='text-slate-700' opacity='0.5' />
                    </svg>
                  </div>

                  <div className='relative p-6 space-y-4 bg-gradient-to-br from-slate-900 to-slate-900/50'>
                    <div className='flex items-start justify-between'>
                      <h3 className='text-xl font-bold text-slate-200 group-hover:text-slate-100 transition-colors duration-300'>{project.title}</h3>
                      <ExternalLink className='w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-2' />
                    </div>
                    <p className='text-slate-500 text-sm leading-relaxed'>{project.description}</p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((tech, i) => (
                        <span key={i} className='px-2 py-1 bg-slate-800/50 text-slate-400 rounded text-xs border border-slate-800'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
