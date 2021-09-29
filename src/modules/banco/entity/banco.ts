import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('banco')
export class BancoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    banco: string;
}
