import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('forma_pago')
export class FormaPagoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    formaPago: string
}
