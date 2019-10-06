export class TipoUsuarioPersona {
    _id: string;
    persona: string;
    usuario: string;
    tipoUsuario: string;
    estado: number;

}


export class ModeloTipoUsuarioPersona {
    _id: string;
    usuario: ModeloUsuario = new ModeloUsuario();
    persona: ModeloPersona = new ModeloPersona();
    tipoUsuario: ModeloTipoUsuario = new ModeloTipoUsuario();
}

export class ModeloUsuario {
    _id: string;
    playerId: string;
}


export class ModeloTipoUsuario {
    _id: string;
    descripcion: string;
}

export class ModeloPersona {
    _id: string = '';
    nombres: string = '';
    apellidos: string = '';
}
