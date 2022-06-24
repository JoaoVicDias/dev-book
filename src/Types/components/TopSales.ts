export interface ITopSalesItem {
    login: string;
    url: string;
    avatar_url: string;
    className?: string;
}

export interface ITopSalesList {
    items: ITopSalesItem[];
    className?: string;
    classNameItem?: string;
    rows?: number;
    itemsPerRow?: number;
}

export interface ITopSales {
    items: ITopSalesItem[];
    className?: string;
    classNameList?: string;
    classNameItem?: string;
    title: string;
    rows?: number;
    itemsPerRow?: number;
}

export interface ITopSalesItemState {
    name: string;
}