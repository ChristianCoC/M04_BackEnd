/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Users } from './users/users.entity';
import { Products } from './products/products.entity';
import { Categories } from './categories/categories.entity';
import { Orders } from './orders/orders.entity';
import { OrderDetails } from './orders/orderDetails.entity';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env.development',
  }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        database: configService.get('DB_NAME'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        entities: [Users, Products, Categories, Orders, OrderDetails],
        synchronize: true,
        logging: true,
      })
  }),AuthModule, ProductsModule, UsersModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
