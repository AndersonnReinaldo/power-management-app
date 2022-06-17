import React,{useState} from 'react';
import {months, references} from '../../../../utils';
import {PickerSelect} from '../../../../components';
import { IReferenceProps } from '../'
import {Container, Box, ButtonFilter, LabelButton} from './styles';

export type YearsProps = string;
export type ReferenceProps = 'R$' | 'KV/H' | any;


type TProps = {
  onSetYear: (year: YearsProps) => void;
  onSetReference: (reference: ReferenceProps) => void;
  onCloseFilter: () => void;
};

const ContentFilter: React.FC<TProps> = ({
  onSetReference,
  onSetYear,
  onCloseFilter
}): JSX.Element => {
  const [year, setYear] = useState<YearsProps>('');
  const [reference, setReference] = useState<IReferenceProps>();

  function setValues(){
    if(!year || !reference) return

    onSetYear(year)
    onSetReference({
      label:reference.label,
      value:reference.value
    })
    onCloseFilter()
  }

  return (
    <Container>
      <Box flex={0.4}>
        <PickerSelect
          data={months}
          placeholder="Selecione o ano"
          libIcon="FontAwesome5"
          nameIcon="calendar"
          colorIcon="#3519e6"
          onSetValue={option => setYear(option.value)}
        />
        <PickerSelect
          data={references}
          placeholder="Selecione a referencia"
          libIcon="FontAwesome5"
          nameIcon="eye"
          colorIcon="#f9ff00"
          onSetValue={option => setReference(option)}
        />
      </Box>
      <Box flex={0.7}>
        <ButtonFilter onPress={setValues}>
          <LabelButton>FILTRAR</LabelButton>
        </ButtonFilter>
      </Box>
    </Container>
  );
};

export default ContentFilter;
