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

const EditPhoto = () => {
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
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={{flex: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          overScrollMode="auto">
          <View
            style={{
              width: '100%',
              paddingHorizontal: 14,
              alignItems: 'center',
            }}>
            <Image
              style={styles.imagesStyle}
              source={images.capturedImage}
              resizeMode="cover"
            />
            <View style={styles.imageContent}>
              <View style={styles.left}>
                <View style={styles.iconBox}>
                  <Image
                    style={{padding: 3}}
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
          <View style={{paddingBottom: 10, paddingHorizontal: 14}}>
            <CustomInput
              label={'Description'}
              inputConfigurations={{
                multiline: true,
                height: 90,
                value:
                  'The Google Pixel 7 Development project focuses on advancing the next generation of Google’s flagship smartphone by integrating advanced AI features.',
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
                iconStyle={styles.iconStyle}
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
          <View
            style={{
              borderColor: 'rgba(232, 232, 234, 1)',
              borderTopWidth: 1,
              marginBottom: 20,
            }}>
            <View style={{paddingHorizontal: 14}}>
              <View style={styles.top}>
                <Text style={styles.label}>Select Project</Text>
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  searchPlaceholderTextColor="black"
                  iconStyle={styles.iconStyle}
                  data={data}
                  placeholder="Skyline Development"
                  value={value}
                  onChange={item => handleChange(item)}
                  renderItem={renderItem}
                />
              </View>
              <View
                style={{
                  borderColor: 'rgba(215, 216, 220, 1)',
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 12,
                }}>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>
                    Urban Skyline Development
                  </Text>
                  <Image
                    source={images.blackMoreIcon}
                    tintColor={'black'}
                    style={{tintColor: 'black', width: 3.5}}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10,
                  }}>
                  <View
                    style={[
                      styles.iconBox,
                      {borderColor: '#5C546A', marginBottom: 10},
                    ]}>
                    <Image
                      style={{padding: 3}}
                      source={images.location}
                      tintColor={'#5C546A'}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.imageText, {color: '#5C546A'}]}>
                    SE-36-20-4-W2
                  </Text>
                </View>
                <Text style={{fontFamily: 'Urbanist-Regular'}}>
                  Steel framework installation completed in the northeast
                  section of the 5th floor.{' '}
                </Text>
                <View
                  style={{
                    borderColor: 'rgba(232, 232, 234, 1)',
                    borderTopWidth: 1,
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 15,
                  }}>
                  <View>
                    <Text style={{}}>Project Code</Text>
                    <Text
                      style={{
                        backgroundColor: 'rgba(248, 248, 248, 1)',
                        padding: 10,
                        borderRadius: 5,
                        borderColor: 'rgba(215, 216, 220, 1)',
                        borderWidth: 1,
                        marginTop: 10,
                      }}>
                      GP7-DVLP-2024
                    </Text>
                  </View>
                  <View>
                    <Text style={{}}>Budget Code</Text>
                    <Text
                      style={{
                        backgroundColor: 'rgba(248, 248, 248, 1)',
                        padding: 10,
                        borderRadius: 5,
                        borderColor: 'rgba(215, 216, 220, 1)',
                        borderWidth: 1,
                        marginTop: 10,
                      }}>
                      BUD-PIX7-2024
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{paddingHorizontal: 14, paddingBottom: 10,paddingTop:10}}>
        <CustomButton buttonTitle={'Save'} />
      </View>
    </View>
  );
};

export default EditPhoto;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Urbanist-Semibold',
    color: 'rgba(0, 109, 119, 1)',
  },
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
    paddingBottom: 20,
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
    width: 25,
    height: 15,
    color: '#292D32',
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
