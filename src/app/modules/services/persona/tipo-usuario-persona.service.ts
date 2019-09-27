import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {TipoUsuarioPersona} from '../../classes/persona/TipoUsuarioPersona';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {CRUD_TIPO_USUARIO_PERSONA} from '../../constantes/ConstanteTransaccional';
import {Sector} from '../../classes/persona/Sector';

@Injectable({
    providedIn: 'root'
})
export class TipoUsuarioPersonaService {

    constructor(private genericService: ExecuteCallProcedureService) {

    }

    async registar(tipoUsuarioPersona: TipoUsuarioPersona) {
        const requestOptions = new RequestOptions();

        return await this.genericService.servicioRestGenericoPost(tipoUsuarioPersona, CRUD_TIPO_USUARIO_PERSONA, requestOptions) as Sector;
    }
}
