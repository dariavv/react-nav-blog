import React, { useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Post from 'components/Post';
import { IPost, AppNavigationParamList } from 'interfaces';
import { StackNavigationProp } from '@react-navigation/stack';

type PostListProps = {
  data: any;
  navigation: StackNavigationProp<
    AppNavigationParamList,
    'MainScreen' | 'BookedScreen'
  >;
};

const PostList: React.FC<PostListProps> = ({ data, navigation }) => {
  const keyExtractor = useCallback((post: IPost) => post.id.toString(), []);

  const openItem = (post: IPost) => {
    navigation.navigate('PostScreen', {
      postId: post.id,
      postDescription: post.text,
      postDate: post.date,
      isBooked: post.booked,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <Post post={item} openItem={openItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default PostList;
