import { type } from "os";
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { User } from "../Users/User";

@Entity("Album")
export class Album extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    superscript?: string;

    @Column()
    text: string;

    @Column()
    texIsMd?: boolean;

    @Column("simple-array")
    authors?: string[];

    @ManyToOne(type=> User, user=> user.albums) user: User;
    
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}