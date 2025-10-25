import { useState, useEffect, type ReactElement } from 'react'
import AnimatedGrid from './components/animated-grid/AnimatedGrid'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import HeroSection from './components/sections/HeroSections'
import AboutSection from './components/sections/AboutSection'
import ProjectSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import { useGlowEffect } from './hooks/useGlowEffect'

export type JSXElement = ReactElement | ReactElement[] | string | (string | ReactElement)[]

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const glowRef = useGlowEffect(mousePosition)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden' ref={glowRef}>
      <AnimatedBackground />
      <AnimatedGrid />
      <Header />

      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}
