import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import IosTabNavigation from 'navigation/IosTabNavigation';
import AndroidTabNavigation from 'navigation/AndroidTabNavigation';

const TabNavigation: React.FC = () => {
  return (
    <>
      {Platform.OS === 'android' ? (
        <AndroidTabNavigation />
      ) : (
        <IosTabNavigation />
      )}
    </>
  );
};

export default TabNavigation;
