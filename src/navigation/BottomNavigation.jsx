import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform, StyleSheet, View} from 'react-native';
import CustomIcon from '../components/ui/CustomIcon';
import CustomButton from '../components/ui/CustomButton';
import {GlobalColors} from '../constants/Colors';
import Projects from '../screens/Projects';
import Photos from '../screens/Photos';
import {images} from '../assets';
import PhotoLog from '../screens/PhotoLog';
import MainMenu from '../screens/MainMenu';

const BottomTab = createBottomTabNavigator();

const tabBarIcon = (icon, {color, size, focused}) => {
  return (
    <View
      style={{
        backgroundColor: focused ? '#FFFFFF26' : 'transparent',
        borderRadius: 40,
        paddingHorizontal: 19,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:7
      }}>
      <Image
        source={icon}
        style={{height: 30, width: 30}}
        resizeMode="contain"
        tintColor={color}
      />
    </View>
  );
};

export const BottomNav = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTab.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {backgroundColor: GlobalColors.primaryBase, height: 120},
          headerTintColor: '#FFFFFF',
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: ' rgba(255, 255, 255, 0.5)',
          tabBarLabel: () => null,
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            marginTop: 5,
          },
          tabBarStyle: {
            padding: 15,
            backgroundColor: GlobalColors.primaryBase
          },
          headerTitleAlign: 'left',
          headerTitleStyle: styles.navHeaderTitle,
        })}>
        <BottomTab.Screen
          component={Projects}
          name="Projects"
          options={({navigation}) => ({
            title: 'Projects',
            tabBarIcon: tabBarIcon.bind(this, images.ProjectTabIcon),
            headerRight: () => (
              <CustomButton
                containerStyle={styles.headerRightContainer}
                pressableContainerStyle={styles.headerRightIcon}
                OnPressAction={() => {navigation.navigate('CreateProject')}}
                buttonTitle={'+  New project'}
                InnerTextStyle={styles.headerRightIconText}
              />
            ),
          })}
        />
        <BottomTab.Screen
          component={Photos}
          name="Photos"
          options={({navigation}) => ({
            title: 'Photos',
            tabBarIcon: tabBarIcon.bind(this, images.PhotosTabIcon),
            headerRight: () => (
              <CustomButton
                containerStyle={styles.headerRightContainer}
                pressableContainerStyle={styles.headerRightIcon}
                OnPressAction={() => {navigation.navigate('CapturePhotos')}}
                buttonTitle={'+ Add Photo'}
                InnerTextStyle={styles.headerRightIconText}
              />
            ),
          })}
        />
        <BottomTab.Screen
          component={PhotoLog}
          name="PhotoLog"
          options={{
            title: 'Photo Log',
            tabBarIcon: tabBarIcon.bind(this, images.chatTabIcon),
          }}
        />
        <BottomTab.Screen
          component={MainMenu}
          name="MainMenu"
          options={{
            title: 'Main Menu',
            tabBarIcon: tabBarIcon.bind(this, images.MainMenuTabIcon),
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
