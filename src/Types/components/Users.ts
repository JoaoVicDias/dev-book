export interface IUsersItem {
  login: string;
  url: string;
  avatar_url: string;
  className?: string;
  onClickItem?: () => void;
}

export interface IUsersList {
  items: IUsersItem[];
  className?: string;
  classNameItem?: string;
  rows?: number;
  loading: boolean;
  itemsPerRow?: number;
  onClickItem?: () => void;
}

export interface IUsers {
  items: IUsersItem[];
  className?: string;
  classNameList?: string;
  classNameItem?: string;
  title: string;
  rows?: number;
  itemsPerRow?: number;
  loading: boolean;
  onClickItem?: () => void;
}

export interface IUsersItemState {
  name: string;
  bio: string;
}
