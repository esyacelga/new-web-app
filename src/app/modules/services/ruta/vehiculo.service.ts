import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {CRUD_RUTA} from '../../constantes/ConstanteTransaccional';
import {OBTENER_TODOS_VEHICULO} from '../../constantes/ConstanteConsulta';
import {RutaDto} from '../../classes/ruta/vehiculo/DsiponibilidadVehiculo';

@Injectable({
    providedIn: 'root'
})
export class VehiculoService {

    constructor(private genericService: ExecuteCallProcedureService) {

    }

    async registar(ruta: RutaDto) {
        const requestOptions = new RequestOptions();
        return await this.genericService.servicioRestGenericoPost(ruta, CRUD_RUTA, requestOptions) as RutaDto;
    }


    async obtenerTodos() {
        const requestOptions = new RequestOptions();
        return (await this.genericService.servicioRestGenericoGet({}, OBTENER_TODOS_VEHICULO, requestOptions)) as RutaDto[];
    }


}
