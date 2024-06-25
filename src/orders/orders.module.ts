import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Orders } from "./orders.entity";
import { OrdersController } from "./orders.controller";
import { OrdersRepository } from "./orders.repository";
import { OrdersService } from "./orders.service";

@Module({
    imports: [TypeOrmModule.forFeature([Orders])],
    controllers: [OrdersController],
    providers: [OrdersRepository, OrdersService],
})
export class OrdersModule {}