import {Component, OnInit} from '@angular/core';
import {SolicitudService} from '../../../services/mensajeria/solicitud.service';
import {Pedido} from '../../../classes/mensajeria/Pedido';

@Component({
    selector: 'app-managment',
    templateUrl: './managment.page.html',
    styleUrls: ['./managment.page.scss'],
})
export class ManagmentPage implements OnInit {
    lstPedido: Pedido[] = [];

    constructor(private svrSolicitud: SolicitudService) {
    }

    async ngOnInit() {

        this.lstPedido = await this.svrSolicitud.obtenerPedidos();
        console.log(this.lstPedido);
    }

}
