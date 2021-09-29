import { BancoEntity } from "src/modules/banco/entity/banco";
import { FormaPagoEntity } from "src/modules/formaPago/entity/formaPago";
import { MovimientoEntity } from "src/modules/movimiento/entity/movimiento";
import { UsuarioEntity } from "src/modules/usuarios/entity/usuario-entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('operacion')
export class OperacionEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UsuarioEntity, user => user.id)
    usuario: number;

    @ManyToOne(() => MovimientoEntity, mov => mov.id)
    movimiento: number;

    @ManyToOne(() => FormaPagoEntity, fp => fp.id)
    formaPago: number;

    @ManyToOne(() => BancoEntity, banco => banco.id)
    banco: number;

    @Column()
    transaccion: string;

    @Column({ 
        type: "decimal",
        precision: 10,
        scale: 2
    })
    importe: number;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    })
    fecha: Date;
}
