import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './roots'


const AppRouter = () => {

    return (
        <>
            <NavigationContainer>
                <RootNavigation />
            </NavigationContainer>
        </>

    )
}

export default AppRouter