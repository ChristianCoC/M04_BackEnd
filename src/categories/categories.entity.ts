import { Products } from "src/products/products.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: 'categories'
})
export class Categories {

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    name: string;

    @OneToMany(() => Products, product => product.category)
    products: Products[];

};