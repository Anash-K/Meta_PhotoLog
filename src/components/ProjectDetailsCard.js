import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import threeDotIcon from '../assets/images/more.png';
import {GlobalColors} from '../constants/Colors';
import locationIcon from '../assets/images/locationIcon.png';
import dateIcon from '../assets/images/dateImage.png';

const ProjectDetailsCard = ({data}) => {
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.headLeft}>
          <Text style={[styles.text, styles.headTitle, {fontSize: 16}]}>
            {data.title}
          </Text>
          <Text style={[styles.text, styles.headTitle]}>{data.subTitle}</Text>
        </View>
        <View style={styles.headRight}>
          <Pressable onPress={handlePress}>
            <Image
              source={threeDotIcon}
              style={styles.moreDetails}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.details}>
          <View style={styles.sideIcon}>
            <View style={styles.ImageBox}>
              <Image
                source={locationIcon}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
            <Text style={[styles.text]}>{data.location}</Text>
          </View>
          <View style={styles.sideIcon}>
            <View style={styles.ImageBox}>
              <Image
                source={dateIcon}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
            <Text style={[styles.text]}>{data.date}</Text>
          </View>
        </View>
        <View style={styles.optionsStyle}>
          {data.Options.map(item => (
            <Text key={item.id} style={[styles.text, styles.items]}>
              {item.name}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProjectDetailsCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    marginHorizontal: 14,
  },
  head: {
    backgroundColor: GlobalColors.primaryBase,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  optionsStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 20,
  },
  details: {},
  items: {
    width: '48%',
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#EDF5F5',
    borderRadius: 5,
    fontFamily: 'OpenSans-Regular',
    paddingVertical: 10,
  },
  headLeft: {},
  headRight: {},
  text: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  headTitle: {
    color: 'white',
    fontFamily: 'OpenSans-Semibold',
  },
  moreDetails: {
    width: 3.5,
  },
  ImageBox: {
    borderRadius: 50,
    borderColor: '#5C546A',
    borderWidth: 1,
    width: 20, // Set width of ImageBox
    height: 20, // Set height of ImageBox to make it a circle
    padding: 5, // Small padding to ensure the image fits
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 12,  // Set the image width inside the box
    height: 12, // Set the image height inside the box
  },
});
