export interface IPost {
  id: string;
  img: any;
  text: string;
  date: string;
  booked: boolean;
}

export interface IState {
  post: {
    allPosts: IPost[];
    bookedPosts: IPost[];
  };
}

export type AppNavigationParamList = {
  MainScreen:
    | {
        openItem: (post: IPost) => void;
        keyExtractor: (post: IPost) => void;
      }
    | undefined;
  PostScreen: {
    postId: string;
    postDescription: string;
    postDate: string;
    isBooked: boolean;
  };
  BookedScreen: {
    openItem: (post: IPost) => void;
    keyExtractor: (post: IPost) => void;
    bookedData: any;
  };
  AboutScreen: undefined;
  CreateScreen: undefined;
};

export type ScreenOptions = {
  headerStyle: {
    backgroundColor: string;
  };
  headerTintColor: string;
  headerTitleStyle: {
    fontSize: number;
    fontFamily: string;
  };
};
