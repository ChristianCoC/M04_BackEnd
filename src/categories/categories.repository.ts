import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Categories } from "./categories.entity";

@Injectable()
export class CategoriesRepository {

    constructor(@InjectRepository(Categories) private categoriesRepository: Repository<Categories>) {}

    async getCategories(): Promise<Categories[]> {
        return await this.categoriesRepository.find();
    };

    async createCategory(): Promise<Categories> {
        const category = new Categories();
        return await this.categoriesRepository.save(category);
    };
}