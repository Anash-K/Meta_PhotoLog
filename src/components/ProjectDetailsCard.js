import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import threeDotIcon from '../assets/images/more.png';
import {GlobalColors} from '../constants/Colors';
import locationIcon from '../assets/images/locationIcon.png';
import dateIcon from '../assets/images/dateImage.png';
import { useNavigation } from '@react-navigation/native';
import ProjectMiddleCard from './ui/ProjectsMiddleCard';

const ProjectDetailsCard = ({data}) => {
  const navigator = useNavigation();

  const handlePress = () => {
    navigator.navigate('ProjectDetails',{
      data:data
    })
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.PressableContainer} onPress={handlePress}>
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
          <ProjectMiddleCard data={data} />
          <View style={styles.optionsStyle}>
            {data.Options.map(item => (
              <Text key={item.id} style={[styles.text, styles.items]}>
                {item.name}
              </Text>
            ))}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProjectDetailsCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    marginBottom: 20,
  },PressableContainer:{
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  head: {
    backgroundColor: GlobalColors.primaryBase,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 12,
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
    marginTop: 5,
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
  headLeft: {
    rowGap: 4,
  },
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
});
