import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useLayoutEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {ScrollView} from 'react-native-gesture-handler';
import CustomPhotosCard from '../components/ui/CustomPhotosCard';
import {images} from '../assets';
import CustomButton from '../components/ui/CustomButton';
import { useNavigation } from '@react-navigation/native';

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

const PhotosData = [
  {
    title: 'Today',
    images: [
      {source: images.demoImage1, selected: false},
      {source: images.demoImage2, selected: false},
      {source: images.demoImage3, selected: false},
      {source: images.demoImage4, selected: false},
    ],
  },
  {
    title: 'May 12, 2024',
    images: [
      {source: images.demoImage5, selected: false},
      {source: images.demoImage6, selected: false},
      {source: images.demoImage7, selected: false},
      {source: images.demoImage8, selected: false},
    ],
  },
];

const Photos = () => {
  const [value, setValue] = useState('Search Project');
  const [isFocus, setIsFocus] = useState(false);
  const [photosData, setPhotosData] = useState(PhotosData);
  const navigator = useNavigation();

  useLayoutEffect(() =>{
    navigator.setOptions({
      headerTitle: 'Add Photos',
    })
  },[]);


  const handleChange = item => {
    setValue(item.value);
    setIsFocus(false);
  };

  const toggleImageSelection = (itemIndex, photoIndex) => {
    const updatedData = [...PhotosData];
    updatedData[itemIndex].images[photoIndex].selected =
      !updatedData[itemIndex].images[photoIndex].selected;
    setPhotosData(updatedData);
  };

  const toggleAllImagesSelection = itemIndex => {
    const updatedData = [...photosData];
    const allSelected = updatedData[itemIndex].images.every(
      img => img.selected,
    );

    updatedData[itemIndex].images = updatedData[itemIndex].images.map(img => ({
      ...img,
      selected: !allSelected,
    }));
    setPhotosData(updatedData);
  };

  const handlePress = () => {
    navigator.navigate('EditPhoto')
  };

  const renderItem = item => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          searchPlaceholderTextColor="black"
          iconStyle={styles.iconStyle}
          data={data}
          value={value}
          placeholder="Select Project"
          searchPlaceholder="Search..."
          onChange={item => handleChange(item)}
          renderItem={renderItem}
        />
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, width: '100%'}}
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, width: '100%'}}>
          <FlatList
            data={photosData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <CustomPhotosCard
                title={item.title}
                images={item.images}
                isAllSelected={item.images.every(image => image.selected)}
                toggleImageSelection={toggleImageSelection}
                toggleAllImagesSelection={toggleAllImagesSelection}
                itemIndex={index}
              />
            )}
          />
        </View>
      </ScrollView>
      <View style={{width: '100%', paddingHorizontal: 14, paddingVertical: 15}}>
        <CustomButton
          buttonTitle={`Create PhotoLog (${photosData.length})`}
          OnPressAction={handlePress}
        />
      </View>
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    backgroundColor: '#FAFAFA',
  },
  top: {
    width: '100%',
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    backgroundColor: '#F8F8F8',
    borderColor: '#D7D8DC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    width: '100%',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#292D32',
    fontFamily: 'OpenSans-Regular',
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
});
