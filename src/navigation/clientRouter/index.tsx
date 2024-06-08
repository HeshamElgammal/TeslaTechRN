import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ClientParamsList } from '../params'
import HomeClient from 'src/screens/Client/BottomTab/Home'

const RootStack = createNativeStackNavigator<ClientParamsList>()
const ClientNavigation = () => {
    return (
        <>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "simple_push",
                }}
            >
                
                <RootStack.Screen
                    name='HomeClient'
                    component={HomeClient}
                />



            </RootStack.Navigator>
        </>
    )
}

export default ClientNavigation