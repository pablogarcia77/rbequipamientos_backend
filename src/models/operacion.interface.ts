export interface OperacionModel {
    id: number;
    usuario: number;
    movimiento: number;
    formaPago: number;
    banco: number;
    transaccion: string;
    importe: number;
    numeroTarjeta: string;
    fecha: Date;
}