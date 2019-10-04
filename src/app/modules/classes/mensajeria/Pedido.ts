export class Pedido {
    _id: string = '';
    estado: number = 0;
    solicitudDetalle: PedidoDetalle[] = [];
    usuario: string = '';
    tipoUsuarioPerona: TipoUsuarioPerona = new TipoUsuarioPerona();
}


export class PedidoDetalle {
    _id: string = '';
    estado: number = 0;
    articulo: Artic = new Artic();
}


export class Artic {
    _id: string = '';
    descripcion: number = 0;
}

export class TipoUsuarioPerona {
    _id: string = '';
    persona: Persona = new Persona();
}

export class Persona {
    _id: string = '';
    nombres: string = '';
    apellidos: string = '';
}
