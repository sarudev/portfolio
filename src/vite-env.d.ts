/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="react" />

interface IHome {
  blinkDuration: number
  durationCh: number
  initialDelay: number
  loaded: boolean
}

interface IContent {
  tabsName: string[]
  children: ReactElement[]
}

interface ILine {
  indent?: number
  forwards?: boolean
  blinkDuration: number
  loaded: boolean
  children: ReactElement | ReactElement[]
}

interface ICard {
  icon: string
  mainColor: string
  secondaryColor: string
  name: string
  percentage: number
  backgroundSize: string
}

interface IUseTilt {
  onMouseMove: ({ card, clientX, clientY }: { card: HTMLDivElement, clientX: number, clientY: number }) => boolean
  onMouseLeave: (card: HTMLDivElement) => boolean
  onMouseEnter: (card: HTMLDivElement) => boolean
  onClick: (card: HTMLDivElement) => boolean
}

interface IUseTiltConfig {
  styles?: {
    default?: {
      width: string
      height: string
      borderRadius: string
      transition: string
    }
    hover?: {
      width: string
      height: string
      borderRadius: string
      transition: string
    }
    clicked?: {
      width: string
      height: string
      borderRadius: string
      transition: string
    }
  }
  config?: {
    clickedHoverMultiplier?: number
    defaultHoverMulitplier?: number
    inverted?: boolean
  }
  debug?: {
    styles?: {
      timing?: string
      bezier?: string
    }
  }
}

interface IProyectCard {
  iconOrText: string
  icon?: boolean
  bgUrl: string
  link: string
  wip?: boolean
  id: string
  trans: string
}

type Level = 'very basic' | 'basic' | 'basic+' | 'intermediate' | 'intermediate+' | 'advanced' | 'very advanced'

interface ModalData {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  level?: Level
  description?: ReactElement
  href?: string
  title: string
}

type IuseApplyStyles = Omit<IHome, 'className'>
