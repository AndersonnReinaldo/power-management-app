import React from 'react';

import { AppIcon as Icon } from '../../../../components';
import {Container, Title, BoxContent, ButtonFilter} from './styles';

export type MonthsProps = any;
export type ReferenceProps = 'R$' | 'KV/H';

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
        <Icon name='eye' color='red' size={30} type='FontAwesome5' />
        <Title>{reference}</Title>
      </BoxContent>

      <BoxContent>
        <Icon  name='calendar' color='green' size={30} type='FontAwesome5' />
        <Title>{year}</Title>
      </BoxContent>
        <ButtonFilter onPress={onChangeFilter}>
          <Icon color='#ccc' name='searchengin' type='FontAwesome5'size={40}/>
        </ButtonFilter>
     </Container>
  )
}


