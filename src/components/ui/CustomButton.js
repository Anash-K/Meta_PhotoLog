import {Pressable, View, Text, StyleSheet, Image} from 'react-native';
import {GlobalColors} from '../../constants/Colors';

const CustomButton = ({
  buttonTitle,
  containerStyle,
  pressableStyle,
  pressableContainerStyle,
  OnPressAction,
  Icon,
  IconStyle,
  InnerTextStyle,
  PressedTextStyle,
  customPressedButton,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        style={({pressed}) => [
          styles.pressableContainer,
          pressableContainerStyle,
          pressed && (customPressedButton || styles.buttonPressed),
        ]}
        onPress={OnPressAction}>
        {({pressed}) => (
          <View style={[styles.innerContainer, pressableStyle]}>
            {Icon && (
              <Image
                source={Icon}
                style={[styles.iconSize, IconStyle]}
                resizeMode="contain"
              />
            )}
            <Text
              style={[
                styles.text,
                InnerTextStyle,
                pressed && PressedTextStyle,
              ]}>
              {buttonTitle}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  pressableContainer: {
    borderRadius: 12,
    padding: 14,
    backgroundColor: GlobalColors.primaryBase,
  },
  text: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    color: 'white',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  iconSize: {
    width: 20,
    height: 20,
  },
});
