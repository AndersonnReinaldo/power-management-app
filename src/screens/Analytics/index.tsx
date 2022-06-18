import React, { useEffect, useState, useRef } from "react";
import { FlatList } from 'react-native';
import { 
    Card,
    CardProps,
    Header,
    MonthsProps,
    IReferenceProps,
    ContentFilter,
    ChartPie,
    ChartBar
} from './components'
import { Container, Chart, ModalFilter } from './styles';
import { api } from '../../services/api'
import { expenses } from '../../utils';
import { RenderConditional } from "../../components";

const Analytics = () => {
  const date = new Date();
  const [selected, setSelected] = useState("");
  const [year, setYear] = useState<MonthsProps>(date.getFullYear());
  const [reference, setReference] = useState<IReferenceProps>({
    label:'KV/H',
    value:2
  });
  const [data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [chartType, setChartType] = useState<number>(2);

  const modalizeRef = useRef(null);

  const onOpenFilter = () => {
    modalizeRef.current?.open();
  };

  const onCloseFilter = () => {
    modalizeRef.current?.close();
  };

  function handleCardOnPress(id: string) {
    setSelected(prev => prev === id ? "" : id);
  }

  useEffect(() => {
    init()
  }, [year, reference]);

  const init = async() => {
    setLoading(true)
    const attrs = {
        identifier : reference.value,
        year
    }

    api.post('findConsumptionYear',attrs)
    .then(res => {
      const { dataGrafic } = res.data;
      setData(dataGrafic)
    })
    .catch(err => console.error(err.response.message))
    .finally(() => setLoading(false))
  }

  function renderChartType(){

      if(chartType === 1){
        setChartType(2)
      }else if(chartType == 2){
        setChartType(1)
      }
  }

  const renderItem = ({ item }) => (
    <Card
      data={item}
      selected={false}
      onPress={() => handleCardOnPress(item.id)}
    />
  )

  return (
    <Container>
      <Header values={{year,reference,loading,chartType}} onChangeFilter={onOpenFilter} onChangeChart={renderChartType}/>

      <ModalFilter ref={modalizeRef} snapPoint={400} modalHeight={500}>
          <ContentFilter 
            onSetReference={setReference}
            onSetYear={(value) =>  setYear(value)}
            onCloseFilter={onCloseFilter} 
          />
      </ModalFilter>

      <Chart>
        <RenderConditional isTrue={ chartType == 1 }>
          <ChartPie data={data} selected={selected}/>
        </RenderConditional>
        <RenderConditional isTrue={ chartType == 2 }>
          <ChartBar data={data} selected={selected}/>
        </RenderConditional>
      </Chart>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default Analytics

