import {Component, OnInit} from '@angular/core';
import {SolicitudService} from '../../../services/mensajeria/solicitud.service';
import {Pedido, PedidoResumen} from '../../../classes/mensajeria/Pedido';
import {TipoUsuarioPersonaService} from '../../../services/persona/tipo-usuario-persona.service';

@Component({
    selector: 'app-managment',
    templateUrl: './managment.page.html',
    styleUrls: ['./managment.page.scss'],
})
export class ManagmentPage implements OnInit {
    lstPedido: Pedido[] = [];
    lstPedidoRemen: PedidoResumen[] = [];

    constructor(private svrSolicitud: SolicitudService, private svrTps: TipoUsuarioPersonaService) {

    }

    async ngOnInit() {
        this.lstPedido = await this.svrSolicitud.obtenerPedidos();
        this.lstPedido =
            await (this.svrTps.setearTipoUsuarioPersona(this.lstPedido, 'CLIENTE'));

        console.log(this.lstPedido);
    }


}
