import styled from 'styled-components/native';
import {Picker} from '@react-native-picker/picker';

export const PickerSelectContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.background};
  border-radius: 10px;
  padding: 10px;
`;

export const TextPickerSelect = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.fontOne};
  text-align: center;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerOptions = styled.View`
  width: 80%;
  background-color: ${props => props.theme.background};
  margin: 10px;
  border-radius: 10px;
  max-height: 300px;
`;

export const Option = styled.Pressable`
  flex: 1;
  background-color: ${props => props.theme.secundary};
  justify-content: center;
  align-items: center;
  elevation: 8;
  padding: 10px;
  margin-bottom: 1.5px;
`;
export const LabelOption = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.fontOne};
  text-align: center;
`;
