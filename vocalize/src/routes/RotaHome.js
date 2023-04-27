import { NavigationContainer } from '@react-navigation/native'
import { Tab } from 'bootstrap'
import React from 'react'
import Home from '../screens/Home/Home'

export default function RotaHome() {
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
