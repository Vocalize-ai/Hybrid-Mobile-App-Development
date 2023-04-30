import Login from '../screens/login/Login';
import Registrar from '../screens/registrar/Registrar.jsx'
import ReceiveHome from '../screens/Home/ReceiveHome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


export default function rotaLogin() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Registrar" component={Registrar} options={{headerShown: false}}/>
        <Stack.Screen name="ReceiveHome" component={ReceiveHome} options={{headerShown: false}}/>
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}
