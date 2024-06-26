/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body, Query, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AuthGuard } from "src/auth/auth.guard";
import { Products } from "./products.entity";

@Controller("products")
export class ProductsController {
    
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    async getProducts(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
        return await this.productsService.getProducts(page, limit);
    };

    @Get(":id")
    async getProductById(@Param("id") id: string) {
        return await this.productsService.getProductsById(id);  
    };

    @HttpCode(201)
    @Post()
    @UseGuards(AuthGuard)
    async createProduct(@Body() product: Products) {
        return await this.productsService.createProduct(product);
    };

    @Put(":id")
    @UseGuards(AuthGuard)
    async updateProductById(@Param("id") id: string, @Body() product: Products) {
        return await this.productsService.updateProduct((id), product);
    };

    @Delete(":id")
    @UseGuards(AuthGuard)
    async deleteProductById(@Param("id") id: string) {
        return await this.productsService.deleteProduct((id));
    };
}