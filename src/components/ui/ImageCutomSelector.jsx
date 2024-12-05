import {Image, StyleSheet, View} from 'react-native';
import {images} from '../../assets';

const ImageComponent = ({
  index,
  imageSource,
  toggleImageSelection,
  selectedImages,
}) => {
  return (
    <View style={{width: '32%'}}>
      <Image
        source={imageSource.source}
        style={[
          styles.imageStyle,
          selectedImages[index].selected && styles.selectedImage,
        ]}
        onTouchEnd={() => toggleImageSelection(index)}
      />

      <View style={styles.ActionsContainer}>
        <Image
          source={
            imageSource.selected ? images.selectedIcon : images.unselectedIcon
          }
          style={styles.selectedIcon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  detailsIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: Platform.select({ios: 3.5}),
    borderRadius: 10,
  },
  selectedIcon: {
    width: 25,
    height: 25,
  },
  ActionsContainer: {
    position: 'absolute',
    top: 5,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: '100%',
    height: 114,
  },
});
