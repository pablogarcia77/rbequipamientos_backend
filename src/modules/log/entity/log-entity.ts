import { UsuarioEntity } from "src/modules/usuarios/entity/usuario-entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('log')
export class LogEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UsuarioEntity, user => user.id)
    usuario: number

    @Column()
    moviento: string

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp'
    })
    fecha: Date;
}
