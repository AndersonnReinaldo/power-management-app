import React from 'react';
import { VictoryPie, VictoryTooltip,VictoryChart,VictoryBar,VictoryTheme } from 'victory-native';

type TChartProps = {
    data: any;
    selected: boolean | string;
  }

export const ChartPie: React.FC<TChartProps> = ({data, selected}):JSX.Element => {

    return(
      <VictoryPie
      data={data}
      x="label"
      y="value"
      colorScale={data.map(expense => expense.color)}
      innerRadius={80}
      padAngle={3}
      animate={{
        easing: "bounce",
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
    )
  
  }
  
export const ChartBar: React.FC<TChartProps> = ({data,selected}):JSX.Element => {
  
    return(
      <VictoryChart 
      theme={VictoryTheme.material}
      domainPadding={10}
      animate={{ duration: 800,onLoad: { duration: 800 }}}>
        <VictoryBar
              style={{
                labels: {
                  fill: 'none'
                },
                data: {
                  fillOpacity: ({ datum }) => (datum.id === selected || selected === "") ? 1 : 0.3,
                  stroke: ({ datum }) => datum.id === selected ? datum.color : 'none',
                  strokeOpacity: 0.5,
                  strokeWidth: 1,
                  fill: ({ datum }) => datum.color
                }
              }}
          alignment="start"
          data={data} 
          x="label"
          y="value"
          colorScale={data.map(expense => expense.color)} />
    </VictoryChart>
    )
  }