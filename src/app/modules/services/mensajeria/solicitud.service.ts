import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {StorageAppService} from '../../system/generic/service/storage-app.service';
import {SolcitudCabeceraModel, SolcitudDetalleModel} from '../../classes/mensajeria/SolcitudCabeceraModel';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {COLOR_TOAST_SUCCESS} from '../../system/generic/classes/constant';
import {CRUD_SOLICITUD} from '../../constantes/ConstanteTransaccional';
import {Articulo} from '../../classes/mensajeria/Articulo';


@Injectable({
    providedIn: 'root'
})
export class SolicitudService {
    lstDetalle: SolcitudDetalleModel[] = [];

    constructor(private genericService: ExecuteCallProcedureService, private svrStorage: StorageAppService) {
        this.getDetalleSolicitud();
    }

    async registarSolicitud(solicitud: SolcitudCabeceraModel) {
        const requestOptions = new RequestOptions();
        requestOptions.successMessaje = 'Su solicitud a sido generado, un operador estará próximo a comunicarse con usted';
        requestOptions.toastColor = COLOR_TOAST_SUCCESS;
        const data = await this.genericService.servicioRestGenericoPost(solicitud, CRUD_SOLICITUD, requestOptions) as Articulo;
        return data;
    }

    setDetalleSolcitud(detalle: SolcitudDetalleModel) {
        this.lstDetalle.push(detalle);
        this.svrStorage.setStorageObject(this.lstDetalle, 'DetalleSolicitud');
    }

    async getDetalleSolicitud() {
        if (await this.svrStorage.loadStorageObject('DetalleSolicitud')) {
            // @ts-ignore
            this.lstDetalle = await this.svrStorage.loadStorageObject('DetalleSolicitud');
        } else {
            this.lstDetalle = [];
        }
    }
}
