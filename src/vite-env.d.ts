/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="react" />

interface IHome {
  blinkDuration: number
  durationCh: number
  initialDelay: number
  loaded: boolean
  className?: string
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

type IuseApplyStyles = Omit<IHome, 'className'>
