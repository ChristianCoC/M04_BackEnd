import { Injectable } from "@nestjs/common";
import { Orders } from "./orders.entity";
import { OrdersRepository } from "./orders.repository";

@Injectable()
export class OrdersService {

    constructor(private ordersRepository: OrdersRepository) {}

    async getOrders(): Promise<Orders[]> {
        return await this.ordersRepository.getOrders();
    };

    async createOrder(order: Orders): Promise<Orders> {
        return await this.ordersRepository.createOrder(order);
    };
};