import { LOAD_POSTS, TOGGLE_BOOKED, DELETE_POST } from 'store/types';
import DATA from 'data';

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};

export const toggleBooked = (id: string) => {
  return {
    type: TOGGLE_BOOKED,
    payload: id,
  };
};

export const deletePost = (id: string) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};
