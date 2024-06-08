import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import ClientNavigation from './ClientRouter'
// import AuthNavigation from './AuthRouter'
import { AppParamsList } from './params'
import ClientNavigation from './clientRouter'
import AuthNavigation from './authRouter'

const RootNavigator = createNativeStackNavigator<AppParamsList>()
const RootNavigation = () => {



    return (
        <>
            <RootNavigator.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                
               
                <RootNavigator.Screen name='Client' component={ClientNavigation} />
                <RootNavigator.Screen name='Auth' component={AuthNavigation} />



            </RootNavigator.Navigator>
        </>
    )
}

export default RootNavigation