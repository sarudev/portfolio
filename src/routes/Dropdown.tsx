import { useAppDispatch, useAppSelector } from '@/components/Redux'
import { setCount } from '@/redux/reducers/dropdownChildrenCount'
import React, { ReactElement } from 'react'
import { ReactComponent as Arrow } from '../assets/arrow-drop-down.svg'
import '../styles/routes/dropdown.scss'

function Knowledge (): ReactElement {
  return (
    <DropDownContainer>
      <DropDown title='Lenguajes' open>
        a
      </DropDown>
      <DropDown title='Librerias/Frameworks'>
        a
      </DropDown>
      <DropDown title='Idiomas'>
        a
      </DropDown>
      <DropDown title='Soft'>
        a
      </DropDown>
    </DropDownContainer>
  )
}

interface Child {
  children: ReactElement | ReactElement[]
}

function DropDownContainer ({ children }: { children: ReactElement | ReactElement[] }): ReactElement {
  useAppDispatch()(setCount(Array.isArray(children) ? children.length : 1))

  return (
    <div className='dropDownContainer'>
      {children}
    </div>
  )
}

function DropDown ({ title, children, open }: { title: string, children: ReactElement | ReactElement[] | string, open?: boolean }): ReactElement {
  const count = useAppSelector(p => p.dropdownChildrenCount)

  return (
    <div
      className={`dropdown ${open != null && open ? '' : 'closed'}`}
      style={{
        height: `calc(100% - ${(count - 1) * 40}px)`
      }}
    >
      <button
        className="interaction-bar"
        onClick={e => {
          const parent = e.currentTarget.parentElement!
          const parentSiblings = parent.parentElement!.childNodes as NodeListOf<HTMLDivElement>

          parent.classList.toggle('closed')
          parent.querySelector('.arrow')!.classList.toggle('rotate')

          parentSiblings.forEach(e => {
            if (!e.isEqualNode(parent)) {
              e.classList.add('closed')
              e.querySelector('.arrow')!.classList.remove('rotate')
            }
          })
        }}
      >
        <div className={`arrow ${open != null && open ? 'rotate' : ''}`}>
          <Arrow className='svg' />
        </div>
        <div className="title">
          {title}
        </div>
      </button>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

function DropDownContent ({ children }: Child): ReactElement {
  return (
    <></>
  )
}

function Menu ({ count }: { count: number }): ReactElement {
  return (
    <div className='dropdown'
      onClick={e => {
        const arrow = e.currentTarget.querySelector('.arrow')!
        arrow.classList.toggle('rotate')
        e.currentTarget.classList.toggle('open')
      }}
    >
      <div className="select">
        <div className='arrow'>
          <Arrow />
        </div>
        <div className='title'>
          Title
        </div>
      </div>
      <div className='content' style={{
        // height: `calc(100% - ${(count - 1) * 35}px)`
      }}>

      </div>
    </div>
  )
}

export default Knowledge

// <DropDownContainer>
//   <DropDown>
//     <DropDownContent />
//   </DropDown>
//   <DropDown>
//     <DropDownContent />
//   </DropDown>
// </DropDownContainer>
