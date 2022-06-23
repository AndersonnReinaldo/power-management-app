import React, { useEffect, useRef, useState } from 'react'
import { Animated,Easing } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { Container,Header,HeaderFooter,Footer,FooterFooter,Title } from './styles'
import { io,Socket } from 'socket.io-client'
import CircularProgress from "../../components/CircularProgress/CircularProgress";


const EnergyConsumption:React.FC = (): JSX.Element => {
  const [currentConsumption, setCurrentConsumption] = useState(0)

  const heigthFooterAnimated = useRef(new Animated.Value(0)).current
  const opacityHeaderAnimated = useRef(new Animated.Value(0)).current
  const isScreenIsFocused = useIsFocused()
  let socket:Socket;

  useEffect(() => {

    
    socket = io('http://192.168.5.110:3740').emit('auth', {userName:'Anderson', userId:'1'});
    socket.on('energyPanel', (data) => {
      setCurrentConsumption(data)
    })

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
        <Title bold={true} size={40}>KW/H 12,800</Title>
      </Header>
      <Footer style={{maxHeight:maxHeightFooter}}>
        <HeaderFooter style={{opacity:opacityHeader}}>
        <Title size={14}>Valor estipulado para o mes</Title>
          <Title bold={true} size={35}>KW {currentConsumption}</Title>
          <Title color='red' size={16}></Title> 
        </HeaderFooter>
        <FooterFooter>
          <CircularProgress value={10} max={100}/>
        </FooterFooter>
      </Footer>
    </Container>
  )
}

export default EnergyConsumption