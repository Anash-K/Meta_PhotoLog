import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import mapFrame from '../assets/images/mapFrame.png';
import ProjectMiddleCard from '../components/ui/ProjectsMiddleCard';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {GlobalColors} from '../constants/Colors';
import CustomButton from '../components/ui/CustomButton';
import RightArrowIcon from '../assets/images/RightArrow.png';

const ProjectDetails = ({route}) => {
  const navigator = useNavigation();

  const {data} = route.params;

  const handleMapNav = () => {
    navigator.navigate('ProjectMap');
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        overScrollMode="auto"
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.frame}>
            <Image
              source={mapFrame}
              resizeMode="cover"
              style={styles.mapFrame}
            />
            <Pressable style={styles.ImagePressable} onPress={handleMapNav}>
              <Text style={styles.rightIconText}>Expand Map</Text>
              <Image
                source={RightArrowIcon}
                style={styles.rightArrowIcon}
                resizeMode="contain"
              />
            </Pressable>
          </View>
          <View style={styles.content}>
            <View style={styles.TitleBox}>
              <View>
                <Text style={styles.titleLabel}>{data.subTitle}</Text>
              </View>
              <View>
                <Text style={styles.title}>{data.title}</Text>
              </View>
            </View>
            <View style={styles.descriptionBox}>
              <ProjectMiddleCard
                data={data}
                customIconStyle={styles.descriptionIcon}
                customImageBox={styles.ImageBox}
              />
            </View>
            <View style={styles.infoBox}>
              <Text
                style={[
                  styles.text,
                  {fontFamily: 'OpenSans-Semibold', marginBottom: 10},
                ]}>
                Project Info.
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: 'OpenSans-Regular',
                    fontSize: 14,
                    lineHeight: 19.07,
                  },
                ]}>
                {data.projectInfo}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonBox}>
        <CustomButton
          buttonTitle={'Add Photo'}
          containerStyle={{flex: 1}}
          InnerTextStyle={{color: GlobalColors.primaryBase}}
          pressableContainerStyle={{
            backgroundColor: 'rgba(0, 109, 119, 0.15)',
            opacity: 1,
          }}
        />
        <CustomButton
          buttonTitle={'Create Photolog'}
          containerStyle={{flex: 1}}
        />
      </View>
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: 'OpenSans-Bold',
    color: '#292D32',
  },
  titleLabel: {
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
    color: GlobalColors.primaryBase,
    marginBottom: 10,
  },
  frame: {
    borderRadius: 10,
    borderRightWidth: 0.5,
    borderColor: '#EAEAEA',
  },
  ImagePressable: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalColors.primaryBase,
    flexDirection: 'row',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    columnGap: 5,
    paddingRight: 13,
  },
  mapFrame: {
    width: '95%',
    alignSelf: 'center',
    height: 351,
    borderRadius: 10,
  },
  content: {
    flex: 1,
  },
  descriptionBox: {
    borderColor: '#E8E8EA',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 14,
    paddingBottom: 5,
    paddingTop: 15,
  },
  text: {
    fontSize: 14,
    color: '#5C546A',
  },
  TitleBox: {
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  descriptionIcon: {
    width: 13,
    height: 13,
  },
  ImageBox: {
    width: 25,
    height: 25,
    padding: 5,
  },
  infoBox: {
    paddingHorizontal: 14,
    paddingTop: 15,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    gap: 10,
    marginVertical: 15,
    paddingBottom: Platform.select({ios: 15}),
  },
  rightArrowIcon: {
    width: 6,
  },
  rightIconText: {
    color: 'white',
    fontFamily: 'OpenSans-Semibold',
    fontSize: 12,
  },
});
