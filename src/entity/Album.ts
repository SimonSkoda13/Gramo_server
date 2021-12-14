import { type } from "os";
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity("Album")
export class Album {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    superscript?: string;

    @Column()
    text: string;

    @ManyToOne(type=> User, user=> user.albums) user: User;
}