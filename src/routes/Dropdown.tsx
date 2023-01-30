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
            <Modal Icon={Js} title='JavaScript' level={'advanced'} description={'description'} href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} />
          </ModalCard>
          <ModalCard title='C' Icon={C} level={'very basic'} >
            <Modal Icon={C} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='C++' Icon={Cpp} level={'very basic'} >
            <Modal Icon={Cpp} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='C#' Icon={Csharp} level={'very basic'} >
            <Modal Icon={Csharp} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Java' Icon={Java} level={'very basic'} >
            <Modal Icon={Java} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Python' Icon={Python} level={'very basic'} >
            <Modal Icon={Python} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Lua' Icon={Lua} level={'very basic'} >
            <Modal Icon={Lua} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='SQL' Icon={SQL} level={'very basic'} >
            <Modal Icon={SQL} level={'very basic'} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Libraries/Frameworks'>
          <ModalCard title='Mongo' Icon={Mongo} level={'very basic'} >
            <Modal Icon={Mongo} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Express' Icon={Express} level={'very basic'} >
            <Modal Icon={Express} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='React' Icon={ReactLogo} level={'very basic'} >
            <Modal Icon={ReactLogo} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Node' Icon={Node} level={'very basic'} >
            <Modal Icon={Node} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='TypeScript' Icon={TypeScript} level={'very basic'} >
            <Modal Icon={TypeScript} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Redux' Icon={Redux} level={'very basic'} >
            <Modal Icon={Redux} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Jest' Icon={Jest} level={'very basic'} >
            <Modal Icon={Jest} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Git' Icon={Git} level={'very basic'} >
            <Modal Icon={Git} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='Sass' Icon={Sass} level={'very basic'} >
            <Modal Icon={Sass} level={'very basic'} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Languages'>
          <ModalCard title='Español' Icon={Spanish} level={'very basic'} >
            <Modal Icon={Spanish} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='English' Icon={English} level={'very basic'} >
            <Modal Icon={English} level={'very basic'} description={'description'} />
          </ModalCard>
          <ModalCard title='日本語' Icon={Japanese} level={'very basic'} >
            <Modal Icon={Japanese} level={'very basic'} description={'description'} />
          </ModalCard>
        </Collapse>
        <Collapse title='Soft Skills'>
          <ModalCard title='Title' Icon={Sass} level={'very basic'} />
        </Collapse>
      </CollapseContainer>
    </>
  )
}

export default Knowledge
