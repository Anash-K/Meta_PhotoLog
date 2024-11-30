import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, View} from 'react-native';
import CustomIcon from '../components/ui/CustomIcon';
import CustomButton from '../components/ui/CustomButton';
import {GlobalColors} from '../constants/Colors';
import Projects from '../screens/Projects';
import ProjectsIcon from '../assets/images/ProjectsIcon.png';
import {useNavigation} from '@react-navigation/native';
import Photos from '../screens/Photos';
import {images} from '../assets';
import PhotoLog from '../screens/PhotoLog';
import MainMenu from '../screens/MainMenu';

const BottomTab = createBottomTabNavigator();

export const BottomNav = () => {
  const navigator = useNavigation();

  const handlePress = () => {};

  const handleNav = PageName => {
    navigator.navigate('CreateProject');
  };

  return (
    <View style={{flex: 1}}>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: GlobalColors.primaryBase, height: 120},
          headerTintColor: '#FFFFFF',
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: ' rgba(255, 255, 255, 0.5)',
          tabBarLabel: () => null,
          tabBarIconStyle: {
            height: 37,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            marginTop: 5,
          },
          tabBarStyle: {
            height: Platform.select({ios: 90, android: 60}),
            padding: 15,
          },
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
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                  backgroundColor: focused ? '#FFFFFF26' : 'transparent',
                  borderRadius: 40,
                  paddingHorizontal: 19,
                  paddingTop: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcon
                  srcPath={images.ProjectTabIcon}
                  size={30}
                  color={color}
                  OnPressAction={handlePress}
                />
              </View>
            ),
            headerLeft: () => null,
            headerTitleAlign: 'left',
            headerTitleStyle: styles.navHeaderTitle,
            headerRight: () => (
              <CustomButton
                containerStyle={styles.headerRightContainer}
                pressableContainerStyle={styles.headerRightIcon}
                OnPressAction={handleNav}
                buttonTitle={'+  New project'}
                InnerTextStyle={styles.headerRightIconText}
              />
            ),
          }}
        />
        <BottomTab.Screen
          component={Photos}
          name="Photos"
          options={{
            title: 'Photos',
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                  backgroundColor: focused ? '#FFFFFF26' : 'transparent',
                  borderRadius: 40,
                  paddingHorizontal: 19,
                  paddingTop: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcon
                  srcPath={images.PhotosTabIcon}
                  size={30}
                  color={color}
                  OnPressAction={handlePress}
                />
              </View>
            ),
            headerLeft: () => null,
            headerTitleAlign: 'left',
            headerTitleStyle: styles.navHeaderTitle,
            headerRight: () => (
              <CustomButton
                containerStyle={styles.headerRightContainer}
                pressableContainerStyle={styles.headerRightIcon}
                OnPressAction={handleNav}
                buttonTitle={'+ Add Photo'}
                InnerTextStyle={styles.headerRightIconText}
              />
            ),
          }}
        />
        <BottomTab.Screen
          component={PhotoLog}
          name="PhotoLog"
          options={{
            title: 'Photo Log',
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                  backgroundColor: focused ? '#FFFFFF26' : 'transparent',
                  borderRadius: 40,
                  paddingHorizontal: 19,
                  paddingTop: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcon
                  srcPath={images.chatTabIcon}
                  size={30}
                  color={color}
                  OnPressAction={handlePress}
                />
              </View>
            ),
            headerLeft: () => null,
            headerTitleAlign: 'left',
            headerTitleStyle: styles.navHeaderTitle,
            headerRight: () => (
              <CustomButton
                containerStyle={styles.headerRightContainer}
                pressableContainerStyle={styles.headerRightIcon}
                OnPressAction={handleNav}
                buttonTitle={'+ Add Photo'}
                InnerTextStyle={styles.headerRightIconText}
              />
            ),
          }}
        />
        <BottomTab.Screen
          component={MainMenu}
          name="MainMenu"
          options={{
            title: 'Main Menu',
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                  backgroundColor: focused ? '#FFFFFF26' : 'transparent',
                  borderRadius: 40,
                  paddingHorizontal: 19,
                  paddingTop: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcon
                  srcPath={images.MainMenuTabIcon}
                  size={30}
                  color={color}
                  OnPressAction={handlePress}
                />
              </View>
            ),
            headerLeft: () => null,
            headerTitleAlign: 'left',
            headerTitleStyle: styles.navHeaderTitle,
            headerRight: () => (
              <CustomButton
                containerStyle={styles.headerRightContainer}
                pressableContainerStyle={styles.headerRightIcon}
                OnPressAction={handleNav}
                buttonTitle={'+ Add Photo'}
                InnerTextStyle={styles.headerRightIconText}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  navHeaderTitle: {
    backgroundColor: GlobalColors.primaryBase,
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },
  headerRightContainer: {},
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
