import React, { ReactElement, memo, SVGProps } from 'react'
import { ReactComponent } from '@/assets/logo-reactjs.svg'
import { Link, useLocation } from 'react-router-dom'

const Tabs = memo(function Tabs ({ tabsName }: { tabsName: string[] }): ReactElement {
  return (
    <div className='flex column'>
      {tabsName.map((name, i) => <Tab key={i} name={name} />)}
    </div>
  )
})

function Tab ({ name }: { name: string }): ReactElement {
  let currentTabName = useLocation().pathname.replace('/', '')
  currentTabName = currentTabName === '' ? 'home' : currentTabName

  const tabBgColor = currentTabName.toLowerCase() === name.toLowerCase()
    ? 'bg-[#1e1e1e]'
    : 'bg-[#2d2d2d]'

  const dotBgColor = 'after:bg-[transparent]'
  // const dotBgColor = visitedTabList.includes(name)
  //   ? 'after:bg-[transparent]'
  //   : 'after:bg-[#cccccc]'

  // const handleClick = useCallback((): void => {
  //   dispatch(setCurrentTabName(name))
  //   if (!visitedTabList.includes(name)) {
  //     dispatch(setVisitedTabList([...visitedTabList, name]))
  //   }
  // }, [currentTabName])

  return (
    <Link
      to={`/${name.toLowerCase()}`}
      className={`w-[120px] h-[35px] min-w-fit ${tabBgColor} top-0 pl-[10px] flex font-system-ui text-[13px] relative flex-shrink-0 border-r-[1px] border-r-[#252526] text-[#ffffff80] cursor-pointer`}
    >
      <div className='flex flex-1 pointer-events-none items-center'>
        <ReactLogo className='pr-[6px] w-[22px] h-[35px] flex items-center m-0 border-0' />
        <div className='flex items-center flex-1 whitespace-nowrap min-w-0 select-none'>
          {name + '.jsx'}
        </div>
      </div>
      <div className={`w-[28px] h-[35px] flex items-center justify-center after:w-[8px] after:h-[8px] after:rounded-[50%] after:transition-colors ${dotBgColor}`}>
      </div>
    </Link>
  )
}

const ReactLogo = memo(function ReactLogo (props: SVGProps<SVGSVGElement>) {
  return <ReactComponent {...props} />
})

export default Tabs
