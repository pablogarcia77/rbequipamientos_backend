import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Forma_Pago')
export class FormaPagoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    formaPago: string
}
