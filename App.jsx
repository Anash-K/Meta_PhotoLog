import React from 'react';
import {Navigation} from './src/navigation/StackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// console.error = () =>{

// }

function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
