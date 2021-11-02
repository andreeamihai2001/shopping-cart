export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;


    constructor(id: number, title: string, price = 0, description: string, category: string, image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeuS_1ZPeKGL0PfeomD_vvU1kCZaAGcEePA&usqp=CAU' ){
        this.id=id;
        this.title = title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
    }
}
