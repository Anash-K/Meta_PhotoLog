import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const [detailsObject, setDetailsObject] = useState({
    firstName: 'Ronald',
    lastName: 'Dahl',
    organization: 'Metta',
    email: 'ronalddahl@gmail.com',
    phoneNumber: '(415) 555-1234',
  });

  const navigator = useNavigation();

  // Handle input changes
  const handleChange = (field, value) => {
    setDetailsObject(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleForwardPush = () => {
    navigator.goBack();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 100}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={{flex: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.form}>
              <CustomInput
                label="First Name"
                inputConfigurations={{value: detailsObject.firstName}}
                onChange={value => handleChange('firstName', value)}
              />
              <CustomInput
                label="Last Name"
                inputConfigurations={{value: detailsObject.lastName}}
                onChange={value => handleChange('lastName', value)}
              />
              <CustomInput
                label="Organization"
                inputConfigurations={{value: detailsObject.organization}}
                onChange={value => handleChange('organization', value)}
              />
              <CustomInput
                label="Email"
                inputConfigurations={{value: detailsObject.email}}
                onChange={value => handleChange('email', value)}
              />
              <CustomInput
                label="Phone Number"
                isPhoneInput={true}
                onChange={value => handleChange('phoneNumber', value)}
                inputConfigurations={{
                  keyboardType: 'phone-pad',
                  maxLength: 12,
                  value: detailsObject.phoneNumber,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <CustomButton
        containerStyle={{
          paddingTop: 10,
          marginBottom: Platform.select({ios: 25, android: 15}),
        }}
        buttonTitle="Continue"
        OnPressAction={handleForwardPush}
      />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
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
