
import React, { useEffect, useState, useRef } from "react";
import { FlatList } from 'react-native';
import { VictoryPie, VictoryTooltip } from 'victory-native';

import { expenses } from '../../utils';

import { Card,CardProps,Header,MonthsProps,IReferenceProps,ContentFilter } from './components'
import { Container, Chart, ModalFilter } from './styles';
import { api } from '../../services/api'

const Analytics = () => {
  const date = new Date();
  const [selected, setSelected] = useState("");
  const [year, setYear] = useState<MonthsProps>(date.getFullYear());
  const [reference, setReference] = useState<IReferenceProps>({
    label:'KV/H',
    value:2
  });
  const [data, setData] = useState<CardProps[]>([]);

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
  }


  return (
    <Container>
      <Header values={{year,reference}} onChangeFilter={onOpenFilter}/>

      <ModalFilter 
        ref={modalizeRef}
        snapPoint={400}
        modalHeight={500}>
          <ContentFilter 
            onSetReference={setReference}
            onSetYear={(value) =>  setYear(value)}
            onCloseFilter={onCloseFilter} />
      </ModalFilter>

      <Chart>
        <VictoryPie
          data={data}
          x="label"
          y="value"
          colorScale={data.map(expense => expense.color)}
          innerRadius={80}
          padAngle={3}
          animate={{
            easing: "bounce"
          }}
          style={{
            labels: {
              fill: '#FFF'
            },
            data: {
              fillOpacity: ({ datum }) => (datum.id === selected || selected === "") ? 1 : 0.3,
              stroke: ({ datum }) => datum.id === selected ? datum.color : 'none',
              strokeOpacity: 0.5,
              strokeWidth: 10
            }
          }}
          labelComponent={
            <VictoryTooltip
              renderInPortal={false}
              flyoutStyle={{
                stroke: 0,
                fill: ({ datum }) => datum.color
              }}
            />
          }
        />
      </Chart>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            data={item}
            selected={false}
            onPress={() => handleCardOnPress(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}


export default Analytics