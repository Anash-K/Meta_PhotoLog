import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import SearchIcon from '../assets/images/SearchIcon.png';
import {FlatList} from 'react-native-gesture-handler';
import ProjectDetailsCard from '../components/ProjectDetailsCard';

const ProjectsData = [
  {
    title: 'Windows 11 Feature Rollout',
    subTitle: 'Microsoft Corporation',
    location: 'NW-24-17-3-W3',
    date: 'Oct 1, 2024 - Oct 31, 2024',
    Options: [
      {id: 1, name: 'Add Photo'},
      {id: 2, name: 'View Details'},
      {id: 3, name: 'View Photos (5)'},
      {id: 4, name: 'Create Photos'},
    ],
  },
];

const Projects = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.InputBox}>
        <Image
          source={SearchIcon}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Search projects..."
          placeholderTextColor={'#A0A5AD'}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <FlatList
        data={ProjectsData}
        keyExtractor={item => item.date}
        renderItem={({item}) => <ProjectDetailsCard data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingVertical: 16,
  },
  InputBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D7D8DC',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    columnGap: 15,
    paddingHorizontal: 15,
    marginHorizontal:14
  },
  input: {
    color: '#A0A5AD',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  searchIcon: {
    width: 18,
  },
});

export default Projects;
