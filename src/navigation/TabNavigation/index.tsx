import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import IosTabNavigation from 'navigation/IosTabNavigation';
import AndroidTabNavigation from 'navigation/AndroidTabNavigation';

const TabNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <AndroidTabNavigation />
      ) : (
        <IosTabNavigation />
      )}
    </NavigationContainer>
  );
};

export default TabNavigation;
