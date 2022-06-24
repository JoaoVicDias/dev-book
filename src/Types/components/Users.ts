export interface IUsersItem {
    login: string;
    url: string;
    avatar_url: string;
    className?: string;
}

export interface IUsersList {
    items: IUsersItem[];
    className?: string;
    classNameItem?: string;
    rows?: number;
    loading: boolean;
    itemsPerRow?: number;
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
}

export interface IUsersItemState {
    name: string;
}