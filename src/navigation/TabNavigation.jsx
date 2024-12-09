import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Templates from '../screens/Templates';
import {StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TemplatesNav = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#006D77',
        tabBarInactiveTintColor: '#292D32',
        tabBarIndicatorStyle: {
          backgroundColor: '#006D77',
          height: 1,
        },
        tabBarLabelStyle: styles.titleLook,
        sceneStyle: {backgroundColor: '#fff'},
      })}>
      <Tab.Screen name="All" component={Templates} options={() => ({})} />
      <Tab.Screen
        name="1Photo"
        component={Templates}
        options={() => ({
          title: '1 Photo',
        })}
      />
      <Tab.Screen
        name="4Photo"
        component={Templates}
        options={() => ({
          title: '4 Photos',
        })}
      />
      <Tab.Screen
        name="6Photo"
        component={Templates}
        options={() => ({
          title: '6 Photos',
        })}
      />
    </Tab.Navigator>
  );
};

export default TemplatesNav;

const styles = StyleSheet.create({
  titleLook: {
    fontSize: 14,
    lineHeight: 19.07,
    fontFamily: 'OpenSans-Regular',
  },
});
