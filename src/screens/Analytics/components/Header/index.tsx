import React from 'react';

import { AppIcon as Icon } from '../../../../components';
import {
    Container,
    Title,
    BoxContent,
    ButtonFilter,
    ButtonChart,
    LoaderFilter
} from './styles';
import { RenderConditional } from '../../../../components'

export type MonthsProps = any;
export type ReferenceProps = 'R$' | 'KV/H';
export interface IReferenceProps {
  label: ReferenceProps;
  value: string | number
}

type Props = {
  values:any;
  onChangeFilter: () => void;
  onChangeChart: () => void;
};

export function Header({values, onChangeFilter, onChangeChart}: Props) {
  const {year, reference,loading,chartType} = values
  
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

      <ButtonChart onPress={() => onChangeChart()}>
          <RenderConditional isTrue={chartType == 2}>
            <Icon color='#FF8555' name='pie-chart-outline' type='Ionicons'size={30}/>
          </RenderConditional>
          <RenderConditional isTrue={chartType == 1}>
            <Icon color='#FF8555' name='stats-chart-outline' type='Ionicons'size={30}/>
          </RenderConditional>
        </ButtonChart>

        <ButtonFilter onPress={onChangeFilter}>
          <RenderConditional isTrue={!loading}>
            <Icon color='#1BC6B4' name='filter' type='FontAwesome5'size={30}/>
          </RenderConditional>
          <RenderConditional isTrue={loading}>
              <LoaderFilter/>
          </RenderConditional>
        </ButtonFilter>
     </Container>
  )
}


