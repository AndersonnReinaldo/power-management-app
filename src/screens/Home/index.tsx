import React, { useEffect, useRef, useState } from 'react'
import { Animated,Easing } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { Container,Header,HeaderFooter,Footer,FooterFooter,Title } from './styles'

import CircularProgress from "../../components/CircularProgress/CircularProgress";


const Home:React.FC = (): JSX.Element => {
  const [currentConsumption, setCurrentConsumption] = useState(120)
  const [stipulatedConsumption, setStipulatedConsumption] = useState(150)
  const porcent = (currentConsumption / stipulatedConsumption) / 100
  const heigthFooterAnimated = useRef(new Animated.Value(0)).current
  const opacityHeaderAnimated = useRef(new Animated.Value(0)).current
  const isScreenIsFocused = useIsFocused()

  useEffect(() => {

    if(isScreenIsFocused){
      onAnimationFooter(1,1)
    }else {
      onAnimationFooter(0,0)
    }

  },[isScreenIsFocused])

  function onAnimationFooter(valueHeightFooter: number, valueOpacityHeader: number){

    Animated.parallel([
      Animated.timing(heigthFooterAnimated, {
        toValue: valueHeightFooter,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false 
      }),
      Animated.timing(opacityHeaderAnimated, {
        toValue:valueOpacityHeader,
        duration:500,
        useNativeDriver:false
      })
    ]).start()
  }  
  
  const maxHeightFooter = heigthFooterAnimated.interpolate({ 
    inputRange: [0, 1], 
    outputRange: [0, 500]
  });

  const opacityHeader = opacityHeaderAnimated.interpolate({ 
    inputRange: [0, 1], 
    outputRange: [0, 1]
  })


  return (
    <Container>
      <Header style={{opacity:opacityHeader}}>
        <Title size={22}>Consumo atual</Title>
        <Title bold={true} size={50}>R$ {currentConsumption}</Title>
      </Header>
      <Footer style={{maxHeight:maxHeightFooter}}>
        <HeaderFooter style={{opacity:opacityHeader}}>
        <Title size={14}>Valor estipulado para o mes</Title>
          <Title bold={true} size={35}>R$ {stipulatedConsumption}</Title>
          <Title color='red' size={16}></Title> 
        </HeaderFooter>
        <FooterFooter>
          <CircularProgress value={currentConsumption} max={stipulatedConsumption}/>
        </FooterFooter>
      </Footer>
    </Container>
  )
}

export default Home