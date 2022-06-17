import React, { useState } from 'react'
import { Modal,FlatList } from 'react-native'
import { 
    Container,
    PickerSelectContainer,
    TextPickerSelect,
    ContainerOptions,
    LabelOption,
    Option
  } from './styles';
import { AppIcon as Icon,TIcons } from '../'

type TPropsPickerSelect = {
    data: Array<any>;
    placeholder:string;
    defaultValue:string | number;
    libIcon: TIcons;
    nameIcon:string;
    onSetValue:(value) => void
  }

  type TPropsOptions = {
    data: Array<any>;
    isOpen: boolean;
    onClose:() => void
    onChange:(value) => void
  }

  type TPropsOptionsItem = {
    value: any;
    label:string;
  }

  
const PickerSelect: React.FC<TPropsPickerSelect> = ({
  data,
  defaultValue,
  placeholder,
  libIcon,
  nameIcon,
  onSetValue
}): JSX.Element => {
  const [valueSelected, setValueSelected] = useState<any>('')
  const [openOptions, setOpenModalOptions] = useState<boolean>(false)

  function handleOpenOptions(): void {
    setOpenModalOptions(!openOptions)
  }

  function onChangeValue(value){
    onSetValue(value)
    setValueSelected(value)
  }

  return (
    <>
      <PickerSelectContainer onPress={handleOpenOptions}>
        <TextPickerSelect>{valueSelected ? valueSelected.label : placeholder}</TextPickerSelect>
        <Icon color='red' name={nameIcon} type={libIcon} />
      </PickerSelectContainer>
      <Options 
        data={data}
        isOpen={openOptions}
        onClose={handleOpenOptions}
        onChange={onChangeValue}
        />
    </>
  );
};

export default PickerSelect;

const Options:React.FC<TPropsOptions> = ({data,isOpen,onClose,onChange}):JSX.Element => {

  function onHandleOption(option){
    onChange(option)
    onClose();
  }

  const renderItem = ({ item }) => (
    <Option onPress={() => onHandleOption(item)}>
      <LabelOption>{item.label}</LabelOption>
    </Option>
  );

 return(
    <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onClose}>
      <Container>
        <ContainerOptions> 
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        </ContainerOptions>
      </Container>
    </Modal>
 )

}