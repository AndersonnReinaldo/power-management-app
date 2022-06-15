import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Home } from '../screens';
import { Tab } from '../components'

const TabNavigation = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown:false
      }}
      tabBar={(props) => <Tab {...props} />}>
      <TabNavigation.Screen name="home" component={Home} />
      <TabNavigation.Screen name="Shop" component={Home} />
      <TabNavigation.Screen name="Favorite" component={Home} />
    </TabNavigation.Navigator>
  )
}

export default TabNavigator
