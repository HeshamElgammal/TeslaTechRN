
export type AuthParamsList = {
    Login: undefined;
    Signup: undefined;
    ForgetPassword: undefined;
}
export type GeneralParamsList = {
    Notifications: undefined;
    PrivacyPolicy: undefined;
    ContactUs: undefined;
    About: undefined;
    TermsAndConditions:undefined;
    ChangePassword: undefined;
    FAQs: undefined;
    MyFavourites: undefined;
    MyOrders: undefined;
}
export type ClientParamsList={
    AllBrands: undefined;
    AllProducts:undefined;
    ProductDetails:any;
    ProductsByBrand:any;
    HomeClient:any;
}
export type DataCollectorParamsList={
    DataCollectorHome: undefined;
    Setting: undefined;
    Retailers: undefined;
    Clients: undefined;
    Products: undefined;
    Notifications: undefined;
    Orders: undefined;
    Analytics: undefined;
    Overview: undefined;
    Chats: undefined;
}

export type AppParamsList = {
    Auth: any;
    HomeClient: any;
    TabNav:any;
    EditProfile:any;
    General:any;
    Client:any;
    DataCollector:any;
}



export type PrimaryParamsList = AppParamsList & AuthParamsList;
export type PrimaryParamsListKeys = keyof PrimaryParamsList;
declare global {
    namespace ReactNavigation {
        interface RootParamList extends PrimaryParamsList { }
    }
}

