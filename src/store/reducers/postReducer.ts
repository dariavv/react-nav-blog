/* eslint-disable no-case-declarations */
import { LOAD_POSTS, TOGGLE_BOOKED } from 'store/types';
import { IPost } from 'interfaces';

interface IAction {
  type: string;
  payload: any;
}

const initialState = {
  allPosts: [],
  bookedPosts: [],
};

export const postReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter(
          (post: IPost) => post.booked === true,
        ),
      };
    case TOGGLE_BOOKED:
      const allPosts = state.allPosts.map((post: IPost) => {
        const postItem = post;
        if (postItem.id === action.payload) {
          postItem.booked = !postItem.booked;
        }
        return postItem;
      });
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((post: IPost) => post.booked === true),
      };
    default:
      return state;
  }
};
