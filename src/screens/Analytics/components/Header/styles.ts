import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.fontOne};
  font-weight: bold;
`;

export const BoxContent = styled.View`
 flex:2;
 flex-direction: row;
 elevation:8;
 height: 45px;
 margin-left: 10px;
 background-color: ${props => props.theme.secundary};
 justify-content: space-evenly;
 align-items: center;
 border-radius: 10px;
`

export const ButtonFilter = styled.TouchableOpacity.attrs({
  activeOpacity:0.9
})`
 flex:1;
 justify-content: center;
 align-items: center;
`
