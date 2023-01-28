import styled from 'styled-components'

export const Header = styled.div<{ loaded: boolean, delay: number }>`
  margin-left: ${p => p.loaded ? '48' : '0'}px;
  transform: translateY(${p => p.loaded ? '0' : '-35'}px);
  animation: ${p => p.loaded ? 'none' : `1s headerTranslateY ease-in-out ${p.delay + 500}ms forwards`};
`

export const Sidebar = styled.div<{ loaded: boolean, delay: number }>`
  transform: translateX(${p => p.loaded ? '0' : '-48'}px);
  animation: ${p => p.loaded ? 'none' : `1s sidebarTranslateX ease-in-out ${p.delay + 500}ms forwards`};
`

export const Container = styled.div<{ loaded: boolean, delay: number }>`
  width: calc(100% - ${p => p.loaded ? '48' : '0'}px);
  height: calc(100% - ${p => p.loaded ? '35' : '0'}px);
  margin-left: ${p => p.loaded ? '48' : '0'}px;
  margin-top: ${p => p.loaded ? '35' : '0'}px;
  animation: ${p => p.loaded ? 'none' : `1s home-margin ease-in-out ${p.delay + 500}ms forwards`}};
`
