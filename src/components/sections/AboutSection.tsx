import { Award } from 'lucide-react'
import { GlowCard } from '../GlowEffect'
import Tag from '../Tag'
import Title from '../Title'
import Paragraph from '../Paragraph'
import StatsCard from '../StatsCard'

export default function AboutSection() {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, from: 'from-blue-800', to: 'to-blue-400' },
    { name: 'React & Next.js', level: 90, from: 'from-cyan-800', to: 'to-cyan-400' },
    { name: 'Node.js & Express', level: 80, from: 'from-emerald-800', to: 'to-emerald-400' },
    { name: 'SQL & NoSQL', level: 85, from: 'from-pink-800', to: 'to-pink-400' }
  ]

  return (
    <section id='sobre-mí' className='py-32 px-6 relative'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-16 items-start mb-12'>
          <div className='space-y-6'>
            <Tag>Sobre mí</Tag>

            <Title>Construyendo el futuro digital</Title>

            <div className='space-y-4'>
              <Paragraph>
                Con 3 años de experiencia en desarrollo web, me especializo en crear aplicaciones modernas que combinan diseño elegante con código robusto y escalable.
              </Paragraph>
              <Paragraph>
                Mi enfoque está en comprender las necesidades del negocio y traducirlas en soluciones técnicas efectivas, trabajando con metodologías ágiles y las últimas
                tecnologías del mercado.
              </Paragraph>
              <Paragraph>Actualmente curso Licenciatura en Sistemas (iniciada en 2021), balanceando mis estudios con mi desarrollo profesional a ritmo constante.</Paragraph>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='grid grid-cols-2 gap-4'>
              <StatsCard color='blue' upperText={30} type='number' lowerText='Proyectos completados' />
              <StatsCard color='purple' upperText={3} lowerText='Años de experiencia' />
              <StatsCard color='emerald' upperText={20} type='number' lowerText='Clientes' />
              <StatsCard color='cyan' upperText={100} type='percent' lowerText='Satisfacción' />
            </div>

            <GlowCard className='p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-xl'>
              <div className='flex items-center gap-3 mb-4'>
                <Award className='w-5 h-5 text-blue-400' />
                <span className='text-slate-300 font-medium'>Educación</span>
              </div>
              <div className='space-y-3'>
                <div>
                  <div className='text-slate-300 font-medium'>Licenciatura en Sistemas</div>
                  <div className='text-sm text-slate-500'>2021 - Actualidad</div>
                </div>
                <p className='text-sm text-slate-500 leading-relaxed'>Continuando mis estudios a ritmo adaptado desde 2023 para balancear con mi carrera profesional</p>
              </div>
            </GlowCard>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-16 items-start'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 [order:1] md:[order:-1]'>
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-slate-300 font-medium'>{skill.name}</span>
                  <span className='text-slate-500 text-sm'>{skill.level}%</span>
                </div>
                <div className='h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800'>
                  <div
                    className={`h-full bg-gradient-to-r ${skill.from} ${skill.to} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className='space-y-6'>
            <Tag>Un poco más sobre mí</Tag>

            <Title>¿Cuándo comenzó todo?</Title>

            <div className='space-y-4'>
              <Paragraph>
                Antes de comenzar mi carrera no tenía ningún conocimiento sobre programación, pero apenas un mes después de empezar descubrí que realmente me apasionaba.
              </Paragraph>
              <Paragraph>
                A partir de ese momento decidí aprender por mi cuenta, complementando lo que veía en la carrera. Gracias a eso hoy tengo una base sólida y amplios
                conocimientos en distintas áreas.
              </Paragraph>
              <Paragraph>
                Aun así, mi camino no ha terminado. Todavía tengo mucho por explorar y aprender, y confío plenamente en que, gracias a mi capacidad de aprendizaje rápido,
                podré seguir creciendo sin mayores dificultades.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
