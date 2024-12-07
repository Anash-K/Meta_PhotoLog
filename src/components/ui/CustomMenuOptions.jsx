import {Image, StyleSheet, Text, View} from 'react-native';
import {GlobalColors} from '../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomMenuOptions = ({data, OnPressHandle}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={OnPressHandle.bind(this,data.goToPage)}>
      <Image
        source={data.icon1}
        tintColor={GlobalColors.primaryBase}
        resizeMode="contain"
        style={styles.icon1}
      />
      <Text style={styles.text}>{data.title}</Text>
      <Image
        source={data.icon2}
        style={styles.icon2}
        tintColor={'rgba(67, 67, 67, 1)'}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default CustomMenuOptions;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(241, 242, 245, 1)',
    paddingVertical: 6,
  },
  text: {
    flexGrow: 1,
  },
  icon1: {
    width: 24,
  },
  icon2: {
    width: 9,
    height: 20,
    transform: [{rotate: '180deg'}],
  },
});
