export class placedOrder{
    _id:string;
    username:string;
    OrderTime:any;
    OrderNumber:string;
    OrderStatus:string;
    OrderList:[{
        _id:string;
        itemName:string;
        quantity:string;
        pricePerKg:string;
    }]
}