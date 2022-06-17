import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack"
import AuthRoutes from './auth.routes'

export default function() {
    return(
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
    )
}