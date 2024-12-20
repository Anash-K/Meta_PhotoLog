import {StyleSheet, Text, View} from 'react-native';
import {GlobalColors} from '../constants/Colors';
import CustomButton from '../components/ui/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import CustomMenuOptions from '../components/ui/CustomMenuOptions';
import {images} from '../assets';
import {useContext} from 'react';
import {AuthContext} from '../auth/AuthContext';

const demoData = [
  {
    id: 1,
    icon1: images.chatTabIcon,
    icon2: images.backGreenIcon,
    title: 'PhotoLog Templates',
    goToPage: 'TemplatesNav',
  },
  {
    id: 2,
    icon1: images.editIcon,
    icon2: images.backGreenIcon,
    title: 'Edit Profile',
    goToPage: 'EditProfile',
  },
  {
    id: 3,
    icon1: images.lockIcon,
    icon2: images.backGreenIcon,
    title: 'Change Password',
  },
  {
    id: 4,
    icon1: images.helpIcon,
    icon2: images.backGreenIcon,
    title: 'Help & Support',
  },
  {
    id: 5,
    icon1: images.privacyIcon,
    icon2: images.backGreenIcon,
    title: 'Privacy Policy',
  },
  {
    id: 6,
    icon1: images.termsIcon,
    icon2: images.backGreenIcon,
    title: 'Terms & Conditions',
    goToPage: 'UnlockAllFeatures',
  },
  {
    id: 7,
    icon1: images.trashIcon,
    icon2: images.backGreenIcon,
    title: 'Delete Account',
  },
  {
    id: 8,
    icon1: images.logoutIcon,
    icon2: images.backGreenIcon,
    title: 'Logout',
    goToPage: 'login',
  },
];

const MainMenu = ({navigation}) => {
  const {setIsLogin} = useContext(AuthContext);

  const navToUnlockFeature = () => {
    navigation.navigate('UnlockAllFeatures');
  };

  const handlePress = PageName => {
    if (PageName != 'login' && PageName) {
      navigation.navigate(PageName);
    }

    if (PageName == 'login') {
      setIsLogin(false);
    }else{
      console.log("test")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, {color: '#90f4fc'}]}>Welcome Back,</Text>
        <Text style={[styles.title]}>Ronald Dahl!</Text>
        <View style={styles.headerCard}>
          <Text
            style={styles.premiumText}
            numberOfLines={2}
            ellipsizeMode="tail">
            Switch to Premium, Starting @ only
            <Text style={{color: GlobalColors.primaryBase}}> $2.99</Text> per
            month
          </Text>
          <LinearGradient
            colors={['#2FA9B5', '#006D77']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.subscribeButton}>
            <Pressable
              style={{paddingHorizontal: 20, paddingVertical: 10}}
              onPress={navToUnlockFeature}>
              <Text style={styles.subscribeText}>Subscribe</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 30}}>
          {demoData.map((item, index) => (
            <CustomMenuOptions
              key={item.id}
              data={item}
              OnPressHandle={handlePress}
            />
          ))}
        </View>
        <Text style={styles.versionText}>V 1.2.0.1</Text>
      </ScrollView>
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalColors.primaryBase,
    paddingHorizontal: 13,
    paddingVertical: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    lineHeight: 27.24,
    fontFamily: 'OpenSans-Semibold',
    color: '#fff',
  },
  headerCard: {
    backgroundColor: 'rgba(241, 244, 254, 1)',
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 15,
    borderRadius: 12,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    paddingBottom:11,
    alignItems:'center',
    borderWidth:2,
    borderColor:'rgba(241, 244, 254, 0.25)'
  },
  premiumText: {
    flexGrow: 1,
    flexWrap: 'wrap',
    maxWidth: 200,
    color: '#000',
  },
  subscribeButton: {
    borderRadius: 56,
  },
  subscribeText: {
    color: '#fff',
    textAlign: 'center',
  },
  versionText: {
    color: '#006D77',
    fontSize: 12,
    lineHeight: 16.34,
    fontFamily: 'OpenSans-Semibold',
    textAlign: 'center',
  },
});
