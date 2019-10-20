import {Component, OnInit} from '@angular/core';
import {TipoUsuarioPersonaService} from '../../../services/persona/tipo-usuario-persona.service';
import {ModeloTipoUsuarioPersona} from '../../../classes/persona/TipoUsuarioPersona';
import {Vehiculo} from '../../../classes/ruta/vehiculo/DsiponibilidadVehiculo';
import {TipoUsuarioService} from '../../../services/persona/tipo-usuario.service';
import {TipoUsuario} from '../../../classes/persona/TipoUsuario';
import {PARAMETRO_CHOFER} from '../../../constantes/ConstanteParametros';

@Component({
    selector: 'app-unidad-disponibilidad',
    templateUrl: './unidad-disponibilidad.page.html',
    styleUrls: ['./unidad-disponibilidad.page.scss'],
})
export class UnidadDisponibilidadPage implements OnInit {
    lstTipoUsuarioPersona: ModeloTipoUsuarioPersona[];
    objTipoUsuario: TipoUsuario;
    lstvehiculo: Vehiculo[];

    constructor(private svrTipoUsuarioPersona: TipoUsuarioPersonaService, private svtTipoUsuario: TipoUsuarioService) {
    }

    async ngOnInit() {
        this.objTipoUsuario = await this.svtTipoUsuario.obtenerPorCodigo(PARAMETRO_CHOFER);
        this.lstTipoUsuarioPersona = await this.svrTipoUsuarioPersona.obtenerPorTipoUsuario(this.objTipoUsuario._id);
    }

}
