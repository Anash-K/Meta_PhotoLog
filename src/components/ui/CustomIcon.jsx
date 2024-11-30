import {Image, Pressable, StyleSheet, View} from 'react-native';

const CustomIcon = ({
  srcPath,
  size = 24,
  color = 'black',
  OnPressAction,
  bgColor,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={OnPressAction}>
        <View>
          <Image
            style={[
              styles.imageStyle,
              {
                width: size,
                height: size,
                tintColor: color,
                backgroundColor: bgColor,
              },
            ]}
            source={srcPath}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {},
});
