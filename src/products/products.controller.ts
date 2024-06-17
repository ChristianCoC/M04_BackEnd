/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async getProducts() {
        return await this.productsService.getProducts();
    };

    @Get(":id")
    async getProductById(@Param("id") id: string) {
        return await this.productsService.getProductsById(Number(id));  
    };

    @HttpCode(201)
    @Post()
    async createProduct(@Body() product: any) {
        return await this.productsService.createProduct(product);
    };

    @Put(":id")
    async updateProductById(@Param("id") id: string, @Body() product: any) {
        return await this.productsService.updateProduct(Number(id), product);
    };

    @Delete(":id")
    async deleteProductById(@Param("id") id: string) {
        return await this.productsService.deleteProduct(Number(id));
    };

}