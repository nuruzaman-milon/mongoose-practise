export interface IProduct{
    title:{
        main_title:string;
        sub_title?:string;
    };
    price:number;
    desc:string;
    isOffer:boolean;
}