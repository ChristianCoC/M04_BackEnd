import { Body, Controller, Get, Post } from "@nestjs/common";
import { Orders } from "./orders.entity";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) {};

    @Get()
    getOrders(): Promise<Orders[]> {
        return this.ordersService.getOrders();
    };

    @Post()
    createOrder(@Body() order: Orders): Promise<Orders> {
        return this.ordersService.createOrder(order);
    };
};