import { useEffect, useRef } from 'react'

export const useGlowEffect = (mousePosition: { x: number; y: number }) => {
  const containerRef = useRef<any | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !mousePosition) return

    const cards = container.querySelectorAll('[data-glow-card]')

    cards.forEach((card: HTMLElement) => {
      const rect = card.getBoundingClientRect()
      const glowBorder = card.querySelector('[data-glow-border]') as HTMLElement
      const glowBackground = card.querySelector('[data-glow-background]') as HTMLElement

      if (!glowBorder || !glowBackground) return

      const x = mousePosition.x - rect.left
      const y = mousePosition.y - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2))

      const influenceRadius = maxDistance * 2.5

      const docDistance = Math.min(
        Math.sqrt(Math.pow(mousePosition.x - rect.left, 2) + Math.pow(mousePosition.y - rect.top, 2)),
        Math.sqrt(Math.pow(mousePosition.x - rect.right, 2) + Math.pow(mousePosition.y - rect.top, 2)),
        Math.sqrt(Math.pow(mousePosition.x - rect.left, 2) + Math.pow(mousePosition.y - rect.bottom, 2)),
        Math.sqrt(Math.pow(mousePosition.x - rect.right, 2) + Math.pow(mousePosition.y - rect.bottom, 2))
      )

      if (docDistance < influenceRadius) {
        const intensity = Math.max(0, 1 - docDistance / influenceRadius)

        const gradientBorder = `radial-gradient(600px circle at ${x}px ${y}px, rgba(180, 180, 180, ${0.5 * intensity}), rgba(120, 120, 120, ${
          0.5 * intensity
        }), transparent 40%)`
        const gradientBackground = `radial-gradient(600px circle at ${x}px ${y}px, rgba(180, 180, 180, ${0.05 * intensity}), rgba(120, 120, 120, ${
          0.01 * intensity
        }), transparent 40%)`

        glowBorder.style.background = gradientBorder
        glowBorder.style.opacity = '1'

        glowBackground.style.background = gradientBackground
        glowBackground.style.opacity = '1'
      } else {
        glowBorder.style.opacity = '0'
        glowBackground.style.opacity = '0'
      }
    })
  }, [mousePosition])

  return containerRef
}
