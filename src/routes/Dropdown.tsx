import React, { ReactElement } from 'react'
import { Collapse, CollapseContainer, ModalCard, Modal, ModalOutlet } from '@/components/Collapse'
import { ReactComponent as Js } from '../assets/logo-js.svg'
import { ReactComponent as C } from '../assets/logo-c.svg'
import { ReactComponent as Cpp } from '../assets/logo-cpp.svg'
import { ReactComponent as Csharp } from '../assets/logo-csharp.svg'
import { ReactComponent as Java } from '../assets/logo-java.svg'
import { ReactComponent as Python } from '../assets/logo-python.svg'
import { ReactComponent as Lua } from '../assets/logo-lua.svg'
import { ReactComponent as SQL } from '../assets/logo-sql.svg'
import { ReactComponent as Mongo } from '../assets/logo-mongo.svg'
import { ReactComponent as Express } from '../assets/logo-express.svg'
import { ReactComponent as ReactLogo } from '../assets/logo-reactjs.svg'
import { ReactComponent as Node } from '../assets/logo-node.svg'
import { ReactComponent as TypeScript } from '../assets/logo-typescript.svg'
import { ReactComponent as Redux } from '../assets/logo-redux.svg'
import { ReactComponent as Jest } from '../assets/logo-jest.svg'
import { ReactComponent as Git } from '../assets/logo-git.svg'
import { ReactComponent as Sass } from '../assets/logo-scss.svg'
import { ReactComponent as Spanish } from '../assets/flag-argentina.svg'
import { ReactComponent as English } from '../assets/flag-us.svg'
import { ReactComponent as Japanese } from '../assets/flag-japan.svg'
import '../styles/routes/collapse.scss'

function Knowledge (): ReactElement {
  return (
    <>
      <ModalOutlet />
      <CollapseContainer>
        <Collapse title='Programming Languages' open>
          <ModalCard title='JavaScript' Icon={Js}>
            <Modal Icon={Js} title={'Title'}>
              <p>a</p>
            </Modal>
          </ModalCard>
          <ModalCard title='C' Icon={C} />
          <ModalCard title='C++' Icon={Cpp} />
          <ModalCard title='C#' Icon={Csharp} />
          <ModalCard title='Java' Icon={Java} />
          <ModalCard title='Python' Icon={Python} />
          <ModalCard title='Lua' Icon={Lua} />
          <ModalCard title='SQL' Icon={SQL} />
        </Collapse>
        <Collapse title='Libraries/Frameworks'>
          <ModalCard title='Mongo' Icon={Mongo} />
          <ModalCard title='Express' Icon={Express} />
          <ModalCard title='React' Icon={ReactLogo} />
          <ModalCard title='Node' Icon={Node} />
          <ModalCard title='TypeScript' Icon={TypeScript} />
          <ModalCard title='Redux' Icon={Redux} />
          <ModalCard title='Jest' Icon={Jest} />
          <ModalCard title='Git' Icon={Git} />
          <ModalCard title='Sass' Icon={Sass} />
        </Collapse>
        <Collapse title='Languages'>
          <ModalCard title='Español' Icon={Spanish} />
          <ModalCard title='English' Icon={English} />
          <ModalCard title='日本語' Icon={Japanese} />
        </Collapse>
        <Collapse title='Soft Skills'>
          <ModalCard title='Title' Icon={Sass} />
        </Collapse>
      </CollapseContainer>
    </>
  )
}

export default Knowledge
