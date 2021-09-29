import { RolEntity } from "src/modules/rol/entity/rol";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    })
    fecha_alta: Date;

    @ManyToOne(() => RolEntity, rol => rol.id)
    rol: number
}
