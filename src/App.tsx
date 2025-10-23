import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Code2, Award, ArrowUpRight, ChevronDown, Terminal, Sparkles } from 'lucide-react'

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa con procesamiento de pagos y gestión de inventario',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500/10 to-purple-500/10',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Panel interactivo con datos en tiempo real',
      tech: ['Vue.js', 'D3.js', 'PostgreSQL'],
      gradient: 'from-cyan-500/10 to-blue-500/10',
      aspectRatio: 'aspect-video',
    },
    {
      title: 'App Mobile Social',
      description: 'Red social con chat en tiempo real y compartición multimedia',
      tech: ['React Native', 'Firebase', 'Socket.io'],
      gradient: 'from-purple-500/10 to-pink-500/10',
      aspectRatio: 'aspect-square',
    },
    {
      title: 'AI Content Generator',
      description: 'Generación de contenido con IA y procesamiento de lenguaje natural',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      gradient: 'from-emerald-500/10 to-cyan-500/10',
      aspectRatio: 'aspect-[3/4]',
    },
    {
      title: 'Booking System',
      description: 'Sistema de reservas multiidioma',
      tech: ['Next.js', 'Prisma', 'Stripe'],
      gradient: 'from-orange-500/10 to-red-500/10',
      aspectRatio: 'aspect-video',
    },
    {
      title: 'Fitness Tracker',
      description: 'App de seguimiento de ejercicios y nutrición con planes personalizados',
      tech: ['React', 'Express', 'MySQL'],
      gradient: 'from-green-500/10 to-emerald-500/10',
      aspectRatio: 'aspect-[16/10]',
    },
  ]

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'blue' },
    { name: 'React & Next.js', level: 90, color: 'cyan' },
    { name: 'Node.js & Express', level: 85, color: 'emerald' },
    { name: 'Python & Django', level: 80, color: 'purple' },
    { name: 'SQL & NoSQL', level: 85, color: 'pink' },
    { name: 'AWS & Cloud', level: 75, color: 'orange' },
  ]

  const experience = [
    { year: '2022 - Actual', title: 'Senior Full Stack Developer', company: 'Tech Corp' },
    { year: '2021 - 2022', title: 'Full Stack Developer', company: 'StartUp Inc' },
  ]

  return (
    <div className='bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden'>
      {/* Cursor gradient effect */}
      <div
        className='fixed inset-0 pointer-events-none z-50 transition-opacity duration-300'
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.06), transparent 40%)`,
        }}
      />

      {/* Animated background */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-96 h-96 bg-blue-600/5 rounded-full blur-3xl top-0 left-1/4 animate-pulse' style={{ animationDuration: '8s' }}></div>
        <div
          className='absolute w-96 h-96 bg-purple-600/5 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse'
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        ></div>
        <div
          className='absolute w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse'
          style={{ animationDuration: '12s', animationDelay: '4s' }}
        ></div>
      </div>

      {/* Grid overlay */}
      <div
        className='fixed inset-0 pointer-events-none opacity-[0.02]'
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Navigation */}
      <nav
        className='fixed top-0 w-full z-50 transition-all duration-500'
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid rgba(59, 130, 246, 0.1)' : 'none',
        }}
      >
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='text-xl font-bold flex items-center gap-2'>
            <Terminal className='w-5 h-5 text-blue-400' />
            <span className='text-slate-300'>Sarudev</span>
          </div>
          <div className='hidden md:flex gap-8 items-center'>
            {['Inicio', 'Sobre mí', 'Proyectos', 'Experiencia', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className='text-slate-400 hover:text-slate-100 transition-all duration-300 text-sm relative group'
              >
                {item}
                <span className='absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300'></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id='inicio' className='min-h-screen flex items-center justify-center relative px-6 pt-20'>
        <div className='max-w-6xl w-full'>
          <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='flex-1 space-y-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300'>
                <Sparkles className='w-4 h-4' />
                <span>Disponible para proyectos</span>
              </div>

              <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
                Hola, soy <br />
                <span className='bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent'>Tu Nombre</span>
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
                <a
                  href='#proyectos'
                  className='px-6 py-3 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-slate-600 hover:bg-slate-900/50 transition-all duration-300'
                >
                  Ver Proyectos
                </a>
              </div>

              <div className='flex gap-4 pt-4'>
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-slate-700 hover:bg-slate-800 transition-all duration-300 group'
                >
                  <Github className='w-5 h-5 text-slate-400 group-hover:text-slate-200' />
                </a>
                <a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-slate-700 hover:bg-slate-800 transition-all duration-300 group'
                >
                  <Linkedin className='w-5 h-5 text-slate-400 group-hover:text-slate-200' />
                </a>
                <a
                  href='mailto:tu@email.com'
                  className='w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-slate-700 hover:bg-slate-800 transition-all duration-300 group'
                >
                  <Mail className='w-5 h-5 text-slate-400 group-hover:text-slate-200' />
                </a>
              </div>
            </div>

            <div className='flex-1 relative hidden md:flex justify-center items-center'>
              <div className='relative w-80 h-80'>
                <div
                  className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse'
                  style={{ animationDuration: '4s' }}
                ></div>
                <div className='relative w-full h-full rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center'>
                  <Code2 className='w-40 h-40 text-slate-700' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ChevronDown className='w-6 h-6 text-slate-600' />
        </div>
      </section>

      {/* About Section */}
      <section id='sobre-mí' className='py-32 px-6 relative'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-16 items-start'>
            <div className='space-y-6'>
              <div className='inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-400'>Sobre mí</div>

              <h2 className='text-4xl md:text-5xl font-bold text-slate-100'>Construyendo el futuro digital</h2>

              <div className='space-y-4 text-slate-400 leading-relaxed'>
                <p>Con 3 años de experiencia en desarrollo web, me especializo en crear aplicaciones modernas que combinan diseño elegante con código robusto y escalable.</p>
                <p>
                  Mi enfoque está en comprender las necesidades del negocio y traducirlas en soluciones técnicas efectivas, trabajando con metodologías ágiles y las últimas
                  tecnologías del mercado.
                </p>
                <p>Actualmente curso Licenciatura en Sistemas (iniciada en 2021), balanceando mis estudios con mi desarrollo profesional a ritmo constante.</p>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all duration-300'>
                  <div className='text-3xl font-bold text-blue-400 mb-2'>30+</div>
                  <div className='text-slate-500 text-sm'>Proyectos</div>
                </div>
                <div className='p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all duration-300'>
                  <div className='text-3xl font-bold text-purple-400 mb-2'>3+</div>
                  <div className='text-slate-500 text-sm'>Años</div>
                </div>
                <div className='p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all duration-300'>
                  <div className='text-3xl font-bold text-emerald-400 mb-2'>20+</div>
                  <div className='text-slate-500 text-sm'>Clientes</div>
                </div>
                <div className='p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all duration-300'>
                  <div className='text-3xl font-bold text-cyan-400 mb-2'>100%</div>
                  <div className='text-slate-500 text-sm'>Satisfacción</div>
                </div>
              </div>

              <div className='p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-xl'>
                <div className='flex items-center gap-3 mb-4'>
                  <Award className='w-5 h-5 text-blue-400' />
                  <span className='text-slate-300 font-medium'>Educación</span>
                </div>
                <div className='space-y-3'>
                  <div>
                    <div className='text-slate-300 font-medium'>Licenciatura en Sistemas</div>
                    <div className='text-sm text-slate-500'>2021 - 2030 (en curso)</div>
                  </div>
                  <p className='text-sm text-slate-500 leading-relaxed'>Continuando mis estudios a ritmo adaptado desde 2023 para balancear con mi carrera profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='proyectos' className='py-32 px-6 bg-slate-950/50'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-16'>
            <div className='inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-400 mb-4'>Portfolio</div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-4'>Proyectos Destacados</h2>
            <p className='text-slate-400 max-w-2xl'>Una selección de mis trabajos más recientes y desafiantes</p>
          </div>

          <div className='columns-1 sm:columns-2 lg:columns-3 gap-6'>
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
        </div>
      </section>

      {/* Experience Section */}
      <section id='experiencia' className='py-32 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-16'>
            <div>
              <div className='inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-400 mb-4'>Trayectoria</div>
              <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-8'>Experiencia</h2>
              <div className='space-y-6'>
                {experience.map((exp, idx) => (
                  <div key={idx} className='relative pl-8 border-l-2 border-slate-800 last:pb-0 pb-8'>
                    <div className='absolute w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950' style={{ left: '-8px', top: 0 }}></div>
                    <div className='text-sm text-slate-500 mb-1'>{exp.year}</div>
                    <div className='text-lg font-semibold text-slate-200 mb-1'>{exp.title}</div>
                    <div className='text-slate-400'>{exp.company}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className='inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-400 mb-4'>Habilidades</div>
              <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-8'>Stack Técnico</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6'>
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-slate-300 font-medium'>{skill.name}</span>
                      <span className='text-slate-500 text-sm'>{skill.level}%</span>
                    </div>
                    <div className='h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800'>
                      <div
                        className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contacto' className='min-h-screen flex items-center justify-center px-6 relative'>
        <div className='max-w-4xl w-full text-center'>
          <div className='inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-400 mb-4'>Contacto</div>

          <h2 className='text-4xl md:text-6xl font-bold text-slate-100 mb-6'>
            ¿Tienes un proyecto <br />
            en mente?
          </h2>

          <p className='text-xl text-slate-400 mb-12 max-w-2xl mx-auto'>Estoy disponible para colaborar en proyectos interesantes. Hablemos sobre cómo puedo ayudarte.</p>

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
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-4 border border-slate-800 text-slate-300 rounded-lg font-medium hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-300 inline-flex items-center justify-center gap-2'
            >
              <Linkedin className='w-5 h-5' />
              Conectar en LinkedIn
            </a>
          </div>

          <div className='absolute bottom-8 left-0 right-0'>
            <p className='text-slate-600 text-sm'>© 2025 Tu Nombre. Hecho con React & Tailwind CSS</p>
          </div>
        </div>
      </section>
    </div>
  )
}
