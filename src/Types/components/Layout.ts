import React from "react";

export interface IContent {
  children: React.ReactNode;
}

export interface IHeader {
  onChangeSearchTextHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onFetchDataHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  inputValue?: string;
}
