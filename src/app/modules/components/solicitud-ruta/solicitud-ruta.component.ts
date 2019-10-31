import {Component, Input, OnInit} from '@angular/core';
import {VehiculoRutaService} from '../../services/ruta/vehiculo-ruta.service';
import {ModeloDisponibilidad, RutaDto, RutaIntegranteDto} from '../../classes/ruta/vehiculo/DsiponibilidadVehiculo';
import {ModeloTipoUsuarioPersona} from '../../classes/persona/TipoUsuarioPersona';
import {StorageAppService} from '../../system/generic/service/storage-app.service';

@Component({
    selector: 'app-solicitud-ruta',
    templateUrl: './solicitud-ruta.component.html',
    styleUrls: ['./solicitud-ruta.component.scss'],
})
export class SolicitudRutaComponent implements OnInit {
    @Input() modeloDisponibilidad: ModeloDisponibilidad = new ModeloDisponibilidad();


    constructor(private svrRuta: VehiculoRutaService, private svrStorage: StorageAppService,) {

    }

    ngOnInit() {

    }

    async solicitudServicio() {
        const lstIntegrantes: RutaIntegranteDto[] = [];
        const usuarioActual = (await this.svrStorage.loadStorageObject('usuario')) as ModeloTipoUsuarioPersona;
        const objRutaIntegrante = new RutaIntegranteDto(null, usuarioActual._id, 1);
        lstIntegrantes.push(objRutaIntegrante);
        const objRuta: RutaDto = new RutaDto(this.modeloDisponibilidad, true, false, false, 1, lstIntegrantes);
        this.svrRuta.registar(objRuta);
    }


}
