import {Image, StyleSheet, Text, View} from 'react-native';
import locationIcon from '../../assets/images/locationIcon.png';
import dateIcon from '../../assets/images/dateImage.png';

const ProjectMiddleCard = ({
  data,
  customIconStyle,
  customImageBox,
  iconContainer,
}) => {
  return (
    <View style={styles.details}>
      <View style={[styles.sideIcon, iconContainer]}>
        <View style={[styles.ImageBox, customImageBox]}>
          <Image
            source={locationIcon}
            resizeMode="contain"
            style={[styles.icon, customIconStyle]}
          />
        </View>
        <Text style={[styles.text]}>{data.location}</Text>
      </View>
      <View style={[styles.sideIcon, iconContainer]}>
        <View style={[styles.ImageBox, customImageBox]}>
          <Image
            source={dateIcon}
            resizeMode="contain"
            style={[styles.icon, customIconStyle]}
          />
        </View>
        <Text style={[styles.text]}>{data.date}</Text>
      </View>
    </View>
  );
};

export default ProjectMiddleCard;

const styles = StyleSheet.create({
  sideIcon: {
    flexDirection: 'row',
    columnGap: 10,
    marginBottom: 12.5,
    alignItems:'center'
  },
  text: {
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
    color:'#5C546A'
  },
  ImageBox: {
    borderRadius: 50,
    borderColor: '#5C546A',
    borderWidth: 1,
    width: 20,
    height: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 10,
  },
});
