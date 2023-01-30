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
// very basic             14
// basic                  28
// basic+                 42
// intermediate           56
// intermediate+          70
// advanced               84
// very advanced          98
function Knowledge (): ReactElement {
  return (
    <>
      <ModalOutlet />
      <CollapseContainer>
        <Collapse title='Programming Languages' open>
          <ModalCard title='JavaScript' Icon={Js} levelText={'advanced'} levelValue={84} >
            <Modal Icon={Js} title='JavaScript' levelText={'advanced'} levelValue={84} description={'description'} href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} />
          </ModalCard>
          <ModalCard title='C' Icon={C} levelText={'low'} levelValue={0} >
            <Modal Icon={C} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='C++' Icon={Cpp} levelText={'low'} levelValue={0} >
            <Modal Icon={Cpp} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='C#' Icon={Csharp} levelText={'low'} levelValue={0} >
            <Modal Icon={Csharp} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Java' Icon={Java} levelText={'low'} levelValue={0} >
            <Modal Icon={Java} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Python' Icon={Python} levelText={'low'} levelValue={0} >
            <Modal Icon={Python} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Lua' Icon={Lua} levelText={'low'} levelValue={0} >
            <Modal Icon={Lua} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='SQL' Icon={SQL} levelText={'low'} levelValue={0} >
            <Modal Icon={SQL} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Libraries/Frameworks'>
          <ModalCard title='Mongo' Icon={Mongo} levelText={'low'} levelValue={0} >
            <Modal Icon={Mongo} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Express' Icon={Express} levelText={'low'} levelValue={0} >
            <Modal Icon={Express} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='React' Icon={ReactLogo} levelText={'low'} levelValue={0} >
            <Modal Icon={ReactLogo} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Node' Icon={Node} levelText={'low'} levelValue={0} >
            <Modal Icon={Node} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='TypeScript' Icon={TypeScript} levelText={'low'} levelValue={0} >
            <Modal Icon={TypeScript} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Redux' Icon={Redux} levelText={'low'} levelValue={0} >
            <Modal Icon={Redux} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Jest' Icon={Jest} levelText={'low'} levelValue={0} >
            <Modal Icon={Jest} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Git' Icon={Git} levelText={'low'} levelValue={0} >
            <Modal Icon={Git} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='Sass' Icon={Sass} levelText={'low'} levelValue={0} >
            <Modal Icon={Sass} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Languages'>
          <ModalCard title='Español' Icon={Spanish} levelText={'low'} levelValue={0} >
            <Modal Icon={Spanish} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='English' Icon={English} levelText={'low'} levelValue={0} >
            <Modal Icon={English} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
          <ModalCard title='日本語' Icon={Japanese} levelText={'low'} levelValue={0} >
            <Modal Icon={Japanese} levelText={'low'} levelValue={0} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Soft Skills'>
          <ModalCard title='Title' Icon={Sass} levelText={'low'} levelValue={0} />
        </Collapse>
      </CollapseContainer>
    </>
  )
}

export default Knowledge
