import React, {useContext, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext, AuthProvider} from './src/auth/AuthContext';
import {Navigation} from './src/navigation/StackNavigation';
import AuthStack from './src/navigation/AuthStack';
import BootSplash from 'react-native-bootsplash';

console.error = () => {};

export const navigationRef = React.createRef();

function App() {
  useEffect(() => {
    const init = async () => {
      // Perform any necessary tasks here, such as:
      // - Fetching user preferences
      // - Checking token validity
      // - Preparing any resources
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true}); // Hides the splash screen
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

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
