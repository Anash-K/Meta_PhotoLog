import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import threeDotIcon from '../assets/images/more.png';
import {GlobalColors} from '../constants/Colors';
import locationIcon from '../assets/images/locationIcon.png';
import dateIcon from '../assets/images/dateImage.png';
import {useNavigation} from '@react-navigation/native';
import ProjectMiddleCard from './ui/ProjectsMiddleCard';
import {useState} from 'react';
import ProjectActions from './ui/ProjectActions';
import {Menu, MenuItem} from 'react-native-material-menu';

const ProjectDetailsCard = ({data}) => {
  const navigator = useNavigation();
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const handlePress = () => {};

  const navToProjectDetails = text => {
    if (text === 'View Project Details') {
      navigator.navigate('ProjectDetails', {
        data: data,
      });
    }
  };

  const navToEditProject = () => {
    hideMenu();
    navigator.navigate('CreateProject', {
      data: data,
    });
  };

  const toggleMoreActions = () => {
    setMoreAction(!moreAction);
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
            <Pressable style={styles.moreOptionsButton} onPress={showMenu}>
              <Image
                source={threeDotIcon}
                style={styles.moreDetails}
                resizeMode="contain"
              />
            </Pressable>
            <Menu visible={visible} onRequestClose={hideMenu}>
              <MenuItem onPress={navToEditProject} style={styles.text}>
                Edit Project
              </MenuItem>
            </Menu>
          </View>
        </View>
        <View style={styles.content}>
          <ProjectMiddleCard data={data} />
          <View style={styles.optionsStyle}>
            {data.Options.map(item => (
              <Pressable
                style={styles.items}
                key={item.id}
                onPress={() => navToProjectDetails(item.name)}>
                <Text style={[styles.text]}>{item.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProjectDetailsCard;

const styles = StyleSheet.create({
  button: {},
  container: {
    marginHorizontal: 14,
    marginBottom: 20,
  },
  PressableContainer: {
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
    paddingTop: 6,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headLeft: {
    rowGap: 6,
    paddingTop: 5,
  },
  headRight: {},
  text: {
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
    color: '#5C546A',
  },
  headTitle: {
    color: 'white',
    fontFamily: 'OpenSans-Semibold',
  },
  moreDetails: {
    width: 3.5,
  },
  moreOptionsButton: {
    padding: 5,
  },
});
