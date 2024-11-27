import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import ProjectSetup from './src/screens/ProfileSetup';
import {StatusBar, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Projects from './src/screens/Projects';
import CustomIcon from './src/components/ui/CustomIcon';
import ProjectsIcon from './src/assets/images/ProjectsIcon.png';
import {GlobalColors} from './src/constants/Colors';
import CustomButton from './src/components/ui/CustomButton';
import {fontFamily} from './android/app/src/main/assets/GlobalFont';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// console.error = () =>{

// }

const BottomNav = () => {
  const handlePress = () => {
    console.log('pressed');
  };

  return (
    <View style={{flex: 1}}>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: GlobalColors.primaryBase , height: 120,},
          headerTintColor: '#FFFFFF',
          tabBarActiveTintColor: '#FFFFFF',
          tabBarActiveBackgroundColor: '#FFFFFF26',
          tabBarBackground: () => (
            <View
              style={{backgroundColor: GlobalColors.primaryBase, flex: 1}}
            />
          ),
        }}>
        <BottomTab.Screen
          component={Projects}
          name="Projects"
          options={{
            title: 'Projects',
            tabBarIcon: ({color, size}) => (
              <CustomIcon
                srcPath={ProjectsIcon}
                size={size}
                color={color}
                OnPressAction={handlePress}
              />
            ),
            headerLeft: () => null,
            headerTitleAlign: 'left',
            headerTitleStyle: styles.navHeaderTitle,
            headerRight: () => (
              <CustomButton
                containerStyle={styles.headerRightContainer}
                pressableContainerStyle={styles.headerRightIcon}
                OnPressAction={handlePress}
                buttonTitle={'+  New project'}
                InnerTextStyle={styles.headerRightIconText}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
};

const Navigation = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
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
          <Stack.Screen
            component={BottomNav}
            name="BottomNav"
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

function App() {
  return <Navigation />;
}

export default App;

const styles = StyleSheet.create({
  navHeaderTitle: {
    backgroundColor: GlobalColors.primaryBase,
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },
  headerRightContainer:{
  },
  headerRightIcon: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 14,
  },
  headerRightIconText: {
    color: GlobalColors.primaryBase,
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
  },
});
