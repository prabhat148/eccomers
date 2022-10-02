import React from 'react'
import styled from 'styled-components'
import { mobile } from '../resposive '
import CategoryItem from './CategoryItem'
import {CategoryItems} from './Data'


const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile ({padding:'0px',flexDirection:'column'}) }
`

const Cotogory = () => {
  return (
    <Container>
     {CategoryItems.map(items=>
     (<CategoryItem  items={items} key={items.id}/>))}
    </Container>
  )
}

export default Cotogory
