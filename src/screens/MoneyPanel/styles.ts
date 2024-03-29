import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Animated } from 'react-native'
import { normalize } from '../../utils'
import Colors from "../../constants/Colors";

export const Container = styled.SafeAreaView`
    flex: 1;
    margin: 0;
    padding: 0;
    background-color: ${ props => props.theme.background};
    padding-top: ${getStatusBarHeight()}px;
`
export const Header = styled(Animated.View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const HeaderFooter = styled(Animated.View)`
    flex:1.5;
    justify-content: center;
    align-items: center;
`

export const Footer = styled(Animated.View).attrs({
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
})`
    height: ${ ({heightAnimated}) => heightAnimated ? heightAnimated : 400}px;
    background-color: ${ props => props.theme.secundary};
    justify-content: center;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    elevation: 8; 
`

export const FooterFooter = styled(Animated.View)`
    flex: 3;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size:${ ({size})  =>  size ? normalize(size) : normalize(50)}px;
    font-weight: ${ ({bold})  =>  bold ? 'bold' : 200};
    color: ${ ({theme, color}) => color ? color : theme.fontOne };

`

export const ContainerInput = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const BoxInput =  styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
export const InputStipulatedValue = styled.TextInput.attrs({ 
    keyboardType:"number-pad",
    selectionColor : Colors.dark
})`
    font-size:${ ({size})  =>  size ? normalize(size) : normalize(50)}px;
    font-weight: ${ ({bold})  =>  bold ? 'bold' : 200};
    color: ${ ({theme, color}) => color ? color : theme.fontOne };
`