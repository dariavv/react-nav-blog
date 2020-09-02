import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import THEME from 'theme';
import { HomeStackScreen } from 'navigation/StackNavigators/HomeStackScreen';
import { BookedStackScreen } from 'navigation/StackNavigators/BookedStackScreen';

const IosTab = createBottomTabNavigator();

const IosTabNavigation: React.FC = () => {
  return (
    <IosTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Bookmarked') {
            iconName = 'star';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        inactiveTintColor: THEME.TEXT_COLOR,
      }}>
      <IosTab.Screen name="Home" component={HomeStackScreen} />
      <IosTab.Screen name="Bookmarked" component={BookedStackScreen} />
    </IosTab.Navigator>
  );
};

export default IosTabNavigation;
