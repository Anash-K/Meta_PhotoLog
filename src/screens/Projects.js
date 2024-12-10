import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
  Platform,
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
    projectInfo:
      'This project focuses on introducing new features in Windows 11, ensuring compatibility, and enhancing the user experience through incremental updates.',
    projectCode: 'WIN11-2024',
    Options: [
      {id: 1, name: 'Add Photo'},
      {id: 2, name: 'View Project Details'},
      {id: 3, name: 'View Photos (5)'},
      {id: 4, name: 'Create PhotoLog'},
    ],
  },
  {
    title: 'Cloud Migration Project',
    subTitle: 'Amazon Web Services',
    location: 'AWS-East-2',
    date: 'Nov 1, 2024 - Nov 30, 2024',
    projectInfo:
      'This project involves migrating critical applications and data to AWS Cloud, improving scalability, security, and performance.',
    projectCode: 'CLOUD-MIG-2024',
    Options: [
      {id: 1, name: 'Add Photo'},
      {id: 2, name: 'View Project Details'},
      {id: 3, name: 'View Photos (3)'},
      {id: 4, name: 'Create PhotoLog'},
    ],
  },
  {
    title: 'AI-Powered Automation',
    subTitle: 'Google Inc.',
    location: 'Google Campus',
    date: 'Dec 1, 2024 - Dec 15, 2024',
    projectInfo:
      'Focused on implementing AI solutions to automate tasks, reduce errors, and increase efficiency across Google’s services.',
    projectCode: 'AI-AUTO-2024',
    Options: [
      {id: 1, name: 'Add Photo'},
      {id: 2, name: 'View Project Details'},
      {id: 3, name: 'View Photos (2)'},
      {id: 4, name: 'Create PhotoLog'},
    ],
  },
  {
    title: 'Cybersecurity Enhancement',
    subTitle: 'IBM Corporation',
    location: 'CyberZone-18-12-B',
    date: 'Jan 1, 2025 - Jan 25, 2025',
    projectInfo:
      'Enhancing IBM’s cybersecurity measures to protect sensitive data and infrastructure from advanced threats and breaches.',
    projectCode: 'CYBERSEC-2025',
    Options: [
      {id: 1, name: 'Add Photo'},
      {id: 2, name: 'View Project Details'},
      {id: 3, name: 'View Photos (8)'},
      {id: 4, name: 'Create PhotoLog'},
    ],
  },
  {
    title: 'Data Analytics Overhaul',
    subTitle: 'Facebook Inc.',
    location: 'FB-21-04-6-A',
    date: 'Feb 1, 2025 - Feb 28, 2025',
    projectInfo:
      'Revamping Facebook’s data analytics platform to provide faster insights and better data-driven decision-making capabilities.',
    projectCode: 'DATA-ANA-2025',
    Options: [
      {id: 1, name: 'Add Photo'},
      {id: 2, name: 'View Project Details'},
      {id: 3, name: 'View Photos (10)'},
      {id: 4, name: 'Create PhotoLog'},
    ],
  },
  {
    title: 'E-commerce Platform Redesign',
    subTitle: 'Shopify',
    location: 'Shopify-15-09-2-D',
    date: 'Mar 1, 2025 - Mar 30, 2025',
    projectInfo:
      'Redesigning Shopify’s e-commerce platform to improve user experience, boost performance, and add innovative features for merchants.',
    projectCode: 'SHOP-RED-2025',
    Options: [
      {id: 1, name: 'Add Photo'},
      {id: 2, name: 'View Project Details'},
      {id: 3, name: 'View Photos (4)'},
      {id: 4, name: 'Create PhotoLog'},
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
    paddingTop: 16,
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
    marginHorizontal: 14,
    marginBottom: 18,
    paddingVertical: Platform.select({ios: 10, android: 6}),
  },
  input: {
    color: '#A0A5AD',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    flex: 1,
  },
  searchIcon: {
    width: 18,
  },
});

export default Projects;
