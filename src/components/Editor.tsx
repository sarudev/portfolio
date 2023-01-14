import styled, { keyframes } from 'styled-components'

export const SidebarStyled = styled.div<{ loaded: boolean, delay: number }>`
  position: fixed;
  width: 48px;
  height: 100%;
  background-color: #333333;
  transform: translateX(${p => p.loaded ? '0' : '-48'}px);
  animation: ${p => p.loaded ? 'none' : `1s sidebarTranslateX ease-in-out ${p.delay + 500}ms forwards`};
`

export const HeaderStyled = styled.div<{ loaded: boolean, delay: number }>`
  position: fixed;
  width: 100%;
  height: 35px;
  display: flex;
  background-color: #252526;
  margin-left: ${p => p.loaded ? '48' : '0'}px;
  transform: translateY(${p => p.loaded ? '0' : '-35'}px);
  animation: ${p => p.loaded ? 'none' : `1s headerTranslateY ease-in-out ${p.delay + 500}ms forwards`};
`

const contentRezise = keyframes`
  to {
    margin-left: 48px;
    margin-top: 35px;
    width: calc(100% - 48px);
    height: calc(100% - 35px);
  }
`

export const ContentStyled = styled.div<{ delay: number }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  animation: 1s ${contentRezise} ease-in-out ${p => p.delay + 500}ms forwards;
`

// linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,50,255,1) 100%)
