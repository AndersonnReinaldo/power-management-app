import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";

import { SignIn } from "../../screens";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
            <Screen name="SignIn" component={SignIn} />
        </Navigator>
    )
}
