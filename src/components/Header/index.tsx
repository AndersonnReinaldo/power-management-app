import React, {useRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Picker} from '@react-native-picker/picker';

import {Container, Title, MonthPicker} from './styles';

import {months} from '../../utils';

export type MonthsProps = any;

type Props = {
  selectedValue: MonthsProps;
  onValueChange: (value: MonthsProps) => void;
};

export function Header({selectedValue, onValueChange}: Props) {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpen}>
        <Text>ABRIR</Text>
      </TouchableOpacity>

      <Modalize 
      ref={modalizeRef}
      snapPoint={180}
      modalHeight={180} //500
      // HeaderComponent={
      //   <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, width: '100%', height: 50, backgroundColor: '#121212'}}>
      //     <Text style={{textAlign: 'center', color: '#FFF', fontSize: 25}}>BEM VINDO</Text>
      //   </View>
      // }
      >
        <View 
        style={{
          flex:1, 
          height: 180, 
          flexDirection: 'row', 
          justifyContent: 'space-around', 
          alignItems: 'center'
          }}
        >
          <TouchableOpacity style={[styles.buttons, {backgroundColor: '#29ae19'} ]}>
            <Text style={{ color: '#FFF', fontWeight: 'bold'}}>EDITAR </Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.buttons, {backgroundColor: '#FF0000'} ]}>
          <Text style={{ color: '#FFF', fontWeight: 'bold'}}>EXCLUIR </Text>
          </TouchableOpacity> 
        </View>
      </Modalize>
    </View>
  );
}

const ChildModal = ({selectedValue, onValueChange}: Props) => {
  
  return(
    <Container>
    <MonthPicker
      selectedValue={selectedValue}
      onValueChange={(itemValue: MonthsProps) =>
        onValueChange(itemValue)
      }>
      {months.map(item => (
        <Picker.Item
          key={item.label}
          label={item.label}
          value={item.label}
        />
      ))}
    </MonthPicker>
  </Container>
  )
}


const styles = StyleSheet.create({
  container: {
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 7,
  }
})