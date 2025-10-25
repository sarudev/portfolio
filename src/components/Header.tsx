import { Terminal } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className='fixed top-0 w-full z-50 transition-all duration-500'
      style={{
        backgroundColor: scrollY > 50 ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none'
      }}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='text-xl font-bold flex items-center gap-2'>
          <Terminal className='w-5 h-5 text-blue-400' />
          <span className='text-slate-300'>Sarudev</span>
        </div>
        <div className='hidden md:flex gap-8 items-center'>
          {['Inicio', 'Sobre mí', 'Proyectos', 'Contacto'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className='text-slate-400 hover:text-slate-100 transition-all duration-300 text-sm relative group'>
              {item}
              <span className='absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300'></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
