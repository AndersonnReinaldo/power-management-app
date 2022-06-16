import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const MonthPicker = styled(Picker)`
 background-color: ${ props => props.theme.secundary};
 height: 50px;
 flex: 1;
 margin-left: 50px;
 border-radius: 10px;
`