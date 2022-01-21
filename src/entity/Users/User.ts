import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Album } from "../Albums/Album";

@Entity("User")
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:20})
    firstName: string;

    @Column({length:20})
    lastName: string;

    @OneToMany(type =>Album, album=>album.user)albums?:Album[];

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}