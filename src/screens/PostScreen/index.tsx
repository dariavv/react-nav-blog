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
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import THEME from 'theme';
import { IPost, AppNavigationParamList, IState } from 'interfaces';
import { deletePost } from 'store/actions/postAction';

type PostScreenProps = {
  route: RouteProp<AppNavigationParamList, 'PostScreen'>;
  navigation: StackNavigationProp<AppNavigationParamList, 'PostScreen'>;
};

const PostScreen: React.FC<PostScreenProps> = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { postId } = route.params;

  const post = useSelector((state: IState) =>
    state.post.allPosts.find((item: IPost) => item.id === postId),
  );

  const removeItem = () => {
    Alert.alert(
      'Delete Post',
      `Are you sure you want to delete Post ${format(
        new Date(post!.date),
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
          onPress: () => {
            navigation.goBack();
            dispatch(deletePost(postId));
          },
        },
      ],
      { cancelable: false },
    );
  };

  if (!post) {
    return null;
  }

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
