import {Image, Platform, StyleSheet, View} from 'react-native';
import {images} from '../assets';
import {FlatList} from 'react-native-gesture-handler';
import {memo} from 'react';

const ImagePath = [
  {source: images.template1},
  {source: images.template2},
  {source: images.template3},
  {source: images.template4},
  {source: images.template5},
  {source: images.template6},
];

const Templates = () => {
  const renderItem = ({item}) => (
    <View style={styles.imageWrapper}>
      <Image
        source={item.source}
        style={styles.imageStyle}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <FlatList
      data={ImagePath}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.scrollContainer}
      numColumns={2}
      columnWrapperStyle={styles.innerContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default memo(Templates);

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: Platform.select({ios: 35, android: 26}),
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    // columnGap: 17,
  },
  imageWrapper: {
    width: '48%',
    aspectRatio: 0.5,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
