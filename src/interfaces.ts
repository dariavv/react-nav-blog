export interface IPost {
  id: string;
  img: any;
  text: string;
  date: string;
  booked: boolean;
}

export interface IHeaderIcon {
  title: string;
  iconName: string;
  onPress: () => void;
}
