import React from "react";

export interface IInputSearch {
  className?: string;
  children?: React.ReactNode;
  onChangeSearchTextHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onFetchDataHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  value?: string;
}

export interface IInputSearchInput {
  value: string;
  isValid: boolean;
  validationRules: {
    isRequired: boolean;
  };
}

export interface IUseSearchPageState {
  global: boolean;
  home: boolean;
}

export interface IInputSearchState {
  [key: string]: IInputSearchInput;
  global: IInputSearchInput;
  home: IInputSearchInput;
}

export interface IUseSearchContext {
  onChangeSearchTextHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: "global" | "home"
  ) => void;
  page: IUseSearchPageState;
  searchText: IInputSearchState;
  onClearSearchHandler: (name: "global" | "home") => void;
  onSetPage: (name: "global" | "home", value: boolean) => void;
}

export interface IUseSearchProvider {
  children?: React.ReactNode;
}
