import {Component, OnInit} from '@angular/core';
import {VehiculoRutaService} from '../../services/ruta/vehiculo-ruta.service';

@Component({
    selector: 'app-solicitud-ruta',
    templateUrl: './solicitud-ruta.component.html',
    styleUrls: ['./solicitud-ruta.component.scss'],
})
export class SolicitudRutaComponent implements OnInit {

    constructor(private svrRuta: VehiculoRutaService) {

    }

    ngOnInit() {

    }

}
