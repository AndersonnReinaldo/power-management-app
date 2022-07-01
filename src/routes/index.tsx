import React,{ useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SignInRoutes from "./Stack/signIn.routes"
import AuthRoutes from './auth.routes'
import { EnergyContext } from "../context/EnergyProvider";

export default function() {
    const { isLogged } = useContext(EnergyContext)
    return(
        <NavigationContainer>
            {isLogged ? <AuthRoutes/> : <SignInRoutes/>} 
        </NavigationContainer>
    )
}