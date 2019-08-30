export class delieveredOrder {
  _id: string;
  username: string;
  OrderTime: any;
  OrderNumber: string;
  OrderStatus: string;
  OrderList: [
    {
      _id: string;
      itemName: string;
      quantity: string;
      pricePerKg: string;
    }
  ];
  Payment: string;
}
