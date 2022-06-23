export interface ITopSalesItem {
    login: string;
    url: string;
    avatar_url: string;
}

export interface ITopSalesList {
    items: ITopSalesItem[];
}

export interface ITopSales {
    items: ITopSalesItem[];
}

export interface ITopSalesItemState {
    name: string;
}