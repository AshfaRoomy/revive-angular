import { User } from "./User";
import { Product } from "./Product";

export class Cart {

    private cartId: number;
    private user: User;
    private product: Product;
    private totalPrice: number;
    private isPurchased: boolean;
    private cartquantity: number;

    public Cart(user: User, product: Product, totalPrice: number, isPurchased: boolean, cartquantity: number) {
        this.user = user;
        this.product = product;
        this.cartquantity = cartquantity;
        this.totalPrice = totalPrice;
        this.isPurchased = false;
    }
}