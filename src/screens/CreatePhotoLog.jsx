import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import {Dropdown} from 'react-native-element-dropdown';
import {useEffect, useState} from 'react';
import {images} from '../assets';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
];

const CreatePhotoLog = ({navigation}) => {
  const [value, setValue] = useState('4 Photo - Red');

  const handleChange = item => {
    setValue(item.label);
  };

  useEffect(() =>{

  },[value])

  const renderItem = item => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{flex: 1}}
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={styles.content}>
            <CustomInput
              label={'PhotoLog Title'}
              placeholderText={'e.g. First bash'}
            />
            <CustomInput label={'Client'} placeholderText={'XYZ Inc.'} />
            <CustomInput
              label={'Project Name'}
              placeholderText={'e.g. Project Phoenix'}
            />
            <CustomInput
              label={'Location'}
              placeholderText={'e.g. SW-01-001-01 W1M / 123 Main St.'}
            />
            <View style={styles.top}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text style={styles.label}>PhotoLog Template</Text>
                <CustomButton
                  buttonTitle={'View Templates'}
                  pressableContainerStyle={styles.buttonStyle}
                  InnerTextStyle={styles.buttonText}
                />
              </View>

              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                searchPlaceholderTextColor="black"
                renderRightIcon={() => (
                  <Image
                    source={images.dropDownIcon}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                )}
                data={data}
                placeholder="4 Photo - Red"
                value={value}
                onChange={item => handleChange(item)}
                renderItem={renderItem}
              />
            </View>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text style={styles.label}>Photos (2)</Text>
                <CustomButton
                  buttonTitle={'Edit Photos'}
                  pressableContainerStyle={styles.buttonStyle}
                  InnerTextStyle={styles.buttonText}
                  OnPressAction={()=> navigation.navigate('')}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 4,
                  marginBottom: 30,
                }}>
                <Image source={images.demoImage1} style={styles.imageStyle} />
                <Image source={images.demoImage2} style={styles.imageStyle} />
                <Image source={images.demoImage3} style={styles.imageStyle} />
                <Image source={images.demoImage4} style={styles.imageStyle} />
                <Image source={images.demoImage5} style={styles.imageStyle} />
                <Image source={images.demoImage6} style={styles.imageStyle} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <CustomButton
        buttonTitle={'Create PhotoLog'}
        containerStyle={{paddingTop: 10}}
      />
    </View>
  );
};

export default CreatePhotoLog;

const styles = StyleSheet.create({
  imageStyle: {
    width: '32%',
    height: 114,
  },
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 20,
    paddingBottom: Platform.select({ios: 30, android: 20}),
  },
  content: {},
  top: {
    width: '100%',
    marginBottom: 10,
    marginTop: 15,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'red',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    color: '#292D32',
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: 10,
  },
  iconStyle: {
    width: 28,
    color: 'black',
  },
  item: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  textItem: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
  dropdown: {
    height: 50,
    backgroundColor: '#F8F8F8',
    borderColor: '#D7D8DC',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  buttonStyle: {
    backgroundColor: 'rgba(237, 245, 245, 1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
  buttonText: {
    color: '#006D77',
    fontSize: 12,
  },
});
