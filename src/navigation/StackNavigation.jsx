import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StyleSheet, View} from 'react-native';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import ProjectSetup from '../screens/ProfileSetup';
import {BottomNav} from './BottomNavigation';
import ProjectDetails from '../screens/ProjectDetails';
import {GlobalColors} from '../constants/Colors';
import CustomButton from '../components/ui/CustomButton';
import moreIcon from '../assets/images/more.png';
import ProjectMap from '../screens/ProjectMap';
import CreateProject from '../screens/CreateProject';
import CapturePhotos from '../screens/CapturePhotos';
import EditPhoto from '../screens/EditPhoto';
import {images} from '../assets';
import {navigationRef} from '../../App';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CreatePhotoLog from '../screens/CreatePhotoLog';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const handlePress = () => {};

  const goBack = () => {
    navigationRef.current?.goBack();
  };

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: GlobalColors.primaryBase,
          // height: 100,
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
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Image
              source={images.backGreenIcon}
              style={styles.backIconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
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
          },
        }}
      />
       <Stack.Screen
        component={CreatePhotoLog}
        name="CreatePhotoLog"
        options={{
          title: 'Create PhotoLog',
          headerStyle: {
            backgroundColor: GlobalColors.primaryBase,
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
    backgroundColor: 'red',
  },
  backButtonIcon: {
    width: 9,
    color: GlobalColors.primaryBase,
  },

  backButtonStyle: {
    margin: 0,
    paddingHorizontal: 9,
    paddingVertical: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  backButtonContainer: {
    margin: 0,
    paddingHorizontal: 8,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIconStyle: {
    width: 9,
  },
  backButton: {
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 40,
    width: 27,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItemsL: 'center',
  },
});
