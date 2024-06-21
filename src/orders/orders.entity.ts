import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { OrderDetails } from "./orderDetails.entity";

@Entity({
    name: 'orders'
})
export class Orders {

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({
        type: 'date',
    })
    date: Date;

    @ManyToOne(() => Users, (user) => user.orders)
    @JoinColumn({ name: 'user_id' })
    user: Users;

    @OneToOne(() => OrderDetails, (orderDetails) => orderDetails.order)
    orderDetails: OrderDetails;
};