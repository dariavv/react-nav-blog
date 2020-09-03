import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { format } from 'date-fns';

import DATA from 'data';
import THEME from 'theme';
import { IPost, AppNavigationParamList } from 'interfaces';

type PostScreenProps = {
  route: RouteProp<AppNavigationParamList, 'PostScreen'>;
  navigation: StackNavigationProp<AppNavigationParamList, 'PostScreen'>;
};

const PostScreen: React.FC<PostScreenProps> = ({ route, navigation }) => {
  const { postId } = route.params;

  const post: IPost = DATA.find((postItem) => postItem.id === postId) || {
    id: '0',
    img: '',
    text: '',
    date: '',
    booked: false,
  };

  const removeItem = () => {
    Alert.alert(
      'Delete Post',
      `Are you sure you want to delete Post ${format(
        new Date(post.date),
        'dd-MM-yyyy HH:mm',
      )}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {},
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={post.img} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{post.text}</Text>
      </View>
      <View>
        <Button
          title="Delete"
          onPress={removeItem}
          color={THEME.DANGER_COLOR}
        />
      </View>
      <View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('MainScreen')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  textContainer: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: THEME.TEXT_COLOR,
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
  },
});

export default PostScreen;
