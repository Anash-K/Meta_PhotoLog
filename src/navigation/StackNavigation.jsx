import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text} from 'react-native';
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
import {Pressable, TouchableOpacity} from 'react-native-gesture-handler';
import CreatePhotoLog from '../screens/CreatePhotoLog';
import AddPhotos from '../screens/AddPhotos';
import TemplatesNav from './TabNavigation';
import UnLockAllFeatures from '../screens/UnLockAllFeatures';

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
        component={AddPhotos}
        name="AddPhotos"
        options={{
          title: 'Add Photos',
          headerStyle: {
            backgroundColor: GlobalColors.primaryBase,
          },
          headerRight: () => null,
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
      <Stack.Screen
        component={TemplatesNav}
        name="TemplatesNav"
        options={{
          title: 'Templates',
          headerStyle: {
            backgroundColor: GlobalColors.primaryBase,
          },
          headerRight: () => null,
          contentStyle: '#fff',
        }}
      />
      <Stack.Screen
        component={UnLockAllFeatures}
        name="UnlockAllFeatures"
        options={{
          title: 'Unlock All Features',
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: GlobalColors.primaryBase,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'transparent',
            borderColor: GlobalColors.primaryBase,
          },
          headerRight: () => null,
          contentStyle: GlobalColors.primaryBase,
          headerLeft: () => (
            <Pressable style={{padding: 3, marginBottom: 4}} onPress={goBack}>
              <Image
                source={images.xIcon}
                resizeMode="contain"
                style={styles.xIcon}
              />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  xIcon: {
    width: 25,
    height: 27,
  },
  rightIconStyle: {
    width: 4,
    height: 14,
  },
  headerTitleLook: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    // backgroundColor: 'red',
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
