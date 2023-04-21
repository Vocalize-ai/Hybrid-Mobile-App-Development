import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login/Login';
import { StatusBar } from 'expo-status-bar';
import Registrar from './src/screens/registrar/Registrar';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar} />
    </Stack.Navigator>
    <StatusBar/>
  </NavigationContainer>
  );
}
