import { View, Text } from 'react-native'
import React from 'react'

interface IProps {
    children:any,
    isTrue:boolean
}

const RenderConditional:React.FC<IProps> = ({children,isTrue}):JSX.Element => {
  return isTrue ? children : null
}

export default RenderConditional