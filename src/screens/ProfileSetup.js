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
import PageTitle from '../components/ui/PageTitle';
import backIcon from '../assets/images/backIcon.png';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {images} from '../assets';
import {AuthContext} from '../auth/AuthContext';

const ProjectSetup = () => {
  const navigator = useNavigation();
  const {setIsLogin} = useContext(AuthContext);

  const handleChange = () => {};

  const handleForwardPush = () => {
    setIsLogin(true);
  };

  const handleBackNav = () => {
    navigator.goBack();
  };

  return (
    <ImageBackground
      source={BgImage}
      style={styles.container}
      resizeMode="cover">
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackNav}>
          <Image
            source={images.blackBackIcon}
            style={styles.backImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <PageTitle titleBoxStyle={{flex: 1}} textStyle={styles.title}>
          Profile Setup
        </PageTitle>
      </View>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={{flex: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.form}>
              <CustomInput
                label={'First Name'}
                onChange={handleChange}
                placeholderText={'e.g.Ronald'}
              />
              <CustomInput
                label={'Last Name'}
                onChange={handleChange}
                placeholderText={'e.g.Dahl'}
              />
              <CustomInput
                label={'Organization'}
                onChange={handleChange}
                placeholderText={'e.g.Metta'}
              />
              <CustomInput
                label={'Phone Number'}
                isPhoneInput={true}
                onChange={handleChange}
                inputConfigurations={{
                  keyboardType: 'phone-pad',
                  maxLength: 12,
                }}
              />
              <CustomInput label={'Email'} onChange={handleChange} placeholderText={'e.g.ronalddahl@gmail.com'} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <CustomButton
        containerStyle={{
          paddingTop: 10,
          marginBottom: Platform.select({ios: 25, android: 15}),
        }}
        buttonTitle={'Continue'}
        OnPressAction={handleForwardPush}
      />
    </ImageBackground>
  );
};

export default ProjectSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  title: {
    color: '#292D32',
  },
  backButton: {
    backgroundColor: '#FFFFFF80',
    width: 'fit',
    paddingVertical: 2,
    paddingHorizontal: 13,
    borderRadius: '50%',
    position: 'absolute',
    left: 10,
  },
  backImage: {
    width: 11,
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  form: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    rowGap: 25,
  },
});
