import React from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BgImage from '../assets/images/bgGradient.png';
import icon from '../assets/images/SplashIcon.png';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import {GlobalColors} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigator = useNavigation();

  const handleChange = text => {
    console.log(text);
  };

  const handleSubmit = () => {
    navigator.navigate('createAccount');
  };

  const handleCreateAccount = () => {
    navigator.navigate('createAccount');
  };

  return (
    <ImageBackground
      source={BgImage}
      style={styles.container}
      resizeMode="cover">
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.top}>
              <View style={styles.imageContainer}>
                <Image source={icon} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Welcome Back!</Text>
              </View>
              <View>
                <CustomInput label={'Email'} onChange={handleChange} />
                <CustomInput
                  label={'Password'}
                  isPassword={true}
                  onChange={handleChange}
                />
              </View>
              <CustomButton
                buttonTitle={'Login'}
                OnPressAction={handleSubmit}
                containerStyle={styles.buttonContainer}
              />
              <View style={styles.forgotTextBox}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </View>
            </View>
            <View style={styles.bottomTextBox}>
              <Text style={styles.bottomText}>Don’t have an account?</Text>
              <TouchableOpacity onPress={handleCreateAccount}>
                <Text style={styles.bottomSubText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 7,
  },
  text: {
    color: 'black',
    fontFamily: 'OpenSans-Bold',
    fontSize: 28,
  },
  image: {
    width: 150,
    height: 150,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 12,
  },
  forgotTextBox: {
    marginTop: 22,
  },
  forgotText: {
    fontSize: 16,
    fontFamily: 'OpenSans-Semibold',
    textAlign: 'center',
  },
  bottomTextBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  bottomText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomSubText: {
    color: GlobalColors.buttonColor,
    fontFamily: 'OpenSans-Semibold',
  },top:{
    flex:1
  }
});

export default Login;
