import styled, { keyframes } from 'styled-components'

const sidebarTranslateX = keyframes`
  to {
    transform: translateX(0);
  }
`

export const SidebarStyled = styled.div<{ delay: number }>`
  position: fixed;
  width: 48px;
  height: 100%;
  background-color: #333333;
  transform: translateX(-48px);
  animation: 1s ${sidebarTranslateX} ease-in-out ${p => p.delay + 500}ms forwards;
`

const headerTranslateY = keyframes`
  to {
    margin-left: 48px;
    transform: translateY(0);
  }
`

export const HeaderStyled = styled.div<{ delay: number }>`
  position: fixed;
  width: 100%;
  height: 35px;
  display: flex;
  background-color: #252526;
  transform: translateY(-35px);
  animation: 1s ${headerTranslateY} ease-in-out ${p => p.delay + 500}ms forwards;
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
