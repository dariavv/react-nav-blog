import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { format } from 'date-fns';

import THEME from 'theme';
import { IPost } from 'interfaces';

interface IPostProps {
  post: IPost;
  openItem: (post: IPost) => void;
}

const Post: React.FC<IPostProps> = ({ post, openItem }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => openItem(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={post.img}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {format(new Date(post.date), 'dd-MM-yyyy HH:mm')}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 230,
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
