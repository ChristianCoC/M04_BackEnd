import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: 'orders'
})
export class Orders {

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column()
    date: Date;
};