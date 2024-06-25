import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsRepository {

    constructor(@InjectRepository(Products) private productsRepository: Repository<Products>) { }

    async getProducts(page: number, limit: number): Promise<Products[]> {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        return this.productsRepository.find({ skip: startIndex, take: endIndex, relations: ['category_id'] });
    };

    async getProductsById(id: string): Promise<Products> {
        if (!id) {
            throw new BadRequestException('Id not found');
        }
        try {
            return await this.productsRepository.findOneBy({ id });
        } catch (error) {
            throw new NotFoundException('Product whit id ${id} not found');
        }
    };

    async createProduct(product: Products): Promise<Products> {
        return this.productsRepository.save(product);
    };

    async updateProduct(id: string, product: Products): Promise<Products> {
        if (!id) {
            throw new BadRequestException('Id not found');
        }
        try {
            await this.productsRepository.update(id, product);
            const updatedProduct = await this.productsRepository.findOneBy({ id });
            if (!updatedProduct) {
                throw new NotFoundException('Product whit id ${id} not found');
            }

            return updatedProduct;
        } catch (error) {
            throw new BadRequestException('Failed to update product',error);
        }
       
    };

    async deleteProduct(id: string): Promise<{ message: string; id: string; name: string; }> {
        if (!id) {
            throw new BadRequestException('Id not found');
        }
        try {
            const product = await this.productsRepository.findOneBy({ id });
            if (!product) {
                throw new NotFoundException('Product whit id ${id} not found');
            };
            await this.productsRepository.delete({ id });
            return {
                message: 'Product deleted successfully',
                id: product.id,
                name: product.name
            };
        } catch (error) {
            throw new BadRequestException('Failed to delete product',error);
        }
    };
};