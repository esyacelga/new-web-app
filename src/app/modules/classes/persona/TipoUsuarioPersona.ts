export class TipoUsuarioPersona {
    _id: string;
    persona: string;
    usuario: string;
    tipoUsuario: string;
    estado: number;

}


export class ModeloTipoUsuarioPersona {
    _id: string;
    estado: string;
    usuario: ModeloUsuario = new ModeloUsuario();
    persona: ModeloPersona = new ModeloPersona();
    tipoUsuario: ModeloTipoUsuario = new ModeloTipoUsuario();
}

export class ModeloUsuario {
    _id: string;
    clave: string;
    playerId: string;
    avatar: string;
}


export class ModeloTipoUsuario {
    _id: string;
    descripcion: string;
    codigo: string;
}

export class ModeloPersona {
    _id: string = '';
    nombres: string = '';
    apellidos: string = '';
    fechaNacimiento: Date;
    cedula: string = '';
    correo: string = '';
    avatar: string = '';
}


export class TipoUsuarioPersonaDto extends ModeloPersona {
    playerId: string = '';
    clave: string = '';
    estado: string = '';
    sector: string = '';
    tipoUsuario: string = '';
}
