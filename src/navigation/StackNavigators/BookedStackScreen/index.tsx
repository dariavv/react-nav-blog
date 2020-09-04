import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import BookedScreen from 'screens/BookedScreen';
import PostScreen from 'screens/PostScreen';
import HeaderNavButtons from 'components/HeaderNavButtons';
import SCREEN_OPTIONS from 'constants';
import { ScreenOptions, IState } from 'interfaces';
import { toggleBooked } from 'store/actions/postAction';

const BookedStack = createStackNavigator();

export const BookedStackScreen: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const bookedList = useSelector((state: IState) => state.post.bookedPosts);
  return (
    <BookedStack.Navigator
      screenOptions={(SCREEN_OPTIONS as unknown) as ScreenOptions}>
      <BookedStack.Screen
        name="BookedScreen"
        component={BookedScreen}
        options={{
          title: 'Booked',
          headerLeft: () => (
            <HeaderNavButtons
              title="Drawer"
              iconName="menu-outline"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
      <BookedStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={({ route }: any) => {
          const isBooked = bookedList.some(
            (item) => item.id === route.params.postId,
          );
          return {
            title: `Post ${format(
              new Date(route.params.postDate),
              'dd-MM-yyyy',
            )}`,
            headerRight: () => (
              <HeaderNavButtons
                title="Star"
                iconName={isBooked ? 'star' : 'star-outline'}
                onPress={() => dispatch(toggleBooked(route.params.postId))}
              />
            ),
          };
        }}
      />
    </BookedStack.Navigator>
  );
};
