import {Image, StyleSheet, Text, View} from 'react-native';
import mapImage from '../assets/images/MapImage.png';

const ProjectMap = () => {
  return (
    <View style={styles.container}>
      <Image source={mapImage} style={styles.image} resizeMode='cover' />
    </View>
  );
};

export default ProjectMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height:"100%"
  },
});
