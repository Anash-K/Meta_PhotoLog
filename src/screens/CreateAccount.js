import React, {useContext} from 'react';
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

const CreateAccount = () => {
  const navigator = useNavigation();

  const handleChange = text => {
    console.log(text);
  };

  const handleSubmit = () => {
    navigator.navigate('projectSetup');
  };

  const handleCreateAccount = () => {
    navigator.navigate('login');
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
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{flex: 1}}>
              <View style={styles.imageContainer}>
                <Image source={icon} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Join Us Today!</Text>
              </View>
              <View>
                <CustomInput
                  label={'Email'}
                  onChange={handleChange}
                  placeholderText={'e.g. ronalddahl@gmail.com'}
                />
                <CustomInput
                  label={'Password'}
                  isPassword={true}
                  onChange={handleChange}
                  placeholderText={'e.g. password'}
                />
              </View>
              <CustomButton
                buttonTitle={'Create Account'}
                OnPressAction={handleSubmit}
                containerStyle={styles.buttonContainer}
              />
            </View>
            <View style={styles.bottomTextBox}>
              <Text style={styles.bottomText}>Already have an account?</Text>
              <TouchableOpacity onPress={handleCreateAccount}>
                <Text style={styles.bottomSubText}>Log In</Text>
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginBottom: 20,
  },
  bottomText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomSubText: {
    color: GlobalColors.primaryBase,
    fontFamily: 'OpenSans-Semibold',
  },
});

export default CreateAccount;
