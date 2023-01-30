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
            <Modal Icon={Js} level={'high'} description={'description'} href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} />
          </ModalCard>
          <ModalCard title='C' Icon={C}>
            <Modal Icon={C} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='C++' Icon={Cpp}>
            <Modal Icon={Cpp} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='C#' Icon={Csharp}>
            <Modal Icon={Csharp} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Java' Icon={Java}>
            <Modal Icon={Java} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Python' Icon={Python}>
            <Modal Icon={Python} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Lua' Icon={Lua}>
            <Modal Icon={Lua} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='SQL' Icon={SQL}>
            <Modal Icon={SQL} level={'low'} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Libraries/Frameworks'>
          <ModalCard title='Mongo' Icon={Mongo}>
            <Modal Icon={Mongo} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Express' Icon={Express}>
            <Modal Icon={Express} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='React' Icon={ReactLogo}>
            <Modal Icon={ReactLogo} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Node' Icon={Node}>
            <Modal Icon={Node} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='TypeScript' Icon={TypeScript}>
            <Modal Icon={TypeScript} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Redux' Icon={Redux}>
            <Modal Icon={Redux} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Jest' Icon={Jest}>
            <Modal Icon={Jest} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Git' Icon={Git}>
            <Modal Icon={Git} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='Sass' Icon={Sass}>
            <Modal Icon={Sass} level={'low'} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Languages'>
          <ModalCard title='Español' Icon={Spanish}>
            <Modal Icon={Spanish} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='English' Icon={English}>
            <Modal Icon={English} level={'low'} description={'description'} />
          </ModalCard>
          <ModalCard title='日本語' Icon={Japanese}>
            <Modal Icon={Japanese} level={'low'} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Soft Skills'>
          <ModalCard title='Title' Icon={Sass} />
        </Collapse>
      </CollapseContainer>
    </>
  )
}

export default Knowledge
