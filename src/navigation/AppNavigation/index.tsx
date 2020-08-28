import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { format } from 'date-fns';

import THEME from 'theme';
import MainScreen from 'screens/MainScreen';
import AboutScreen from 'screens/AboutScreen';
import BookedScreen from 'screens/BookedScreen';
import CreateScreen from 'screens/CreateScreen';
import PostScreen from 'screens/PostScreen';
import HeaderNavButtons from 'components/HeaderNavButtons';

const HomeStack = createStackNavigator();
const BookedStack = createStackNavigator();
const IosTab = createBottomTabNavigator();
const AndroidTab = createMaterialBottomTabNavigator();

const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator
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
      }}>
      <HomeStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Instagram',
          headerRight: () => (
            <HeaderNavButtons
              title="Photo"
              iconName="camera-outline"
              onPress={() => {}}
            />
          ),
          headerLeft: () => (
            <HeaderNavButtons
              title="Burger"
              iconName="menu-outline"
              onPress={() => {}}
            />
          ),
        }}
      />
      <HomeStack.Screen
        component={AboutScreen}
        name="AboutScreen"
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android'
                ? THEME.DANGER_COLOR
                : THEME.BORDER_COLOR,
          },
          headerTintColor:
            Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.DANGER_COLOR,
        }}
      />
      <HomeStack.Screen
        name="BookedScreen"
        component={BookedScreen}
        options={{
          title: 'Booked',
          headerRight: () => (
            <HeaderNavButtons
              title="Photo"
              iconName="camera-outline"
              onPress={() => {}}
            />
          ),
          headerLeft: () => (
            <HeaderNavButtons
              title="Burger"
              iconName="menu-outline"
              onPress={() => {}}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          title: 'Create',
        }}
      />
      <HomeStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={({ route }: any) => ({
          title: `Post ${format(
            new Date(route.params.postDate),
            'dd-MM-yyyy',
          )}`,
          headerRight: () => (
            <HeaderNavButtons
              title="Star"
              iconName={route.params.isBooked ? 'star' : 'star-outline'}
              onPress={() => {}}
            />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

const BookedStackScreen: React.FC = () => {
  return (
    <BookedStack.Navigator
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
      }}>
      <BookedStack.Screen
        name="BookedScreen"
        component={BookedScreen}
        options={{
          title: 'Booked',
          headerLeft: () => (
            <HeaderNavButtons
              title="Burger"
              iconName="menu-outline"
              onPress={() => {}}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={({ route }: any) => ({
          title: `Post ${format(
            new Date(route.params.postDate),
            'dd-MM-yyyy',
          )}`,
          headerRight: () => (
            <HeaderNavButtons
              title="Star"
              iconName={route.params.isBooked ? 'star' : 'star-outline'}
              onPress={() => {}}
            />
          ),
        })}
      />
    </BookedStack.Navigator>
  );
};

const AndroidTabNavigation: React.FC = () => {
  return (
    <AndroidTab.Navigator
      initialRouteName="Home"
      activeColor={THEME.WHITE_COLOR}
      inactiveColor={THEME.MAIN_COLOR4}
      barStyle={{ backgroundColor: THEME.MAIN_COLOR }}>
      <AndroidTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <AndroidTab.Screen
        name="Bookmarked"
        component={BookedStackScreen}
        options={{
          tabBarLabel: 'Bookmarked',
          tabBarIcon: ({ color }) => (
            <Ionicons name="star" color={color} size={24} />
          ),
        }}
      />
    </AndroidTab.Navigator>
  );
};

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
