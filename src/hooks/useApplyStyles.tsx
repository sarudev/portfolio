import { RefObject, useEffect, useRef } from 'react'

function useApplyStyles ({ blinkDuration, durationCh, initialDelay, loaded }: { blinkDuration: number, durationCh: number, initialDelay: number, loaded: boolean }): RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let delay = initialDelay
    if (!loaded) {
      ref.current?.childNodes.forEach((e, i) => {
        const elem = e as HTMLDivElement
        const length = elem.textContent!.length
        const animationDuration = durationCh * length
        const write = `write ${animationDuration}ms steps(${length}) forwards ${delay}ms`
        const blink = `blink ${blinkDuration}ms infinite ${delay + animationDuration}ms`
        elem.style.setProperty('--real-width', `${length}ch`)
        elem.style.animation = `${write} ${ref.current!.childNodes.length - 1 === i ? `, ${blink}` : ''}`

        setTimeout(() => {
          elem.style.setProperty('--line-opacity', '1')
        }, delay)

        if (elem.dataset.forwards !== 'true') {
          setTimeout(() => {
            elem.style.setProperty('--line-opacity', '0')
            if (elem.dataset.indent !== 'true') {
              elem.style.boxShadow = '5px 0px transparent'
            } else {
              elem.style.boxShadow = 'inset 5px 0px #aeafad, 5px 0px transparent'
            }
          }, delay + animationDuration)
        }

        delay += animationDuration
      })
    }
  }, [])

  return ref
}

export default useApplyStyles