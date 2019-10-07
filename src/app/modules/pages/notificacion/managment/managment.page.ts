import {Component, OnInit} from '@angular/core';
import {SolicitudService} from '../../../services/mensajeria/solicitud.service';
import {Pedido, PedidoResumen} from '../../../classes/mensajeria/Pedido';
import {TipoUsuarioPersonaService} from '../../../services/persona/tipo-usuario-persona.service';
import {SolcitudCabeceraModel} from '../../../classes/mensajeria/SolcitudCabeceraModel';

@Component({
    selector: 'app-managment',
    templateUrl: './managment.page.html',
    styleUrls: ['./managment.page.scss'],
})
export class ManagmentPage implements OnInit {
    contenedor: PedidoResumen;
    lstPedido: Pedido[] = [];
    lstPedidoRemen: PedidoResumen[] = [];

    constructor(private svrSolicitud: SolicitudService, private svrTps: TipoUsuarioPersonaService) {

    }


    actualiarPedido(estado: number, pedido: PedidoResumen) {
        const solicitud: SolcitudCabeceraModel = new SolcitudCabeceraModel(pedido.pedido._id, pedido.usuario, estado);
        this.svrSolicitud.actualizarSolicitud(solicitud);
    }

    async ngOnInit() {
        this.lstPedido = await this.svrSolicitud.obtenerPedidos();
        this.lstPedido =
            await (this.svrTps.setearTipoUsuarioPersona(this.lstPedido, 'CLIENTE'));

        for (const iterador of this.lstPedido) {
            this.lstPedidoRemen.push(new PedidoResumen(iterador));
        }

        console.log(this.lstPedido);
    }


}
