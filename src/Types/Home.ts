import React from "react";

export interface IStalkPeople {
    onChangeSearchTextHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFetchDataHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}