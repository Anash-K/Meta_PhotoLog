import {StyleSheet, Text, View} from 'react-native';
import {GlobalColors} from '../constants/Colors';
import CustomButton from '../components/ui/CustomButton';

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: GlobalColors.primaryBase,
        }}>
        <Text style={[styles.title, {color: '#90f4fc'}]}>Welcome Back,</Text>
        <Text style={[styles.title]}> Ronald Dahl!</Text>
        <View style={styles.headerCard}>
          <Text>Switch to Premium, Starting @ only $2.99 per month</Text>
          <CustomButton buttonTitle={'Subscribe'} />
        </View>
      </View>
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});
