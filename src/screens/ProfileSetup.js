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
import PageTitle from '../components/ui/PageTitle';
import backIcon from '../assets/images/backIcon.png';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ProjectSetup = () => {
  const navigator = useNavigation();

  const handleChange = () => {};

  const handleBackNav = () => {
    navigator.goBack();
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
          style={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={handleBackNav}>
                <Image
                  source={backIcon}
                  style={styles.backImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <PageTitle titleBoxStyle={{flex: 1}} textStyle={styles.title}>
                Profile Setup
              </PageTitle>
            </View>
            <View style={styles.form}>
              <CustomInput label={'First Name'} onChange={handleChange} />
              <CustomInput label={'Last Name'} onChange={handleChange} />
              <CustomInput label={'Organization'} onChange={handleChange} />
              <CustomInput
                label={'Phone Number'}
                isPhoneInput={true}
                onChange={handleChange}
                inputConfigurations={{
                    keyboardType: 'phone-pad',
                    maxLength: 12,
                }}
              />
              <CustomInput label={'Email'} onChange={handleChange} />
            </View>
            <CustomButton
              containerStyle={{marginBottom: 25}}
              buttonTitle={'Continue'}
              onPress={handleChange}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ProjectSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 7,
  },
  title: {
    color: '#292D32',
  },
  backButton: {
    backgroundColor: '#FFFFFF80',
    width: 'fit',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: '50%',
    position: 'absolute',
    left: 10,
  },
  backImage: {
    width: 12,
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
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
