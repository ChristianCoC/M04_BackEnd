import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";

function validateProduct(product: any) {
    return (
        typeof product.name === 'string' &&
        typeof product.description === 'string' &&
        typeof product.price === 'number' &&
        typeof product.stock === 'boolean' &&
        typeof product.imgUrl === 'string'
    )
};

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
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'Description 4',
            price: 400,
            stock: true,
            imgUrl: 'imagen.jpg',
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'Description 5',
            price: 500,
            stock: true,
            imgUrl: 'imagen.jpg',
        }
    ];

    async getProducts(page: number, limit: number): Promise<any[]> {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        return this.products.slice(startIndex, endIndex);
    };

    async getProductsById(id: number): Promise<any> | null {
        for (const { ...product } of this.products) {
            if (product.id === id) {
                return product;
            }
        }
        return null;
    };

    async createProduct(product: any) {
        if (!validateProduct(product)) {
            throw new BadRequestException('Invalid product');
        }
        const id = this.products.length + 1;
        const newProduct = { id, ...product };
        this.products.push(newProduct);
        return newProduct;
    };

    async updateProduct(id: number, product: any) {
        if (!validateProduct(product)) {
            throw new BadRequestException('Invalid product');
        }
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            throw new NotFoundException('Product not found');
        }
        const updatedProduct = { id, ...product };
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
    };

    async deleteProduct(id: number) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            throw new NotFoundException('Product not found');
        }
        const [deletedProduct] = this.products.splice(productIndex, 1);
        return deletedProduct;
    };
}