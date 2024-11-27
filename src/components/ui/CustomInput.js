import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import eye from '../../assets/images/eye.png';
import hiddenEye from '../../assets/images/hidden.png';
import {useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';

const CustomInput = ({
  inputConfigurations,
  labelStyle,
  inputBoxStyle,
  inputStyle,
  label,
  onChange,
  isPassword,
  isPhoneInput,
}) => {
  const [isSecure, setIsSecure] = useState(true);

  const toggleSecurity = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={[styles.container, inputBoxStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={styles.inputContainer}>
        {isPhoneInput ? (
          <PhoneInput
            containerStyle={[styles.phoneInputContainer, inputStyle]}
            textContainerStyle={styles.phoneTextContainer}
            textInputStyle={styles.phoneTextInput}
            onChangeFormattedText={onChange}
            defaultCode="US"
            layout="second"
            textInputProps={{
              ...inputConfigurations
            }}
          />
        ) : (
          <TextInput
            style={[styles.input, inputStyle]}
            onChangeText={onChange}
            {...inputConfigurations}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            secureTextEntry={isPassword && isSecure}
          />
        )}

        {isPassword && (
          <Pressable
            onPress={toggleSecurity}
            style={({pressed}) => [
              styles.pressableButton,
              pressed && styles.pressed,
            ]}>
            <Image
              source={isSecure ? eye : hiddenEye}
              style={styles.iconEye}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D8DC',
    padding: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    fontSize: 16,
    flex: 1,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
    marginBottom: 10,
  },
  iconEye: {
    width: 20,
    height: 20,
  },
  pressableButton: {
    position: 'absolute',
    top: '50%',
    right: 12,
    transform: [{translateY: -10}],
  },
  pressed: {
    opacity: 0.7,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  phoneInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D7D8DC',
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding:0,
  },
  phoneTextContainer: {
    backgroundColor: 'transparent',
    // paddingVertical: 16,
    // paddingHorizontal: 8,
    borderLeftWidth: 1,
    borderColor: '#D7D8DC',
    maxHeight:60,
    padding:0
  },
  phoneTextInput: {
    fontSize: 16,
    color: '#000',
    padding:0
  },
});
