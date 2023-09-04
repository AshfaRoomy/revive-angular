import { User } from "./User";

export class Orders {
    private ordersId: number;
    private date: String;
    private status: String;
    private user: User;
    private total: number;
    private phone: String;
    private address: String;

    constructor(phone: String, address: String, total: number, status: String,) {
        this.address = address;
        this.phone = phone;
        this.status = status;
        this.total = total;
    }
}