import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  paddingHorizontal:10
})`
  flex: 1;
  flex-direction: column;
  height: 500px;
  justify-content: space-around;
  background-color: ${props => props.theme.secundary};
`;

export const Box = styled.View`
  flex:${props => props.flex ? props.flex : 1 };
  flex-direction: column;
  justify-content: space-around;
`

export const ButtonFilter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.success};
  border-radius: 10px;
  padding: 10px;
`;

export const LabelButton = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.fontOne};
  font-weight: bold;
  text-align: center;

`