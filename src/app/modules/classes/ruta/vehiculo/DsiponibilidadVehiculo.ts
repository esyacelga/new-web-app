import {ModeloTipoUsuarioPersona, TipoUsuarioPersona} from '../../persona/TipoUsuarioPersona';

export class Vehiculo {
    _id: string;
    modelo: string;
    placa: string;
    color: string;
    marca: string;
    tipo: string;
    estado: number;

}


export class Disponibilidad {
    _id: string;
    nombreAlias: string;
    tipoUsuarioPersona: TipoUsuarioPersona = new TipoUsuarioPersona();
    vehiculo: Vehiculo = new Vehiculo();
    numeroTurno: number;
    enTurno: boolean;
    estadoDiponibilidad: boolean;
}



export class ModeloDisponibilidad {
    _id: string;
    nombreAlias: string;
    tipoUsuarioPersona: ModeloTipoUsuarioPersona = new ModeloTipoUsuarioPersona();
    vehiculo: Vehiculo = new Vehiculo();
    numeroTurno: number;
    enTurno: boolean;
    estadoDiponibilidad: boolean;
}
