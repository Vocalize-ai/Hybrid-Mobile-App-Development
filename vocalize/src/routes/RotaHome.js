import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home/ReceiveHome'

export default function RotaHome() {

    const Tab = createNativeTabNavigator();

  return (
    <>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Home" component={Home} options={{headersShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    </>
  )
}
