/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(private productsRepository: ProductsRepository) { }

    getProducts() {
        return this.productsRepository.getProducts();
    };

    getProductsById(id: number) {
        return this.productsRepository.getProductsById(id);
    }
}
