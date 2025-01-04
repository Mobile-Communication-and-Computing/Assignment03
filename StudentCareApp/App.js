import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import Login from './Components/Login';
import Profile from './Components/Profile';
import BottomTab from './Components/BottomTab';

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
          }}
          initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title:"UoV Student Care" }}
            />
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{ headerShown: true, title:"UoV Student Care"}}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
