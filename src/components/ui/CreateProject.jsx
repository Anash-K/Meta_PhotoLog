import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const CreateProject = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>Create Project</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
