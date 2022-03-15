export class Product {
    id: number;
    brand: string;
    title: string;
    price: number;
    quantity: number;
    description: string;
    category: string;
    image: string;
    items: number;


    constructor(id: number, brand: string, title: string, price = 0, quantity=0, description: string, category: string, image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeuS_1ZPeKGL0PfeomD_vvU1kCZaAGcEePA&usqp=CAU',items = 0){
        this.id=id;
        this.brand = brand;
        this.title = title;
        this.price=price;
        this.quantity=quantity;
        this.description=description;
        this.category=category;
        this.image=image;
        this.items = items;
    }
}
