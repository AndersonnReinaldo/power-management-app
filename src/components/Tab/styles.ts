import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/Colors';

export const BackgroundGradient = styled(LinearGradient).attrs({
  colors: [colors.light, colors.dark],
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.6,
})`
    bottom: 18px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: red;
    justify-content: center;
    align-items: center;
    elevation: 8;
`;

export const ContainerIcon = styled.View`
`

export const ContainerBottomTab = styled.View`
    height: 60px;
    background-color: ${ props => props.theme.background};
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity:0.8
})`
`