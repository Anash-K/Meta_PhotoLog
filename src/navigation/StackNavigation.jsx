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
import CapturePhotos from '../screens/CapturePhotos';
import EditPhoto from '../screens/EditPhoto';
import backIcon from '../assets/images/backIcon.png';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const navigator = useNavigation();

  const handlePress = () => {};

  const handleNav = PageName => {
    navigator.navigate(PageName);
  };

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: GlobalColors.primaryBase,
          height: 100,
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitleLook,
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
        headerLeft: () => (
          <CustomButton
            OnPressAction={() => navigation.goBack()}
            Icon={backIcon}
            IconStyle={styles.backButtonIcon}
            pressableContainerStyle={styles.backButtonStyle}
            containerStyle={{margin: 0, padding: 0}}
            pressableStyle={styles.backButtonContainer}
            InnerTextStyle={{fontSize: 1}}
          />
        ),
      })}>
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
          headerTitle: 'Project Detail',
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
        }}
      />
      <Stack.Screen
        component={ProjectMap}
        name="ProjectMap"
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Project Map',
        }}
      />
      <Stack.Screen
        component={CreateProject}
        name="CreateProject"
        options={{
          headerTitle: 'Create Project',
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        component={CapturePhotos}
        name="CapturePhotos"
        options={{
          title: 'Capture Photos',
          headerStyle: {
            backgroundColor: GlobalColors.primaryBase,
            height: 300,
          },
        }}
      />
      <Stack.Screen
        component={EditPhoto}
        name="EditPhoto"
        options={{
          title: 'Edit Photo',
          headerStyle: {
            backgroundColor: GlobalColors.primaryBase,
            height: 300,
          },
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
  backButtonIcon: {
    width: 9,
    height: 13,
    color: GlobalColors.primaryBase,
  },

  backButtonStyle: {
    margin: 0,
    padding: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonContainer: {
    margin: 0,
    paddingHorizontal: 8,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
