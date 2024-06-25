import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categories } from './categories.entity';

@Controller('categories')
export class CategoriesController {

    constructor( private readonly categoriesService: CategoriesService) {}

    @Get()
    async getCategories(): Promise<Categories[]> {
        return this.categoriesService.getCategories();
    };

    @Post('smartphones')
    async createSmartphoneCategory(@Body() category: Categories): Promise<Categories> {
        return this.categoriesService.createCategory(category);
    };

    @Post('monitors')
    async createMonitorCategory(@Body() category: Categories): Promise<Categories> {
        return this.categoriesService.createCategory(category);
    };

    @Post('keyboards')
    async createKeyboardCategory(@Body() category: Categories): Promise<Categories> {
        return this.categoriesService.createCategory(category);
    };

    @Post('mouses')
    async createMouseCategory(@Body() category: Categories): Promise<Categories> {
        return this.categoriesService.createCategory(category);
    };
};
