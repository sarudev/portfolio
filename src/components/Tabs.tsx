import React, { ReactElement, memo, SVGProps, useCallback, useEffect } from 'react'
import { ReactComponent } from '@/assets/react.svg'
import { setCurrentTabName } from '@/redux/reducers/currentTabName'
import { setVisitedTabList } from '@/redux/reducers/visitedTabList'
import { useAppDispatch, useAppSelector } from '@/components/Redux'

const Tabs = memo(function Tabs ({ tabsName }: { tabsName: string[] }): ReactElement {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setCurrentTabName(tabsName[0]))
    dispatch(setVisitedTabList([tabsName[0]]))
  }, [])

  return (
    <div className='flex column'>
      {tabsName.map((name, i) => <Tab key={i} name={name} />)}
    </div>
  )
})

function Tab ({ name }: { name: string }): ReactElement {
  const currentTabName = useAppSelector(state => state.currentTabName)
  const visitedTabList = useAppSelector(state => state.visitedTabList)
  const dispatch = useAppDispatch()

  const tabBgColor = currentTabName === name
    ? 'bg-[#1e1e1e]'
    : 'bg-[#2d2d2d]'

  const dotBgColor = visitedTabList.includes(name)
    ? 'after:bg-[transparent]'
    : 'after:bg-[#cccccc]'

  const handleClick = useCallback((): void => {
    dispatch(setCurrentTabName(name))
    if (!visitedTabList.includes(name)) {
      dispatch(setVisitedTabList([...visitedTabList, name]))
    }
  }, [currentTabName])

  return (
    <div
      className={`w-[120px] h-[35px] min-w-fit ${tabBgColor} top-0 pl-[10px] flex font-system-ui text-[13px] relative flex-shrink-0 border-r-[1px] border-r-[#252526] text-[#ffffff80] cursor-pointer`}
      onClick={() => handleClick()}
    >
      <div className='flex flex-1 pointer-events-none items-center'>
        <ReactLogo className='pr-[6px] w-[22px] h-[35px] flex items-center m-0 border-0' />
        <div className='flex items-center flex-1 whitespace-nowrap min-w-0 select-none'>
          {name + '.jsx'}
        </div>
      </div>
      <div className={`w-[28px] h-[35px] flex items-center justify-center after:w-[8px] after:h-[8px] after:rounded-[50%] after:transition-colors ${dotBgColor}`}>
      </div>
    </div>
  )
}

const ReactLogo = memo(function ReactLogo (props: SVGProps<SVGSVGElement>) {
  return <ReactComponent {...props} />
})

export default Tabs
