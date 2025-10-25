import { ArrowUpRight, ChevronDown, Code2, Sparkles } from 'lucide-react'
import { GlowCard } from '../GlowEffect'
import Link from '../Link'

export default function HeroSection({ available = false }: { available?: boolean }) {
  return (
    <section id='inicio' className='min-h-screen flex items-center justify-center relative px-6 pt-20'>
      <div className='max-w-6xl w-full'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='flex-1 space-y-8'>
            {available && (
              <GlowCard rounded='full' className='inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full w-auto'>
                <div className='inline-flex items-center gap-2 text-sm text-blue-300 w-auto'>
                  <Sparkles className='w-4 h-4' />
                  <span>Disponible para proyectos</span>
                </div>
              </GlowCard>
            )}

            <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
              Hola, soy <br />
              <span className='bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent'>Saru</span>
            </h1>

            <p className='text-xl text-slate-400 leading-relaxed max-w-xl'>
              Desarrollador Full Stack enfocado en crear experiencias digitales excepcionales. Especializado en React, Node.js y arquitecturas escalables.
            </p>

            <div className='flex flex-wrap gap-4'>
              <a
                href='#contacto'
                className='group px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 flex items-center gap-2'
              >
                Hablemos
                <ArrowUpRight className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300' />
              </a>
              <GlowCard
                rounded='lg'
                className='px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-slate-700 hover:bg-slate-800 transition-all duration-300 group'
              >
                <a href='#proyectos'>Ver Proyectos</a>
              </GlowCard>
            </div>

            <div className='flex gap-4 pt-4'>
              <Link icon='Github' type='link' to='https://github.com/sarudev' />
              <Link icon='Linkedin' type='link' to='https://www.linkedin.com/in/josé-coria' />
              <Link icon='Mail' type='mail' to='mailto:work@sarudev.com.ar' />
            </div>
          </div>

          <div className='flex-1 relative hidden md:flex justify-center items-center'>
            <div className='relative w-80 h-80'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/35 to-blue-500/35 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '4s' }} />
              <GlowCard
                rounded='full'
                className='relative w-full h-full rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center'
              >
                <Code2 className='w-40 h-40 text-slate-700' />
              </GlowCard>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <ChevronDown className='w-6 h-6 text-slate-600' />
      </div>
    </section>
  )
}
