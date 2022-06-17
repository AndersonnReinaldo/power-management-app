import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled.SafeAreaView`
    flex: 1;
    margin: 0;
    padding: 0;
    background-color: ${ props => props.theme.background};
    padding-top: ${getStatusBarHeight()}px;
`

export const Card = styled.View.attrs({
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
})`
    flex:1;
    background-color: ${ props => props.theme.secundary};
    justify-content: center;
    align-items: center;
    margin: ${getStatusBarHeight() - 10}px;
    border-radius: 8px;
    elevation: 8;
    
`

export const Title = styled.Text`
    font-size:25px;
    color: ${ props => props.theme.fontOne};

`