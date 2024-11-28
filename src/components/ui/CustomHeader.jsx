import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import { GlobalColors } from '../../constants/Colors';


const CustomHeader = ({
  title,
  handlePress,
  moreIcon,
  headerLeft,
  headerRight,
  headerStyle,
  headerTitleStyle,
}) => {
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <View style={styles.headerLeft}>
        {headerLeft && headerLeft()} {/* Render custom left button */}
      </View>
      <Text style={[styles.headerTitle, headerTitleStyle]}>{title}</Text>
      <View style={styles.headerRight}>
        {headerRight ? (
          headerRight()
        ) : (
          <CustomButton
            OnPressAction={handlePress}
            Icon={moreIcon}
            IconStyle={styles.rightIconStyle}
            pressableContainerStyle={{margin: 0, padding: 0}}
            containerStyle={[{margin: 0, padding: 0},containerStyle]}
            InnerTextStyle={{fontSize: 1}}
            buttonTitle={buttonTitle}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: GlobalColors.primaryBase,
    height: 150,
    paddingHorizontal: 10,
  },
  headerLeft: {
    paddingLeft: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
  },
  headerRight: {
    paddingRight: 10,
  },
  rightIconStyle: {
    width: 20,
    height: 20,
  },
});

export default CustomHeader;
