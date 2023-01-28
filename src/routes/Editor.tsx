import React, { ReactElement } from 'react'
import Tabs from '@/components/Tabs'
import { useAppSelector } from '@/components/Redux'
import { Header, Sidebar, Container } from '@/components/Editor'
import { Outlet, useLocation } from 'react-router-dom'
import '../styles/routes/editor.scss'

const tabsName = ['Home', 'Knowledge', 'Proyects', 'Contact']

export default function Editor (): ReactElement {
  const homeDelay = useAppSelector(state => state.delay)
  const { pathname } = useLocation()

  return (
    <div className='editor-container' >
      <Sidebar className='sidebar' loaded={pathname !== '/'} delay={homeDelay}>
        {/* <SidebarMenu icon={svg} hoverName={'menu'} /> */}
      </Sidebar>
      <Header className='header' loaded={pathname !== '/'} delay={homeDelay}>
        <Tabs tabsName={tabsName} />
      </Header>
      <Container className='content' loaded={pathname !== '/'} delay={homeDelay}>
        <Outlet/>
      </Container>
    </div>
  )
}
