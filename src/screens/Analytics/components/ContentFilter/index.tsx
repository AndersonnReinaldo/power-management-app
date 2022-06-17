import React,{useState} from 'react';
import {months, references} from '../../../../utils';
import {PickerSelect} from '../../../../components';
import {Container, Box, ButtonFilter, LabelButton} from './styles';
export type YearsProps = string;
export type ReferenceProps = 'R$' | 'KV/H' | any;

type Tvalues = {
  month: YearsProps;
  reference: ReferenceProps;
};

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
  const [reference, setReference] = useState<ReferenceProps>('');

  function setValues(){
    if(!year || !reference) return

    onSetYear(year)
    onSetReference(reference)
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
          defaultValue="1"
          onSetValue={option => setYear(option.value)}
        />
        <PickerSelect
          data={references}
          placeholder="Selecione a referencia"
          libIcon="FontAwesome5"
          nameIcon="eye"
          defaultValue="1"
          onSetValue={option => setReference(option.value)}
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
