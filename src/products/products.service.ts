/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
    
    constructor(private productsRepository: ProductsRepository) { };

    async getProducts(page: number, limit: number): Promise<Products[]> {
        return await this.productsRepository.getProducts(page, limit);
    };

    async getProductsById(id: string): Promise<Products> {
        return await this.productsRepository.getProductsById(id);
    };

    async createProduct(product: Products): Promise<Products> {
        return await this.productsRepository.createProduct(product);
    };

    async updateProduct(id: string, product: Products): Promise<Products> {
        return await this.productsRepository.updateProduct(id, product);
    };

    async deleteProduct(id: string): Promise<{ message: string; id: string; name: string; }> {
        return await this.productsRepository.deleteProduct(id);
    };
}
