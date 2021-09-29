import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movimiento')
export class MovimientoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    movimiento: string;
}
