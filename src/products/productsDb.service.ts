import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsDbService {

  constructor(@InjectRepository(Products) private productsRepository: Repository<Products>) { }
  
  saveProduct(products: Products) {
    this.productsRepository.save(products);
  };

};