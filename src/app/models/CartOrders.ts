import { Cart } from "./Cart";
import { Orders } from "./Orders";

export class CartOrders {
    private cartOrdersId: number;
    private cart: Cart;
    private orders: Orders;

    constructor(orders: Orders, cart: Cart) {
        this.orders = orders;
        this.cart = cart;
    }
}