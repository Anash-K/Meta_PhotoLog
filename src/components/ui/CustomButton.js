import {Pressable, View, Text, StyleSheet} from 'react-native';
import {GlobalColors} from '../../constants/Colors';

const CustomButton = ({
  buttonTitle,
  containerStyle,
  pressableStyle,
  OnPressAction,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        style={({pressed}) => [
          styles.pressableContainer,
          pressed && styles.buttonPressed,
        ]}
        onPress={OnPressAction}>
        <View style={[styles.innerContainer, pressableStyle]}>
          <Text style={styles.text}>{buttonTitle}</Text>
        </View>
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
    backgroundColor: GlobalColors.buttonColor,
    padding: 14,
  },
  text: {
    fontSize: 16,
    fontFamily: 'OpenSans-Semibold',
    color: 'white',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
