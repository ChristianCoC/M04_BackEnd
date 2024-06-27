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
        length: 50,
        nullable: false
    })
    name: string;

    @Column({
        nullable: false
    })
    description: string;

    @Column('decimal', {
        precision: 10,
        scale: 2,
        nullable: false
    })
    price: number;

    @Column('int', {
        nullable: false
    })
    stock: number;

    @Column('varchar', {
        default: 'imagen.jpg',
    })
    imgUrl: string;

    @ManyToOne(() => Categories, category => category.products)
    @JoinColumn({name: 'category_id'})
    category: Categories;

    @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.products)
    orderDetails: OrderDetails[];

};