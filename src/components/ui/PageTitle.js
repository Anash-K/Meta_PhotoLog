import {StyleSheet, View ,Text} from 'react-native';

const PageTitle = ({children, textStyle ,titleBoxStyle}) => {
  return (
    <View style={[styles.container,titleBoxStyle]}>
      <Text style={[styles.title, textStyle]}>{children}</Text>
      
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
