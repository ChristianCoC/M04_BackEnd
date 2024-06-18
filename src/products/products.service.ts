/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    
    constructor(private productsRepository: ProductsRepository) { }

    async getProducts(page: number, limit: number) {
        return await this.productsRepository.getProducts(page, limit);
    };

    async getProductsById(id: number) {
        return await this.productsRepository.getProductsById(id);
    };

    async createProduct(product: any) {
        return await this.productsRepository.createProduct(product);
    };

    async updateProduct(id: number, product: any) {
        return await this.productsRepository.updateProduct(id, product);
    };

    async deleteProduct(id: number) {
        return await this.productsRepository.deleteProduct(id);
    };
}
