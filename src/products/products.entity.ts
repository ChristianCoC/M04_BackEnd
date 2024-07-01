import { Categories } from "src/categories/categories.entity";
import { OrderDetails } from "../ordersDetails/orderDetails.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: 'products'
})
export class Products {

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    name: string;

    @Column({
        type: 'text',
        nullable: false
    })
    description: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false
    })
    price: number;

    @Column({
        type: 'int',
        nullable: false
    })
    stock: number;

    @Column({
        type: 'varchar',
        default: 'imagen.jpg',
    })
    imgUrl: string;

    @ManyToOne(() => Categories, category => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Categories;

    @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.products)
    orderDetails: OrderDetails[];

};