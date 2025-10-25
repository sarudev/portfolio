import { useEffect, useState } from 'react'
import './AnimatedGrid.scss'

interface Particle {
  id: number
  position: number
  direction: 'horizontal' | 'vertical'
  delay: number
  duration: number
  speed: number
}

const AnimatedGrid = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      const gridSize = 50

      const horizontalLines = Math.ceil(window.innerHeight / gridSize)
      const verticalLines = Math.ceil(window.innerWidth / gridSize)

      for (let i = 0; i < 60; i++) {
        const isHorizontal = Math.random() > 0.5
        const baseDuration = 4 + Math.random() * 6
        const speedMultiplier = 0.8 + Math.random() * 0.4

        const lineIndex = Math.floor(Math.random() * (isHorizontal ? horizontalLines : verticalLines))
        newParticles.push({
          id: i,
          position: lineIndex * gridSize,
          direction: isHorizontal ? 'horizontal' : 'vertical',
          delay: Math.random() * 8,
          duration: baseDuration * speedMultiplier,
          speed: speedMultiplier
        } satisfies Particle)
      }
      setParticles(newParticles)
    }

    generateParticles()

    window.addEventListener('resize', generateParticles)
    return () => window.removeEventListener('resize', generateParticles)
  }, [])

  return (
    <div className='fixed inset-0 bg-gray-900 overflow-hidden pointer-events-none' id='background'>
      <div id='background-grid' className='absolute inset-0 opacity-[0.1]' />

      {particles.map(particle => (
        <div
          key={particle.id}
          className='absolute pointer-events-none'
          style={{
            left: particle.direction === 'horizontal' ? '0%' : `${particle.position}px`,
            top: particle.direction === 'vertical' ? '0%' : `${particle.position}px`,
            width: particle.direction === 'horizontal' ? '100%' : '1px',
            height: particle.direction === 'vertical' ? '100%' : '1px',
            opacity: 0,
            animation: `${particle.direction === 'horizontal' ? 'slideHorizontal' : 'slideVertical'} ${particle.duration}s linear ${particle.delay}s infinite`
          }}
        >
          <div
            className='absolute'
            style={{
              width: particle.direction === 'horizontal' ? '150px' : '1px',
              height: particle.direction === 'vertical' ? '150px' : '1px',
              background:
                particle.direction === 'horizontal'
                  ? 'linear-gradient(to right, transparent, #3b82f6, transparent)'
                  : 'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
              boxShadow: '0 0 20px #3b82f6, 0 0 40px #3b82f6',
              filter: 'blur(1px)'
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default AnimatedGrid
