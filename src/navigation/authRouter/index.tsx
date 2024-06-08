import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from 'src/screens/Auth/Login'
import Signup from 'src/screens/Auth/Signup'
import { AuthParamsList } from '../params'
import ForgetPassword from 'src/screens/Auth/ForgetPassword'
const AuthStack = createNativeStackNavigator<AuthParamsList>()
const AuthNavigation = () => {
    return (
        <>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false,
                    // animation: "fade_from_bottom"
                }}
            >
                <AuthStack.Screen
                    name="Login"
                    component={Login}
                />
                <AuthStack.Screen
                    name="Signup"
                    component={Signup}
                />
                <AuthStack.Screen
                    name='ForgetPassword'
                    component={ForgetPassword}
                />
            </AuthStack.Navigator>
        </>
    )
}

export default AuthNavigation