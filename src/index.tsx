import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { useColorScheme, StatusBar,LogBox } from 'react-native'
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import themes from './theme';
import EnergyProvider from './context/EnergyProvider'

import ignoreWarnings from 'ignore-warnings';
ignoreWarnings('warn',['ViewPropTypes','[react-native-gesture-handler]'])
LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])


const Index = () => { 
    //dark, light, null, undefined
    const deviceTheme = useColorScheme();

    const theme = themes[deviceTheme] || themes.dark
    
    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <EnergyProvider>
                <ThemeProvider theme={theme}>
                    <StatusBar backgroundColor={theme.background}/>
                    <Routes/>
                </ThemeProvider>
            </EnergyProvider>
        </GestureHandlerRootView>
    ) 
}

export default Index;