import React, { memo, ReactElement } from 'react'
import Home from '@/pages/Home'
import Tabs from '@/components/Tabs'
import { useAppSelector } from '@/components/Redux'
import { ContentStyled, HeaderStyled, SidebarStyled } from '@/components/Editor'

function Editor (): ReactElement {
  const homeDelay = useAppSelector(state => state.delay)
  const visitedTabList = useAppSelector(state => state.visitedTabList)
  const tabsName = ['Home', 'Skills', 'Proyects', 'Contact']

  return (
    <div className='absolute w-[100%] h-[100vh] bg-[#1e1e1e] top-0 left-0' >
      <SidebarStyled delay={homeDelay}>
        {/* <SidebarMenu icon={svg} hoverName={'menu'} /> */}
      </SidebarStyled>
      <HeaderStyled className='left-0 z-[100] header-tabs' delay={homeDelay}>
        <Tabs tabsName={tabsName} />
      </HeaderStyled>
      <Content tabsName={tabsName}>
        <Home blinkDuration={750} durationCh={1} initialDelay={1500} loaded={visitedTabList.length > 1} className='animation-[home-margin_1s]' />
        {null}
        {null}
        {null}
      </Content>
    </div>
  )
}

function Content ({ tabsName, children }: IContent): ReactElement {
  const homeDelay = useAppSelector(state => state.delay)
  const currentTabName = useAppSelector(state => state.currentTabName)

  return (
    <ContentStyled delay={homeDelay}>
      {tabsName.map((name, i) => currentTabName === name ? children[i] || <div key={i}>a</div> : null)}
    </ContentStyled>
  )
}

export default Editor
