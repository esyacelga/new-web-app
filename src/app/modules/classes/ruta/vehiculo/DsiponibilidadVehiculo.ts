import {TipoUsuarioPersona} from '../../persona/TipoUsuarioPersona';

export class Vehiculo {
    modelo: string;
    placa: string;
    marca: string;
    tipo: string;
    estado: number;

}


export class Disponibilidad {
    tipoUsuarioPersona: TipoUsuarioPersona;
    numeroTurno: number;
    enTurno: number;
    estadoDiponibilidad: string;
}
