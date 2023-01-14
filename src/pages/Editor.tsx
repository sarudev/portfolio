import React, { ReactElement } from 'react'
import Tabs from '@/components/Tabs'
import { useAppSelector } from '@/components/Redux'
import { HeaderStyled, SidebarStyled } from '@/components/Editor'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const tabsName = ['Home', 'Knowledgement', 'Proyects', 'Contact']

const Container = styled.div<{ loaded: boolean, delay: number }>`
  width: calc(100% - ${p => p.loaded ? '48' : '0'}px);
  height: calc(100% - ${p => p.loaded ? '35' : '0'}px);
  margin-left: ${p => p.loaded ? '48' : '0'}px;
  margin-top: ${p => p.loaded ? '35' : '0'}px;
  animation: ${p => p.loaded ? 'none' : `1s home-margin ease-in-out ${p.delay + 500}ms forwards`}};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -10;
  flex-wrap: wrap;
`

function Editor ({ children }: { children?: ReactElement }): ReactElement {
  const homeDelay = useAppSelector(state => state.delay)
  const { pathname } = useLocation()

  return (
    <div className='absolute w-[100%] h-[100%] bg-[#1e1e1e] top-0 left-0 flex z-[-15]' >
      <SidebarStyled loaded={pathname !== '/'} delay={homeDelay}>
        {/* <SidebarMenu icon={svg} hoverName={'menu'} /> */}
      </SidebarStyled>
      <HeaderStyled loaded={pathname !== '/'} delay={homeDelay} className='left-0 z-[100] header-tabs' >
        <Tabs tabsName={tabsName} />
      </HeaderStyled>
      <Container loaded={pathname !== '/'} delay={homeDelay}>
        <Outlet/>
      </Container>
    </div>
  )
}

export default Editor
