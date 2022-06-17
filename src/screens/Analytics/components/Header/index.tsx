import React from 'react';

import { AppIcon as Icon } from '../../../../components';
import {Container, Title, BoxContent, ButtonFilter} from './styles';

export type MonthsProps = any;
export type ReferenceProps = 'R$' | 'KV/H';
export interface IReferenceProps {
  label: ReferenceProps;
  value: string | number
}

type Tvalues =  {
  month:MonthsProps;
  reference:ReferenceProps
}


type Props = {
  values:any;
  onChangeFilter: () => void;
};

export function Header({values, onChangeFilter}: Props) {
  const {year, reference} = values
  
  return(
    <Container>
      <BoxContent>
        <Icon name='eye' color='#f9ff00' size={30} type='FontAwesome5' />
        <Title>{reference.label}</Title>
      </BoxContent>

      <BoxContent>
        <Icon  name='calendar' color='#3519e6' size={30} type='FontAwesome5' />
        <Title>{year}</Title>
      </BoxContent>
        <ButtonFilter onPress={onChangeFilter}>
          <Icon color='#1BC6B4' name='filter' type='FontAwesome5'size={30}/>
        </ButtonFilter>
     </Container>
  )
}


