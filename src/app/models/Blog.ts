export class Blog {
    public blogId: number | undefined;
    public blogTitle: String;
    public image: String;
    public blogContent: String;

    constructor(blogTitle: String, image: String, blogContent: String) {
        this.blogTitle = blogTitle;
        this.image = image;
        this.blogContent = blogContent
    }

}