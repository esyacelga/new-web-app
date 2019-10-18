import {Injectable} from '@angular/core';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {OBTENER_TODOS_PERSONA} from '../../constantes/ConstanteConsulta';
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


}
