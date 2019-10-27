import {Injectable} from '@angular/core';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {OBTENER_TODOS_PERSONA, OBTENER_TODOS_PERSONA_POR_ID} from '../../constantes/ConstanteConsulta';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {ModeloPersona} from '../../classes/persona/TipoUsuarioPersona';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {

    constructor(private genericService: ExecuteCallProcedureService) {
    }

    async obtenerTodos() {
        const requestOptions = new RequestOptions();
        return (await this.genericService.servicioRestGenericoGet({}, OBTENER_TODOS_PERSONA, requestOptions)) as ModeloPersona[];
    }

    async obtenerPersonaPorId(idPersona) {
        const requestOptions = new RequestOptions();
        return (await this.genericService.servicioRestGenericoGet({idPersona}, OBTENER_TODOS_PERSONA_POR_ID, requestOptions)) as ModeloPersona;
    }


}
