import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import CustomIcon from '../components/ui/CustomIcon';
import CustomButton from '../components/ui/CustomButton';
import {GlobalColors} from '../constants/Colors';
import Projects from '../screens/Projects';
import ProjectsIcon from '../assets/images/ProjectsIcon.png';
import {useNavigation} from '@react-navigation/native';
import Photos from '../screens/Photos';
import ProjectsActiveIcon from '../assets/images/ProjectActiveIcon.png';
import ProjectCustomSVGIcon from '../components/ProjectCustomIcon';

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
          tabBarLabel: () => null,
          tabBarIconStyle: {
            height: 37,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
          },
          // tabBarStyle: {height: 100, padding: 15},
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
                  paddingTop: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcon
                  srcPath={<ProjectCustomSVGIcon color='red' />}
                  size={size}
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
