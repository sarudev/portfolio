import React, { ReactElement } from 'react'
import styled from 'styled-components'
import react from '@/assets/react.svg'
import javascript from '@/assets/javascript.svg'
import typescript from '@/assets/typescript.svg'
import express from '@/assets/express.svg'
import jest from '@/assets/jest.svg'
import mongo from '@/assets/mongo.svg'
import node from '@/assets/node.svg'
import redux from '@/assets/redux.svg'
import sass from '@/assets/sass.svg'
import Card from '@/components/Card'

const CardContainer = styled.div`
  padding: 120px 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-evenly;
  justify-content: space-evenly;
`

function Knowledgement (): ReactElement {
  return (
    <CardContainer>
      <Card icon={mongo} name={'Mongo'} percentage={60} backgroundSize={'95%'} mainColor={'#69b655'} secondaryColor={'black'}/>
      <Card icon={express} name={'Express'} percentage={50} backgroundSize={'95%'} mainColor={'#8CC84B'} secondaryColor={'black'}/>
      <Card icon={react} name={'React'} percentage={80} backgroundSize={'100%'} mainColor={'#0FF'} secondaryColor={'black'}/>
      <Card icon={node} name={'Node'} percentage={80} backgroundSize={'90%'} mainColor={'#3e863d'} secondaryColor={'black'}/>
      <Card icon={javascript} name={'Javascript'} percentage={90} backgroundSize={'95%'} mainColor={'#FF0'} secondaryColor={'black'}/>
      <Card icon={typescript} name={'Typescript'} percentage={60} backgroundSize={'95%'} mainColor={'#007acc'} secondaryColor={'black'}/>
      <Card icon={jest} name={'Jest'} percentage={35} backgroundSize={'80%'} mainColor={'#c63d14'} secondaryColor={'black'}/>
      <Card icon={redux} name={'Redux'} percentage={55} backgroundSize={'80%'} mainColor={'#764ABC'} secondaryColor={'black'}/>
      <Card icon={sass} name={'Sass'} percentage={50} backgroundSize={'90%'} mainColor={'#cd6799'} secondaryColor={'black'}/>
    </CardContainer>
  )
}

export default Knowledgement
