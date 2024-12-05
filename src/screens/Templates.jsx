import {Image, StyleSheet, View} from 'react-native';
import {images} from '../assets';
import {ScrollView} from 'react-native-gesture-handler';

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
      style={{flex: 1}} overScrollMode='auto' >
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
    paddingHorizontal: 7,
    paddingVertical: 16,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 15,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: '50%',
    flexGrow: 1,
  },
  imageStyle: {
    width: '100%',
    height: 350,
  },
});
