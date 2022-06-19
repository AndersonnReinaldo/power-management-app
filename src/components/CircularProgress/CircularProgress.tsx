import React from 'react';
import { Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

type TPropsProgress = {
  value: number;
  max?:number;
  color?:string
}


const ProgressUse:React.FC<TPropsProgress> = ({value = 0, max= 100, color= '#3399FF'}) => {

  const porcent:string = `${parseInt(String((value / max) * 100))}%`
  const percent:number = parseInt(String((value / max) * 100)); 
 
  console.log(percent)
  return (
    <ProgressCircle
        percent={percent}
        radius={100}
        borderWidth={15}
        color={color}
        shadowColor="#999"
        bgColor="#242424"
    >
        <Text style={{ fontSize: 30, color:'#fff' }}>{percent > 100 ? '100%' : porcent}</Text>
</ProgressCircle>
  );
};


export default ProgressUse;
