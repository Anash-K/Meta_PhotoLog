import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {images as CustomImages} from '../../assets';

const CustomPhotosCard = ({
  title,
  images,
  isAllSelected,
  toggleImageSelection,
  toggleAllImagesSelection,
  itemIndex,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}
          {` (${images.length})`}
        </Text>
        <TouchableOpacity onPress={() => toggleAllImagesSelection(itemIndex)}>
          <Image
            source={
              isAllSelected
                ? CustomImages.selectedIcon
                : CustomImages.unselectedIcon
            }
            style={styles.selectedIconOnTitle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imagesContainer}>
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleImageSelection(itemIndex, index)}
            style={styles.imageButton}>
            <View style={styles.imageContainer}>
              <Image
                source={img.source}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.ActionsContainer}>
                <Image
                  source={
                    img.selected
                      ? CustomImages.selectedIcon
                      : CustomImages.unselectedIcon
                  }
                  style={styles.selectedIcon}
                  resizeMode="contain"
                />
                <View style={styles.deleteIconContainer}>
                  <Image
                    source={CustomImages.detailsImage}
                    style={[styles.selectedIcon, styles.detailsIcon]}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomPhotosCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginBottom: 17,
  },
  title: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  selectedIconOnTitle: {
    width: 22,
    height: 22,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 5,
    rowGap: 7,
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 123,
  },
  selectedIcon: {
    width: 20,
    height: 20,
  },
  imageButton: {
    width: '32.3%',
  },
  ActionsContainer: {
    position: 'absolute',
    top: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
  },
  detailsIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: Platform.select({ios: 3.5}),
    borderRadius: 10,
  },deleteIconContainer:{

  }
});
