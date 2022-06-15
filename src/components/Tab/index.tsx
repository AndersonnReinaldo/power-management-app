import React from 'react';

import Colors from "../../constants/Colors";
import AppIcon,{ Icons } from '../AppIcon/AppIcon';
import { RenderConditional } from '../'

import { BackgroundGradient,ContainerIcon,ContainerBottomTab, Button } from './styles';

const BottomTab = ({ type, color, size = 24, isFocused, index }) => {
    const icon = index == 0 ? 'home' : 'chart-bar';
    const gradient = index == 1;

    return (
      <>
      <RenderConditional isTrue={gradient}>
        <BackgroundGradient start={{ x: isFocused ? 0 : 1, y: 0 }} end={{ x: isFocused ? 1 : 0, y: 0 }}>
          <AppIcon name={'dollar-sign'} type={type} size={size} color={'white'} />
        </BackgroundGradient>
      </RenderConditional>
      <RenderConditional isTrue={!gradient}>
        <ContainerIcon>
          <AppIcon name={icon} type={type} size={size} color={color} />
        </ContainerIcon>
      </RenderConditional>
      </>
    )
  }
  
  const Tab:React.FC<any> = ({ state, descriptors, navigation }) => {
    return (
      <ContainerBottomTab>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
  
          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress',target: route.key })
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }

          const color = isFocused ? Colors.dark : Colors.gray;
          
          return (
            <Button key={index} onPress={onPress} testID={options.tabBarTestID} accessibilityRole="button">
              <BottomTab
                type={Icons.FontAwesome5}
                index={index}
                isFocused={isFocused}
                size={24}
                color={color}
              />
            </Button>
          )
        })}
      </ContainerBottomTab>
    )
  }
  
export default Tab;

