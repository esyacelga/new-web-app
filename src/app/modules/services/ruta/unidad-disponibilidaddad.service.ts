import { Injectable } from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {Util} from '../../system/generic/classes/util';
import {Vehiculo} from '../../classes/ruta/vehiculo/DsiponibilidadVehiculo';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {CRUD_VEHICULO} from '../../constantes/ConstanteTransaccional';
import {OBTENER_TODOS_VEHICULO} from '../../constantes/ConstanteConsulta';

@Injectable({
  providedIn: 'root'
})
export class UnidadDisponibilidaddadService {

  constructor(private genericService: ExecuteCallProcedureService, private utils: Util) {

  }

  async registar(vehiculo: Vehiculo) {
    const requestOptions = new RequestOptions();
    return await this.genericService.servicioRestGenericoPost(vehiculo, CRUD_VEHICULO, requestOptions) as Vehiculo;
  }


  async obtenerTodos() {
    const requestOptions = new RequestOptions();
    return await this.genericService.servicioRestGenericoGet({}, OBTENER_TODOS_VEHICULO, requestOptions);
  }


}
