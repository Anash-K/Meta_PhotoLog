import {Pressable, StyleSheet, Text, View} from 'react-native';

const ProjectActions = ({handleClose, handleEdit,optionTitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalHead}>
        <Pressable style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeText}>X</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Pressable style={styles.button} onPress={handleEdit}>
          <Text style={styles.moreOptions}>{optionTitle}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProjectActions;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    position: 'absolute',
    right: 10,
    top: 5,
    maxWidth: 100,
    borderRadius: 12,
    paddingTop: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  closeButton: {
    backgroundColor: '#ff6b6b',
    width: 'auto',
    padding: 4,
    borderRadius: 30,
    paddingHorizontal: 7,
  },
  closeText: {
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
  moreOptions: {
    color: '#5c546a',
    fontFamily: 'OpenSans-Regular',
  },
  modalHead: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  content: {
    marginTop: 10,
  },
  button: {
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 14,
    alignItems: 'center',
  },
});
