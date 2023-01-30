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
          <ModalCard title='JavaScript' Icon={Js} level={'advanced'} >
            <Modal Icon={Js} title='JavaScript' level={'advanced'} href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} />
          </ModalCard>
          <ModalCard title='C' Icon={C} level={'very basic'} >
            <Modal Icon={C} title='C' level={'very basic'} />
          </ModalCard>
          <ModalCard title='C++' Icon={Cpp} level={'very basic'} >
            <Modal Icon={Cpp} title='C++' level={'very basic'} />
          </ModalCard>
          <ModalCard title='C#' Icon={Csharp} level={'very basic'} >
            <Modal Icon={Csharp} title='C#' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Java' Icon={Java} level={'very basic'} >
            <Modal Icon={Java} title='Java' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Python' Icon={Python} level={'very basic'} >
            <Modal Icon={Python} title='Python' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Lua' Icon={Lua} level={'very basic'} >
            <Modal Icon={Lua} title='Lua' level={'very basic'} />
          </ModalCard>
          <ModalCard title='SQL' Icon={SQL} level={'very basic'} >
            <Modal Icon={SQL} title='SQL' level={'very basic'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Libraries/Frameworks'>
          <ModalCard title='Mongo' Icon={Mongo} level={'very basic'} >
            <Modal Icon={Mongo} title='Mongo' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Express' Icon={Express} level={'very basic'} >
            <Modal Icon={Express} title='Express' level={'very basic'} />
          </ModalCard>
          <ModalCard title='React' Icon={ReactLogo} level={'very basic'} >
            <Modal Icon={ReactLogo} title='React' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Node' Icon={Node} level={'very basic'} >
            <Modal Icon={Node} title='Node' level={'very basic'} />
          </ModalCard>
          <ModalCard title='TypeScript' Icon={TypeScript} level={'very basic'} >
            <Modal Icon={TypeScript} title='TypeScript' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Redux' Icon={Redux} level={'very basic'} >
            <Modal Icon={Redux} title='Redux' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Jest' Icon={Jest} level={'very basic'} >
            <Modal Icon={Jest} title='Jest' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Git' Icon={Git} level={'very basic'} >
            <Modal Icon={Git} title='Git' level={'very basic'} />
          </ModalCard>
          <ModalCard title='Sass' Icon={Sass} level={'very basic'} >
            <Modal Icon={Sass} title='Sass' level={'very basic'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Languages'>
          <ModalCard title='Español' Icon={Spanish} level={'very basic'} >
            <Modal Icon={Spanish} title='Español' level={'very basic'} />
          </ModalCard>
          <ModalCard title='English' Icon={English} level={'very basic'} >
            <Modal Icon={English} title='English' level={'very basic'} />
          </ModalCard>
          <ModalCard title='日本語' Icon={Japanese} level={'very basic'} >
            <Modal Icon={Japanese} title='日本語' level={'very basic'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Soft Skills'>
          <ModalCard title='Title' Icon={Sass} level={'very basic'}>
            <Modal title='Title'>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Modal>
          </ModalCard>
        </Collapse>
      </CollapseContainer>
    </>
  )
}

export default Knowledge
