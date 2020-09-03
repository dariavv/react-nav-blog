import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { AppNavigationParamList } from 'interfaces';
import THEME from 'theme';
import { createPost } from 'store/actions/postAction';

type CreateScreenProps = {
  navigation: StackNavigationProp<AppNavigationParamList, 'CreateScreen'>;
};

const CreateScreen: React.FC<CreateScreenProps> = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const defaultImage = require('../../../assets/images/default.jpg');

  const createPostHandler = () => {
    const newPost = {
      id: '0',
      img: defaultImage,
      text,
      date: new Date().toJSON(),
      booked: false,
    };
    dispatch(createPost(newPost));
    navigation.navigate('MainScreen');
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.title}>Post Description:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter post description"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image style={styles.image} source={defaultImage} />
          <View style={styles.button}>
            <Button
              title="Create Post"
              color={THEME.MAIN_COLOR}
              onPress={() => createPostHandler()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: THEME.TEXT_COLOR,
  },
  textInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: THEME.BORDER_COLOR,
    borderRadius: 3,
  },
  image: {
    width: '100%',
    height: 230,
  },
  button: {
    marginVertical: 10,
  },
});

export default CreateScreen;
