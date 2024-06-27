import { Orders } from "src/orders/orders.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: 'users'
})
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({
        length: 50,
        nullable: false,
    })
    name: string;

    @Column({
        length: 50,
        unique: true,
        nullable: false,
    })
    email: string;

    @Column({
        length: 20,
        nullable: false,
    })
    password: string;
    
    @Column('int')
    phone: number;
    
    @Column({
        length: 50,
    })
    country: string;

    @Column('text')
    adress: string;

    @Column({
        length: 50,
    })
    city: string;

    @OneToMany(() => Orders, (order) => order.user)
    orders: Orders[];
};