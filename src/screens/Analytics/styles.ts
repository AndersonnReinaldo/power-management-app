import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px 16px 0;
  background-color: ${ props => props.theme.background};
  padding-top: 54px;
`;

export const Chart = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: center;
`;