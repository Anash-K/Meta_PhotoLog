import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {Pressable, ScrollView} from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import CustomInput from './CustomInput';
import DocumentPicker from 'react-native-document-picker';
import {useLayoutEffect, useState} from 'react';

const CreateProject = ({route}) => {
  const navigator = useNavigation();
  const [file, setFile] = useState(null);
  const {data} = route.params || {};

  useLayoutEffect(() => {
    if (data) {
      navigator.setOptions({
        headerTitle: 'Edit Project',
      });
    } else {
      navigator.setOptions({
        headerTitle: 'Create Project',
      });
    }
  }, [data]);

  const handleCreateProject = () => {
    // navigator.navigate()
  };

  const handleSelect = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('URI:', res.uri);
      console.log('Name:', res.name);
      setFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.log('Unknown error: ', err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 40}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.addButton} onPress={handleSelect}>
                <Text style={styles.addLogo}>+</Text>
              </Pressable>
              {file ? (
                <Text style={styles.iconText}>Selected file: {file.name}</Text>
              ) : (
                <Text style={styles.iconText}>Logo</Text>
              )}
            </View>
            <View style={styles.inputs}>
              <CustomInput
                label={'Client'}
                placeholderText={'e.g. XYZ Inc.'}
                inputConfigurations={{
                  placeholderTextColor: 'rgba(92, 84, 106, 0.5)',
                  value: data ? data.subTitle : '',
                }}
              />
              <CustomInput
                label={'Project Name'}
                placeholderText={'e.g. Project Phoenix'}
                inputConfigurations={{
                  placeholderTextColor: 'rgba(92, 84, 106, 0.5)',
                  value: data ? data.title : '',
                }}
              />
              <CustomInput
                label={'Location'}
                placeholderText={'e.g. SW-01-001-01 W1M / 123 Main St.'}
                inputConfigurations={{
                  placeholderTextColor: 'rgba(92, 84, 106, 0.5)',
                  value: data ? data.location : '',
                }}
              />
              <CustomInput
                label={'Project Code'}
                placeholderText={'e.g. 12345-123'}
                inputConfigurations={{
                  placeholderTextColor: 'rgba(92, 84, 106, 0.5)',
                  value: data ? data.projectCode : '',
                }}
              />
              <CustomInput
                label={'Budget Code'}
                placeholderText={'e.g. 2025001RE'}
                inputConfigurations={{
                  placeholderTextColor: 'rgba(92, 84, 106, 0.5)',
                  value: data ? data.date : '',
                }}
              />
              <CustomInput
                label={'Description'}
                placeholderText={'Project details...'}
                inputConfigurations={{
                  placeholderTextColor: 'rgba(92, 84, 106, 0.5)',
                  multiline: true,
                  value: data ? data.projectInfo : '',
                }}
                inputStyle={{height: 100, textAlignVertical: 'top'}}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.bottomButton}>
        <CustomButton
          buttonTitle={'Create Project'}
          OnPressAction={handleCreateProject}
        />
      </View>
    </View>
  );
};

export default CreateProject;

const styles = StyleSheet.create({
  inputs: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 14,
  },
  addLogo: {
    fontSize: 50,
    color: '#AAA6B1',
  },
  addButton: {
    backgroundColor: '#F8F8F8',
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
  bottomButton: {},
});
