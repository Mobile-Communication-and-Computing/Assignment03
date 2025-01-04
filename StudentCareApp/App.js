import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import Login from './Components/Login';
import Home from './Components/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#70116d" },
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center",
          }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title:"UoV Student Care" }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title:"UoV Student Care" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
