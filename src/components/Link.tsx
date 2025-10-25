import { Github, Linkedin, Mail } from 'lucide-react'
import { GlowCard } from './GlowEffect'
import { useCallback } from 'react'

interface LinkProps {
  icon: 'Github' | 'Linkedin' | 'Mail'
  type: 'link' | 'mail'
  to: string
}

export default function Link({ type, to, icon }: LinkProps) {
  const iconClassname = 'w-5 h-5 text-slate-400 group-hover:text-slate-200'

  const Icon = useCallback(() => {
    switch (icon) {
      case 'Github':
        return <Github className={iconClassname} />
      case 'Linkedin':
        return <Linkedin className={iconClassname} />
      case 'Mail':
        return <Mail className={iconClassname} />
    }
  }, [icon])

  return (
    <GlowCard rounded='lg'>
      <a
        className='w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-slate-700 hover:bg-slate-800 transition-all duration-300 group hover:cursor-pointer'
        href={to}
        target={type === 'link' ? '_blank' : undefined}
        rel={type === 'link' ? 'noopener noreferrer' : undefined}
      >
        <Icon />
      </a>
    </GlowCard>
  )
}
