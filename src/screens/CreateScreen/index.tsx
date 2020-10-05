import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { AppNavigationParamList } from 'interfaces';
import THEME from 'theme';
import { createPost } from 'store/actions/postAction';
import PhotoPicker from 'components/PhotoPicker';

type CreateScreenProps = {
  navigation: StackNavigationProp<AppNavigationParamList, 'CreateScreen'>;
};

const CreateScreen: React.FC<CreateScreenProps> = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const imgRef = useRef();

  const createPostHandler = () => {
    const newPost = {
      id: '0',
      img: imgRef.current,
      text,
      date: new Date().toJSON(),
      booked: false,
    };
    console.log('URI', newPost.img);
    dispatch(createPost(newPost));
    navigation.navigate('MainScreen');
  };

  const photoPickHandler = (uri: any) => {
    imgRef.current = uri;
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
          <PhotoPicker onPick={photoPickHandler} />
          <View style={styles.button}>
            <Button
              title="Create Post"
              color={THEME.MAIN_COLOR}
              onPress={() => createPostHandler()}
              disabled={!text}
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
