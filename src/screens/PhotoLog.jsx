import {Image, StyleSheet, Text, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {images} from '../assets';
import PhotoLogCard from '../components/ui/PhotoLogCard';

const data = [
    {
      id: 1,
      title: 'Oct 8, 2024 - Oct 15, 2024',
      ProjectName: 'The Balance',
      description: 'The Balance Spa Renovation Journey',
      count: 10,
    },
    {
      id: 2,
      title: 'May 2, 2024 - May 12, 2024',
      ProjectName: 'Skyline Development',
      description: 'Urban Skyline Development Photolog',
      count: 10,
    },
  ];
  

const PhotoLog = () => {
  return (
    <View style={{paddingHorizontal:14,paddingTop:16}} >
      <View style={styles.InputBox}>
        <Image
          source={images.searchIcon}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Search photologs..."
          placeholderTextColor={'#A0A5AD'}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <PhotoLogCard item={item} />}
      />
    </View>
  );
};

export default PhotoLog;

const styles = StyleSheet.create({
  searchIcon: {
    width: 18,
  },
  InputBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D7D8DC',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    columnGap: 15,
    paddingHorizontal: 15,
    marginBottom: 18,
  },
  input: {
    color: '#A0A5AD',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    flex: 1,
  },
});
