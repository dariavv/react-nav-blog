import React, { useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Post from 'components/Post';
import { IPost } from 'interfaces';

type PostListProps = {
  data: any;
  openItem: (post: IPost) => void;
};

const PostList: React.FC<PostListProps> = ({ data, openItem }) => {
  const keyExtractor = useCallback((post: IPost) => post.id.toString(), []);

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
