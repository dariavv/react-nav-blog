import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,
  PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

type Options = {
  title?: string;
  cameraType?: 'back' | 'front' | undefined;
  mediaType?: 'video' | 'photo' | 'mixed' | undefined;
  storageOptions?: {
    skipBackup?: boolean;
    path?: string;
  };
};

type PhotoPickerProps = {
  onPick: (arg: string) => void;
};

const PhotoPicker: React.FC<PhotoPickerProps> = ({ onPick }) => {
  const [fileUri, setFileUri] = useState(null);

  const chooseImage = async () => {
    const options = {
      title: 'Select Photo',
      cameraType: 'back',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const newLocal: any = {
      title: 'We need your permission',
    };
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      newLocal,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');

      ImagePicker.showImagePicker(options as Options, (response: any) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          setFileUri(response.uri);
          onPick(response.uri);
        }
      });
    } else {
      console.log('Camera permission denied');
    }
  };

  const defaultImage = require('../../../assets/images/default.jpg');

  return (
    <View style={styles.container}>
      {fileUri && (
        <Image
          source={fileUri ? { uri: fileUri } : defaultImage}
          style={styles.image}
        />
      )}
      <Button title="Create Photo" onPress={chooseImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 230,
    marginBottom: 10,
  },
});

export default PhotoPicker;
