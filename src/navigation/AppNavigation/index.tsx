import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import THEME from 'theme';
import MainScreen from 'screens/MainScreen';
import AboutScreen from 'screens/AboutScreen';
import BookedScreen from 'screens/BookedScreen';
import CreateScreen from 'screens/CreateScreen';
import PostScreen from 'screens/PostScreen';
import HeaderIcon from 'components/HeaderIcon';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.BORDER_COLOR,
          },
          headerTintColor:
            Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.TEXT_COLOR,
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: 'BadScript-Regular',
          },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
              <Item
                title="Photo"
                iconName="camera-outline"
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
        }}>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: 'Instagram',
          }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            title: 'About',
            headerStyle: {
              backgroundColor:
                Platform.OS === 'android'
                  ? THEME.DANGER_COLOR
                  : THEME.BORDER_COLOR,
            },
            headerTintColor:
              Platform.OS === 'android'
                ? THEME.WHITE_COLOR
                : THEME.DANGER_COLOR,
          }}
        />
        <Stack.Screen
          name="BookedScreen"
          component={BookedScreen}
          options={{
            title: 'Booked',
          }}
        />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{
            title: 'Create',
          }}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={({ route }: any) => ({
            title: `Post ${new Date(route.params.postDate).toLocaleDateString(
              'en-EN',
            )}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
