/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, HttpCode } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    };

    @Get(":id")
    getProductById(@Param("id") id: string) {
        return this.productsService.getProductsById(Number(id));  
    };

    @HttpCode(201)
    @Post()
    createProduct() {
        return "Este endpoint es para crear un producto";
    };

    @Put()
    updateProduct() {
        return "Este endpoint es para actualizar un producto";
    };

    @Put(":id")
    updateProductById() {
        return "Este endpoint es para actualizar un producto por id";
    };

    @Delete()
    deleteProduct() {
        return "Este endpoint es para eliminar un producto";
    };

    @Delete(":id")
    deleteProductById() {
        return "Este endpoint es para eliminar un producto por id";
    };

}