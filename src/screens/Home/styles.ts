import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled.View`
    flex: 1;
    margin: 0;
    padding: 0;
    background-color: ${ props => props.theme.background};
    padding-top: ${getStatusBarHeight()}px;
`