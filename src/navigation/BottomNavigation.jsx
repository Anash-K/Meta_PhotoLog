import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import CustomIcon from "../components/ui/CustomIcon";
import CustomButton from "../components/ui/CustomButton";
import { GlobalColors } from "../constants/Colors";
import Projects from "../screens/Projects";
import ProjectsIcon from '../assets/images/ProjectsIcon.png';

const BottomTab = createBottomTabNavigator();

export const BottomNav = () => {
    const handlePress = () => {
      
    };
  
    return (
      <View style={{flex: 1}}>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalColors.primaryBase, height: 120},
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
  
  
  