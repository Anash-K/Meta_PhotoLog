import { StyleSheet } from 'react-native';
import CustomButton from './ui/CustomButton';
import CustomIcon from './ui/CustomIcon';
import { GlobalColors } from '../constants/Colors';

const GenericTab = ({
  component,
  name,
  headerRightAction,
  screenOptions,
  focused,
  srcPath,
  headerTitleAlign = "left",
  handlePress,
  headerLeftAction = () => null,
  CustomRightHeader,
  title,
}) => {
  return (
    <BottomTab.Screen
      component={component}
      name={name}
      options={{
        title: title,
        tabBarIcon: ({color, size, focused}) => (
          // <View
          //   style={{
          //     backgroundColor: focused ? '#FFFFFF26' : 'transparent',
          //     borderRadius: 40,
          //     paddingHorizontal: 19,
          //     paddingTop: 5,
          //     justifyContent: 'center',
          //     alignItems: 'center',
          //   }}> <ProjectCustomSVGIcon color="red" />
          <CustomIcon
            srcPath={srcPath}
            size={size}
            color={color}
            OnPressAction={handlePress}
            focused={focused}
          />
          // </View>
        ),
        headerLeft: headerLeftAction,
        headerTitleAlign: headerTitleAlign,
        headerTitleStyle: styles.navHeaderTitle,
        headerRight: headerRightAction,
        ...screenOptions,
      }}
    />
  );
};

export default GenericTab;

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
  

{/* <CustomButton
            containerStyle={styles.headerRightContainer}
            pressableContainerStyle={styles.headerRightIcon}
            OnPressAction={handleNav}
            buttonTitle={'+  New project'}
            InnerTextStyle={styles.headerRightIconText}
          /> */}