import React, {memo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {images} from '../../assets';
import ProjectActions from './ProjectActions';
import {useNavigation} from '@react-navigation/native';
import {Menu, MenuItem} from 'react-native-material-menu';

const PhotoLogCard = memo(({item}) => {
  const [moreAction, setMoreAction] = useState(false);
  const navigation = useNavigation();

  const handleToggle = () => {
    setMoreAction(!moreAction);
  };

  const navToEditPhotoLog = () => {};

  const [visible, setVisible] = useState(false);

  const hideMenu = () => {
    setVisible(false);
  };

  const handleEdit = () => {
    hideMenu();
    navigation.navigate('CreatePhotoLog',{
      photoLogData:item
    });
  }

  const showMenu = () => setVisible(true);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 9,
        }}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <View>
          <Pressable style={{padding: 3}} onPress={showMenu}>
            <Image
              style={{width: 4, margin: 3}}
              source={images.blackMoreIcon}
              tintColor={'#006D77'}
              resizeMode="contain"
            />
          </Pressable>
          <Menu visible={visible} onRequestClose={hideMenu}>
            <MenuItem onPress={handleEdit}>Edit PhotoLog</MenuItem>
          </Menu>
        </View>
      </View>
      <View style={{rowGap: 9, marginBottom: 25}}>
        <Text style={styles.projectName}>{item.ProjectName}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 'auto',
        }}>
        <Image
          source={images.miniIcon}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 1)',
          }}
          resizeMode="contain"
        />
        <View
          style={{
            backgroundColor: 'rgba(199, 220, 220, 1)',
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 1)',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: 40,
            justifyContent: 'center',
            marginLeft: -18,
          }}>
          <Text style={styles.innerText}>
            {item.count > 5 ? `+5` : item.count}
          </Text>
        </View>
      </View>
    </View>
  );
});

export default PhotoLogCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 109, 119, 0.07)',
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  titleBox: {
    borderBottomColor: 'rgba(188, 218, 218, 1)',
    borderBottomWidth: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Urbanist-SemiBold',
    lineHeight: 21.6,
    color: '#006D77',
    backgroundColor: 'transparent',
    marginBottom: -6,
  },
  projectName: {
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
    lineHeight: 19.2,
    color: '#006D77',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Urbanist-Medium',
    lineHeight: 16.8,
    color: 'rgba(75, 95, 95, 1)',
    marginTop:2
  },
  innerText: {
    fontSize: 14,
    fontFamily: 'Urbanist-Medium',
    lineHeight: 16.8,
    color: 'rgba(75, 95, 95, 1)',
  },
});
