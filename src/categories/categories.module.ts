import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { CategoriesRepository } from './categories.repository';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    controllers: [CategoriesController],
    providers: [CategoriesRepository, CategoriesService],
})
export class CategoriesModule {}
