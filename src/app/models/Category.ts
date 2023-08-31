export class Category {
    public categoryId: number | undefined;
    public categoryName: String;

    constructor(categoryName: String) {
        this.categoryName = categoryName;
    }
}