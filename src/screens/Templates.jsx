import {Image, Platform, StyleSheet, View} from 'react-native';
import {images} from '../assets';
import {ScrollView} from 'react-native-gesture-handler';
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
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={{flex: 1}}
      overScrollMode="auto">
      <View style={styles.innerContainer}>
        {ImagePath.map((item, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image
              source={item.source}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Templates;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: Platform.select({ios: 35, android: 26}),
    paddingHorizontal: 7,
    paddingTop: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: Platform.select({android: 15, ios: 20}),
    backgroundColor: '#fff',
    columnGap: Platform.select({android: 10}),
  },
  imageWrapper: {
    width: Platform.select({ios: '50%', android: '48%'}),
    flexGrow: 1,
  },
  imageStyle: {
    width: '100%',
    height: 350,
  },
});
