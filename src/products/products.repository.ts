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
            imgUrl: 'imagen.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            price: 200,
            stock: true,
            imgUrl: 'imagen.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description 3',
            price: 300,
            stock: true,
            imgUrl: 'imagen.jpg',
        }
    ];

    async getProducts(): Promise<any[]> {
        return await Promise.resolve(this.products);
    };

    async getProductsById(id: number): Promise<any> {
        for (const product of await this.getProducts()) {
            if (product.id === id) {
                return product;
            }
        }
        return null;
    };

    async createProduct(product: any) {
        const id = this.products.length + 1;
        const newProduct = { id, ...product };
        this.products.push(newProduct);
        return newProduct;
    };

    async updateProduct(id: number, product: any) {
        const productIndex = await Promise.resolve(this.products.findIndex(product => product.id === id));
        if (productIndex === -1) {
            throw new Error('Product not found');
        }
        const updatedProduct = { id, ...product };
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
    };

    async deleteProduct(id: number) {
        const productIndex = await Promise.resolve(this.products.findIndex(product => product.id === id));
        if (productIndex === -1) {
            throw new Error('Product not found');
        }
        const [deletedProduct] = await Promise.resolve(this.products.splice(productIndex, 1));
        return deletedProduct;
    };
}