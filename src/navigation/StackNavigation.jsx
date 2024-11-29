import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import ProjectSetup from '../screens/ProfileSetup';
import {BottomNav} from './BottomNavigation';
import ProjectDetails from '../screens/ProjectDetails';
import {GlobalColors} from '../constants/Colors';
import CustomButton from '../components/ui/CustomButton';
import moreIcon from '../assets/images/more.png';
import BackCustomButton from '../components/ui/BackCustomIcon';
import ProjectMap from '../screens/ProjectMap';
import CreateProject from '../components/ui/CreateProject';
import CustomScreenNavigator from '../utils/CustomScreenNavigator';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const navigator = useNavigation();

  const handlePress = () => {};

  const handleNav = (PageName) =>{
    navigator.navigate(PageName);
  }

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
          <Stack.Screen
            component={BottomNav}
            name="BottomNav"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={ProjectDetails}
            name="ProjectDetails"
            options={{
              headerStyle: {
                backgroundColor: GlobalColors.primaryBase,
                height: 150,
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              headerTitleStyle: styles.headerTitleLook,
              headerTitle: 'Project Detail',
              contentStyle: {backgroundColor: '#fff'},
              headerRight: () => (
                <CustomButton
                  OnPressAction={handlePress}
                  Icon={moreIcon}
                  IconStyle={styles.rightIconStyle}
                  pressableContainerStyle={{margin: 0, padding: 0}}
                  containerStyle={{margin: 0, padding: 0}}
                  InnerTextStyle={{fontSize: 1}}
                />
              ),
              headerLeft: ({navigation}) => <BackCustomButton />,
            }}
          />
          <Stack.Screen
            component={ProjectMap}
            name="ProjectMap"
            options={{
              headerStyle: {
                backgroundColor: GlobalColors.primaryBase,
                height: 150,
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              headerTitleStyle: styles.headerTitleLook,
              headerTitle: 'Project Map',
              contentStyle: {backgroundColor: '#fff'},
              headerLeft: ({navigation}) => <BackCustomButton />,
            }}
          />
          <Stack.Screen
            component={CreateProject}
            name="CreateProject"
            options={{
              headerStyle: {
                backgroundColor: GlobalColors.primaryBase,
                height: 150,
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              headerTitleStyle: styles.headerTitleLook,
              headerTitle: 'Create Project',
              contentStyle: {backgroundColor: '#fff'},
              headerLeft: ({navigation}) => <BackCustomButton />,
            }}
          />
        </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  rightIconStyle: {
    width: 4,
    height: 14,
  },
  headerTitleLook: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },
});
