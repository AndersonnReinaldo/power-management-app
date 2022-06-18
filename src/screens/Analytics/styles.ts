import styled from 'styled-components/native';
import {Modalize} from 'react-native-modalize';

export const Container = styled.View`
  flex: 1;
  padding: 16px 16px 0;
  background-color: ${ props => props.theme.background};
  padding-top: 54px;
`;

export const Chart = styled.View`
  width: 100%;
`;

export const ModalFilter = styled(Modalize)`
  background-color: ${ props => props.theme.background};
`