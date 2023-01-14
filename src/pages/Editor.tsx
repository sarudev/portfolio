import React, { ReactElement } from 'react'
import Tabs from '@/components/Tabs'
import { useAppSelector } from '@/components/Redux'
import { HeaderStyled, SidebarStyled } from '@/components/Editor'
import { Outlet, useLocation } from 'react-router-dom'

const tabsName = ['Home', 'Knowledgement', 'Proyects', 'Contact']

function Editor ({ children }: { children?: ReactElement }): ReactElement {
  const homeDelay = useAppSelector(state => state.delay)
  const { pathname } = useLocation()

  return (
    <div className='absolute w-[100%] h-[100vh] bg-[#1e1e1e] top-0 left-0' >
      <SidebarStyled loaded={pathname !== '/'} delay={homeDelay}>
        {/* <SidebarMenu icon={svg} hoverName={'menu'} /> */}
      </SidebarStyled>
      <HeaderStyled loaded={pathname !== '/'} delay={homeDelay} className='left-0 z-[100] header-tabs' >
        <Tabs tabsName={tabsName} />
      </HeaderStyled>
      <Outlet/>
    </div>
  )
}

export default Editor
