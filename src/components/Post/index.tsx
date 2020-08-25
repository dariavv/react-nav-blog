import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import THEME from 'theme';

const Post = ({ post }: any) => {
  return (
    <View style={styles.post}>
      <ImageBackground style={styles.image} source={{ uri: post.img }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {new Date(post.date).toLocaleDateString()}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    fontSize: 20,
    color: THEME.WHITE_COLOR,
    fontFamily: 'OpenSans-Regular',
  },
});

export default Post;
