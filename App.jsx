import React, {useContext} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext, AuthProvider} from './src/auth/AuthContext';
import {Navigation} from './src/navigation/StackNavigation';
import AuthStack from './src/navigation/AuthStack';

// console.error = () => {};

export const navigationRef = React.createRef();

function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <NavigationContainer ref={navigationRef}>
          <AuthState />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

function AuthState() {
  const {isLogin} = useContext(AuthContext);

  return isLogin ? <Navigation /> : <AuthStack />;
}

export default App;
