import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { Categories } from './categories.entity';

@Injectable()
export class CategoriesService {
    
    constructor( private readonly categoriesRepository: CategoriesRepository) {}

    async getCategories(): Promise<Categories[]> {
        return await this.categoriesRepository.getCategories();
    };

    async createCategory(): Promise<Categories> {
        return await this.categoriesRepository.createCategory();
    };
}
