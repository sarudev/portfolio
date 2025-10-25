import type { JSXElement } from '../App'

const roundeds = {
  xs: 'rounded-xs',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full'
}

export const GlowCard = ({ children, className = '', rounded = 'xl' }: { children: JSXElement; className?: string; rounded?: keyof typeof roundeds }) => {
  return (
    <div data-glow-card className={`relative ${className}`}>
      <div data-glow-background className={`absolute inset-0 ${roundeds[rounded]} pointer-events-none opacity-0 transition-opacity duration-300`} />
      <div
        data-glow-border
        className={`absolute inset-0 ${roundeds[rounded]} pointer-events-none opacity-0 transition-opacity duration-300 z-10`}
        style={{
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
      <div className='relative z-[1]'>{children}</div>
    </div>
  )
}
