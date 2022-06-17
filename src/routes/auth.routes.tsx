import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home,Analytics,EnergyConsumption } from '../screens';
import { Tab } from '../components'

const TabNavigation = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown:false
      }}
      tabBar={(props) => <Tab {...props} />}>
      <TabNavigation.Screen name="energyconsumption" component={EnergyConsumption} />
      <TabNavigation.Screen name="home" component={Home} />
      <TabNavigation.Screen name="analytics" component={Analytics} />
    </TabNavigation.Navigator>
  )
}

export default TabNavigator
