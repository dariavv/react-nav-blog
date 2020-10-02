import React, { useState } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

type Options = {
  title: string;
  cameraType: string;
  mediaType: string;
  storageOptions: {
    skipBackup: boolean;
    path: string;
  };
};

const PhotoPicker: React.FC = () => {
  const [fileUri, setFileUri] = useState(null);

  const chooseImage = async () => {
    const options = {
      title: 'Select Photo',
      // cameraType: 'front',
      // mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response: any) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setFileUri(response.uri); // update state to update Image
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Create photo" onPress={chooseImage} />
      {fileUri && (
        <Image
          source={
            fileUri
              ? { uri: fileUri }
              : require('../../../assets/images/default.jpg')
          }
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 230,
    marginTop: 10,
  },
});

export default PhotoPicker;
