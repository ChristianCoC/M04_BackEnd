import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Orders } from "./orders.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrdersRepository {

    constructor(@InjectRepository(Orders) private ordersRepository: Repository<Orders>) {};

    async getOrders(): Promise<Orders[]> {
        return await this.ordersRepository.find();
    };

    async createOrder(order: Orders): Promise<Orders> {
        return await this.ordersRepository.save(order);
    };
};