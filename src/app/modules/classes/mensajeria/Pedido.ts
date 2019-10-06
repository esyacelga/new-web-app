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
    cantidad: number = 0;
    unidadCosto: number = 0;
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

export class PedidoResumen {
    pedido: Pedido;
    usuario: string;
    total: number;


    constructor(pedido: Pedido) {
        this.pedido = pedido;
        this.obtenerTotal(pedido.solicitudDetalle);
    }

    obtenerTotal(lstDetalle: PedidoDetalle[]) {
        let totalItem = 0;
        for (const item of lstDetalle) {
            const valorUnitario = item.unidadCosto;
            const cantidad = item.cantidad;
            totalItem = (valorUnitario * cantidad) + totalItem;
        }
        this.total = totalItem;
    }

}
