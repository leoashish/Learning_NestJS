import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat extends BaseEntity{
    @PrimaryGeneratedColumn()
    cat_id: number;

    @Column()
    name: string;

    @Column()
    breed: string;

    @Column()
    age: number;
    
    @Column()
    color: string; 

}