import React,{ useContext } from 'react'
import { Platform } from 'react-native'
import { AppIcon } from '../../components'
import { EnergyContext } from '../../context/EnergyProvider'

import {
    Container,
    HeaderContainer,
    TopHeaderBox,
    FooterHeaderBox,
    ContainerInputs,
    ContainerFooter,
    Text,
    ButtonSignIn,
    BoxInput,
    Input
} from './styles'

const SignIn:React.FC = ():JSX.Element => {
    const { setClient } = useContext(EnergyContext)
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <HeaderContainer>
            <TopHeaderBox>
                {/* <AppIcon size={40} color='#EEF5DB' name='arrow-left-top' type='MaterialCommunityIcons'/> */}
            </TopHeaderBox>
            <FooterHeaderBox>
                <Text size={30} bold={400} marginVertical={7}>Vamos fazer seu login.</Text>
                <Text size={25} bold={200}>Bem vindo de volta.</Text>
                <Text size={25} bold={200}>Você fez falta!</Text>
            </FooterHeaderBox>
        </HeaderContainer> 

        <ContainerInputs>
            <BoxInput>
                <AppIcon size={30} color='#EEF5DB' name='account' type='MaterialCommunityIcons'/>
                <Input placeholder='Nome de usuário'/>
            </BoxInput>

            <BoxInput>
                <AppIcon size={30} color='#EEF5DB' name='lock' type='MaterialCommunityIcons'/>
                <Input placeholder='Senha'/>
            </BoxInput>
        </ContainerInputs>

        <ContainerFooter>
            <ButtonSignIn onPress={() => setClient(true)}>
                <Text size={20} color='#2D2D31' bold='400'>Entrar</Text>
            </ButtonSignIn>
        </ContainerFooter>

    </Container>
  )
}

export default SignIn
