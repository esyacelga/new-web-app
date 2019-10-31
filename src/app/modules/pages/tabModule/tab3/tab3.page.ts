import {Component, OnInit} from '@angular/core';
import {UnidadDisponibilidaddadService} from '../../../services/ruta/unidad-disponibilidaddad.service';
import {ModeloDisponibilidad} from '../../../classes/ruta/vehiculo/DsiponibilidadVehiculo';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
    lstUnidadDisponible: ModeloDisponibilidad[];
    objDisponibilidad: ModeloDisponibilidad;

    constructor(private svrDisponibilidad: UnidadDisponibilidaddadService) {
    }

    async ngOnInit() {
        this.lstUnidadDisponible = await this.svrDisponibilidad.obtenerDisponibilidad();
        console.log(this.lstUnidadDisponible);
    }

}
