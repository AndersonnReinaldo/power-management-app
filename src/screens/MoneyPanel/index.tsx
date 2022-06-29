import React, { useEffect, useRef, useState, useContext } from 'react'
import { Animated,Easing,Keyboard } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { 
  Container,
  Header,
  HeaderFooter,
  Footer,
  FooterFooter,
  Title,
  ContainerInput,
  BoxInput,
  InputStipulatedValue,
 } from './styles'

import CircularProgress from "../../components/CircularProgress/CircularProgress";
import { EnergyContext } from '../../context/EnergyProvider';
import { RenderConditional } from '../../components';

const MoneyPanel:React.FC = (): JSX.Element => {
  const { currentMoneyConsumption } = useContext(EnergyContext)
  
  const [stipulatedConsumption, setStipulatedConsumption] = useState(150)
  const [inputStipulatedConsumption, setInputStipulatedConsumption] = useState(stipulatedConsumption)
  const [keyboardStatus, setKeyboardStatus] =  useState<boolean>(false)
  ;
  
  const heigthFooterAnimated = useRef(new Animated.Value(0)).current
  const opacityHeaderAnimated = useRef(new Animated.Value(0)).current
  const isScreenIsFocused = useIsFocused()
  
  useEffect(() => {

      if(stipulatedConsumption !== inputStipulatedConsumption){
        setInputStipulatedConsumption(stipulatedConsumption)
      }
    
    if(isScreenIsFocused){
      onAnimationFooter(1,1)
    }else {
      onAnimationFooter(0,0)
    }

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(!keyboardStatus);
    });

    return () => {
      hideSubscription.remove();
    }

  },[isScreenIsFocused, keyboardStatus])

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

  async function onUpdateMaxConsumption(event) {
    if(!event.nativeEvent.text) return
    setStipulatedConsumption(event.nativeEvent.text)
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
        <Title bold={true} size={50}>R$ {currentMoneyConsumption}</Title>
      </Header>
      <Footer style={{maxHeight:maxHeightFooter}}>
        <HeaderFooter style={{opacity:opacityHeader}}>
        <ContainerInput>
          <Title size={14}>Valor estipulado para o mes</Title>
          <BoxInput>
            <Title bold={true} size={35}>R$</Title>
            <InputStipulatedValue
              onSubmitEditing={(event) => onUpdateMaxConsumption(event)}
              bold={true} size={35} 
              value={inputStipulatedConsumption.toString()}
              onChangeText={(value) => setInputStipulatedConsumption(value?.replace(/[^\w\s]/gi, ''))}
              />
          </BoxInput>
          <RenderConditional isTrue={currentMoneyConsumption > stipulatedConsumption}>
              <Title color='red' size={16}>Voce ultrapassou o valor meta</Title> 
          </RenderConditional>
        </ContainerInput>
        </HeaderFooter>
        <FooterFooter>
          <CircularProgress value={currentMoneyConsumption} max={stipulatedConsumption}/>
        </FooterFooter>
      </Footer>
    </Container>
  )
}

export default MoneyPanel