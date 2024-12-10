import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {images} from '../assets';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import {Dropdown} from 'react-native-element-dropdown';
import {useState} from 'react';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const CapturePhotos = () => {
  const [value, setValue] = useState('NE');

  const handleChange = item => {
    setValue(item.value);
  };

  const renderItem = item => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={{flex: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          overScrollMode="auto">
          <View style={{width: '100%'}}>
            <Image
              style={styles.imagesStyle}
              source={images.capturedImage}
              resizeMode="cover"
            />
            <View style={styles.imageContent}>
              <View style={styles.left}>
                <View style={styles.iconBox}>
                  <Image
                    style={{width: 10}}
                    source={images.location}
                    tintColor={'white'}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.imageText}>SE-36-20-4-W2</Text>
              </View>
              <View style={styles.right}>
                <View style={styles.rightIconBox}>
                  <Image
                    source={images.camera}
                    style={{width: 22}}
                    tintColor={'white'}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.subHeading}>
            <Text style={styles.title}>Project Phoenix</Text>
            <Text style={styles.subTitle}>Omega</Text>
          </View>
          <View style={{paddingBottom: 10}}>
            <CustomInput
              label={'Description'}
              inputConfigurations={{
                multiline: true,
                height: 90,
                textAlignVertical: 'top',
              }}
              placeholderText={'Photo details...'}
            />
            <View style={styles.top}>
              <Text style={styles.label}>Photo Direction</Text>
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
                placeholder="NE"
                value={value}
                // searchPlaceholder="Search..."
                onChange={item => handleChange(item)}
                renderItem={renderItem}
              />
            </View>
            <CustomInput
              label={'Author'}
              inputConfigurations={{value: 'Ronald Dahl'}}
            />
            <View style={styles.doubleInputBox}>
              <CustomInput
                label={'Date'}
                inputBoxStyle={{flex: 1}}
                inputConfigurations={{value: 'May 12, 2024'}}
                iconSource={images.dateIcon}
                showIcon={true}
                iconStyle={{width: 25, height: 25}}
              />
              <CustomInput
                label={'Time'}
                inputBoxStyle={{flex: 1}}
                inputConfigurations={{value: '14:56'}}
                iconSource={images.timeIcon}
                showIcon={true}
                iconStyle={{width: 25, height: 25}}
              />
            </View>
            <View style={styles.doubleInputBox}>
              <CustomInput
                label={'Latitude'}
                inputBoxStyle={{flex: 1}}
                inputConfigurations={{value: '39.7817° N'}}
              />
              <CustomInput
                label={'Longitude'}
                inputBoxStyle={{flex: 1}}
                inputConfigurations={{value: '89.6501° W'}}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <CustomButton
        buttonTitle={'Save'}
        pressableContainerStyle={{
          marginBottom: Platform.select({ios: 20, android: 15}),
          marginTop: 15,
        }}
      />
    </View>
  );
};

export default CapturePhotos;

const styles = StyleSheet.create({
  doubleInputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 15,
  },
  left: {flexDirection: 'row', columnGap: 10, alignItems: 'center'},
  iconBox: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 6,
    maxWidth: 25,
    maxHeight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {color: 'white', fontSize: 14, fontFamily: 'OpenSans-Semibold'},
  right: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 14,
    paddingBottom: 10,
  },
  imagesStyle: {
    width: '100%',
    borderRadius: 12,
    height: 343,
  },
  imageContent: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 14,
  },
  rightIconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    maxwidth: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: '50%',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'rgba(92, 84, 106, 0.5)',
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: 10,
  },
  top: {
    width: '100%',
    marginBottom: 10,
    marginTop: 15,
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
  },
  iconStyle: {
    width: 28,
    color: 'black',
    marginRight: 13,
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
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
    marginBottom: 10,
    color: '#5C546A',
  },
  subHeading: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    rowGap: 10,
  },
  subTitle: {
    color: 'rgba(92, 84, 106, 1)',
    fontFamily: 'OpenSans-Semibold',
  },
  title: {
    color: ' rgba(0, 109, 119, 1)',
    fontFamily: 'OpenSans-Semibold',
  },
});
