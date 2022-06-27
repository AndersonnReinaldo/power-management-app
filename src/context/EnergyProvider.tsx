import  React,{useEffect, createContext,FC, useState} from 'react';
import io,{ Socket } from 'socket.io-client';
export interface ContextTypeProps {
  currentEnergyConsumption:string | number | any;
  currentMoneyConsumption:string | number | any;
  socket:Socket;

}

export const EnergyContext = createContext<ContextTypeProps | null>(null);

const EnergyProvider: FC<React.ReactNode> = ({ children }) => {
  const [currentEnergyConsumption, setCurrentEnergyConsumption] = useState(0)
  const [currentMoneyConsumption, setCurrentMoneyConsumption] = useState(0)

let socket:Socket

  useEffect(() => {
    socket = io('https://power-management-api.herokuapp.com').emit('auth', {userName:'Anderson', idClient:'62b66e4393b9143bd73ed9ad'});

    socket.on('auth', (data) => {
      const { consumptionKwMonth,consumptionMoneyMonth } = data; 
      setCurrentEnergyConsumption(consumptionKwMonth);
      setCurrentMoneyConsumption(consumptionMoneyMonth)
    })

    socket.on('energyPanel', (data) => {
      setCurrentEnergyConsumption(data)
    })

    socket.on('moneyPanel', (data) => {
      setCurrentMoneyConsumption(data)
    })

  },[])


  const Values:ContextTypeProps = {
    currentEnergyConsumption,
    currentMoneyConsumption,
    socket
  }


  return (
    <EnergyContext.Provider value={Values}>
       {children}
    </EnergyContext.Provider>
  );
};

export default EnergyProvider;