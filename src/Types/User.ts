export interface ICard {
  title: string;
  images: {
    src: string;
    href?: string;
  }[];
  listClassName?: string;
}

export interface ICardList {
  images: {
    src: string;
    href?: string;
  }[];
  className?: string;
}

export interface IUserInformationsState {
  name: string;
  repos: {
    name: string;
    html_url: string;
  }[];
}
