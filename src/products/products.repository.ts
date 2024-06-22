import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./products.entity";
import { Repository } from "typeorm";


function validateProduct(product: Products) {
    return (
        typeof product.name === 'string' &&
        typeof product.description === 'string' &&
        typeof product.price === 'number' &&
        typeof product.stock === 'number' &&
        typeof product.imgUrl === 'string'
    )
};

@Injectable()
export class ProductsRepository {

    constructor(@InjectRepository(Products) private productsRepository: Repository<Products>) { }

    async getProducts(page: number, limit: number): Promise<Products[]> {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        return this.productsRepository.find({ skip: startIndex, take: endIndex });
    };

    async getProductsById(id: string): Promise<Products> {
        return this.productsRepository.findOneBy({ id });
    };

    async createProduct(product: Products): Promise<Products> {
        return this.productsRepository.save(product);
    };

    async updateProduct(id: string, product: Products): Promise<Products> {
        await this.productsRepository.update(id, product);
        const updatedProduct = await this.productsRepository.findOneBy({ id });
        if (!validateProduct) {
            throw new NotFoundException('Product whit id ${id} not found');
        }
        return updatedProduct;
    };

    async deleteProduct(id: string): Promise<{ message: string; id: string; name: string; }> {
        const product = await this.productsRepository.findOneBy({ id });
        if (!validateProduct) {
            throw new NotFoundException('Product whit id ${id} not found');
        }
        await this.productsRepository.delete({ id });
        return {
            message: 'Product deleted successfully',
            id: product.id,
            name: product.name
        }
    };
};