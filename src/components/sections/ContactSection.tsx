import { ArrowUpRight, Linkedin, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id='contacto' className='min-h-screen flex items-center justify-center px-6 relative'>
      <div className='max-w-4xl w-full text-center'>
        <div className='inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-400 mb-4'>Contacto</div>

        <h2 className='text-4xl md:text-6xl font-bold text-slate-100 mb-6'>
          ¿Tienes un proyecto <br />
          en mente?
        </h2>

        <p className='text-xl text-slate-400 max-w-2xl mx-auto'>Estoy disponible para colaborar en proyectos interesantes.</p>
        <p className='text-xl text-slate-400 mb-12 max-w-2xl mx-auto'>Hablemos sobre cómo puedo ayudarte.</p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
          <a
            href='mailto:tu@email.com'
            className='group px-8 py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 inline-flex items-center justify-center gap-2'
          >
            <Mail className='w-5 h-5' />
            Enviar Email
            <ArrowUpRight className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300' />
          </a>
          <a
            href='https://www.linkedin.com/in/josé-coria'
            target='_blank'
            rel='noopener noreferrer'
            className='px-8 py-4 border border-slate-800 text-slate-300 rounded-lg font-medium hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-300 inline-flex items-center justify-center gap-2'
          >
            <Linkedin className='w-5 h-5' />
            Conectar en LinkedIn
          </a>
        </div>

        <div className='absolute bottom-8 left-0 right-0'>
          <p className='text-slate-600 text-sm'>© 2025 Saru. Made with 💖 and React</p>
        </div>
      </div>
    </section>
  )
}
