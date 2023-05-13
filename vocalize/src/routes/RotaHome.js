import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/Home/components/Home';
import Fatura from '../screens/Fatura/Fatura';
import Contrate from '../screens/Contrate/Contrate';
import Chamados from '../screens/Chamados/Chamados';

export default function RotaHome() {

    const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    > 
      <Tab.Screen name = "Home" component={Home}/>
      <Tab.Screen name = "Fatura" component={Fatura}/>
      <Tab.Screen name = "Contrate" component={Contrate}/>
      <Tab.Screen name = "Chamados" component={Chamados}/>
    </Tab.Navigator>

  )
}
