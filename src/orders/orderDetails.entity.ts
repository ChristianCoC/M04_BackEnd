import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({ 
    name: 'orderdetails' 
})
export class OrderDetails {

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false
    })
    price: number;
};