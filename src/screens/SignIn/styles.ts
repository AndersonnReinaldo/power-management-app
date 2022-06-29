import styled from 'styled-components/native';
import {normalize} from '../../utils';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
`;

// Header
export const HeaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TopHeaderBox = styled.View`
  flex: 1;
  width: 100%;
  padding-horizontal: 10px;
  justify-content: center;
  align-items: flex-start;
`;

export const FooterHeaderBox = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
  padding-horizontal: 10px;
  align-items: flex-start;
`;

// Body inputs
export const ContainerInputs = styled.View`
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const ContainerFooter = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

// Components
export const Text = styled.Text`
  font-size: ${({size}) => (size ? normalize(size) : normalize(50))}px;
  font-weight: ${({bold}) => (bold ? bold : 200)};
  color: ${({theme, color}) => (color ? color : theme.fontOne)};
  margin-vertical: ${({marginVertical}) =>
    marginVertical ? marginVertical : 0}px;
`;

export const ButtonSignIn = styled.TouchableOpacity.attrs({
    activeOpacity:0.9
})`
  height: 50px;
  width: 80%;
  background-color: #EEF5DB;
  border-radius: 10px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin-vertical: 20px;
`;

export const BoxInput = styled.View`
flex-direction: row;
 width: 100%;
 height: 55px;
 border-radius: 10px;
 border-width: 1px;
 border-color: #32323A;
 align-items: center;
 justify-content: flex-start;
 margin-vertical:10px;
 padding: 5px;
`
export const Input = styled.TextInput`
width: 90%;
font-weight: bold;
color: #EEF5DB;
`