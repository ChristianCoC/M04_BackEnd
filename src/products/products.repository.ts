import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsRepository {
    
    private products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description 1',
            price: 100,
            stock: true,
            imgUrl: 'imagen.jpg'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            price: 200,
            stock: true,
            imgUrl: 'imagen.jpg'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description 3',
            price: 300,
            stock: true,
            imgUrl: 'imagen.jpg'
        }
    ];

    async getProducts() {
        return this.products;
    };

    async getProductsById(id: number) {
        return this.products.find(product => product.id === id);
    };
}