import React, {useState,useEffect} from 'react';
import { Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

type TPropsProgress = {
  value: number;
  max?:number;
  color?:string
}


const ProgressUse:React.FC<TPropsProgress> = ({value = 0, max= 100, color= '#3399FF'}) => {

  const [ colorProgress, setColorProgress ] = useState<string>(color);
  const porcent:string = `${parseInt(String((value / max) * 100))}%`
  const percent:number = parseInt(String((value / max) * 100)); 

  useEffect(() => {

    handlerColorStatus()

  },[value,max])

  function handlerColorStatus() {
    
    if( value == max ){
      setColorProgress('green')
    }else if( value > max ){
      setColorProgress('red')
    }else{
      setColorProgress(color)
    }

  }
 
  return (
    <ProgressCircle
        percent={percent}
        radius={100}
        borderWidth={15}
        color={colorProgress}
        shadowColor="#999"
        bgColor="#242424"
    >
        <Text style={{ fontSize: 30, color:'#fff' }}>{percent > 100 ? '100%' : porcent}</Text>
</ProgressCircle>
  );
};


export default ProgressUse;
