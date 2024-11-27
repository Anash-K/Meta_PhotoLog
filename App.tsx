import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import ProjectSetup from './src/screens/ProfileSetup';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Login}
            name="login"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={CreateAccount}
            name="createAccount"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={ProjectSetup}
            name="projectSetup"
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
