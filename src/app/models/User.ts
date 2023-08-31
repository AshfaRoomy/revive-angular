export class User {
    public userId: number | undefined;
    public username: String;
    public email: String;
    public phone: String;
    public address: String;
    public password: String;

    constructor(username: String, email: String, phone: String, address: String, password: String) {
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.password = password;
    }
}