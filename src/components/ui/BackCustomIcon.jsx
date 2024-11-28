import {StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import backIcon from '../../assets/images/backIcon.png';
import {useNavigation} from '@react-navigation/native';
import { GlobalColors } from '../../constants/Colors';

const BackCustomButton = () => {
  const navigator = useNavigation();

  const handleBackNav = () => {
    navigator.goBack();
  };
  return (
    <CustomButton
      OnPressAction={handleBackNav}
      Icon={backIcon}
      IconStyle={styles.backButtonIcon}
      pressableContainerStyle={styles.backButtonStyle}
      containerStyle={{margin: 0, padding: 0}}
      pressableStyle={styles.backButtonContainer}
      InnerTextStyle={{fontSize: 1}}
    />
  );
};

export default BackCustomButton;

const styles = StyleSheet.create({
  rightIconStyle: {
    width: 4,
    height: 14,
  },
  headerTitleLook: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },
  backButtonIcon: {
    width: 9,
    height: 13,
    color: GlobalColors.primaryBase,
  },
  backButtonStyle: {
    margin: 0,
    padding: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonContainer: {
    margin: 0,
    paddingHorizontal: 8,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
