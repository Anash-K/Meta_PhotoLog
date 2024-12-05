import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import ProjectSetup from '../screens/ProfileSetup';
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
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
  );
};

export default AuthStack;
