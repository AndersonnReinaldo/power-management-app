
import React, { useEffect, useState, useRef } from "react";
import { FlatList } from 'react-native';
import { VictoryPie, VictoryTooltip } from 'victory-native';

import { expenses } from '../../utils';
import { Card,CardProps,Header,MonthsProps,ReferenceProps,ContentFilter } from './components'
import { Container, Chart, ModalFilter } from './styles';

const Analytics = () => {
  const [selected, setSelected] = useState("");
  const [year, setYear] = useState<MonthsProps>('2022');
  const [reference, setReference] = useState<ReferenceProps>('KV/H');
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
    setData(expenses[year]);
  }, [year, reference]);

  return (
    <Container>
      <Header values={{year,reference}} onChangeFilter={onOpenFilter}/>

      <ModalFilter 
        ref={modalizeRef}
        snapPoint={400}
        modalHeight={500}>
          <ContentFilter 
            onSetReference={(value) =>  setReference(value)}
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
        data={expenses[year]}
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