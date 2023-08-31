export class Product {
    public productId: number | undefined;
    public productName: String;
    public brand: String;
    public description: String;
    public category: String;
    public price: number;
    public quantity: number;
    public image: String;
    // public catergoryArray: String[];

    constructor(productName: String, brand: String, description: String, category: String, price: number, quantity: number, image: String) {
        this.productName = productName;
        this.brand = brand;
        this.description = description;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }
    // constructor(productName:String,shortDescription:String,price:number,quantity:number,scaledImage:String,catergoryArray:String[]);    

}