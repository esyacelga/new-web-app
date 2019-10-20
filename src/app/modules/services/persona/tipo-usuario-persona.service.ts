import {Injectable} from '@angular/core';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {ModeloTipoUsuarioPersona, TipoUsuarioPersona} from '../../classes/persona/TipoUsuarioPersona';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {CRUD_TIPO_USUARIO_PERSONA, CRUD_TIPO_USUARIO_PERSONA_INSERTAR} from '../../constantes/ConstanteTransaccional';
import {Sector} from '../../classes/persona/Sector';
import {
    OBTENER_TODOS_PERSONA_TIPO_USUARIO,
    OBTENER_TODOS_PERSONA_TIPO_USUARIO_POR_PERSONA,
    OBTENER_TODOS_PERSONA_TIPO_USUARIO_POR_TIPO_USUARIO
} from '../../constantes/ConstanteConsulta';
import {Pedido} from '../../classes/mensajeria/Pedido';

@Injectable({
    providedIn: 'root'
})
export class TipoUsuarioPersonaService {

    constructor(private genericService: ExecuteCallProcedureService) {

    }

    /**
     * Obtiene documento tipo_usuario_persona por id_persona
     * @param idPersona
     */
    async obtenerPorPersona(idPersona: string) {
        const requestOptions = new RequestOptions();
        const lstTipoPersonaUsuario: ModeloTipoUsuarioPersona[] =
            (await this.genericService.servicioRestGenericoGet({persona: idPersona}, OBTENER_TODOS_PERSONA_TIPO_USUARIO_POR_PERSONA, requestOptions)) as ModeloTipoUsuarioPersona[];
        return lstTipoPersonaUsuario;
    }

    /**
     * Obtiene documento tipo_usuario_persona por idtipoUsuario
     * @param idPersona
     */
    async obtenerPorTipoUsuario(idtipoUsuario: string) {
        const requestOptions = new RequestOptions();
        const lstTipoPersonaUsuario: ModeloTipoUsuarioPersona[] =
            (await this.genericService.servicioRestGenericoGet({tipoUsuario: idtipoUsuario}, OBTENER_TODOS_PERSONA_TIPO_USUARIO_POR_TIPO_USUARIO, requestOptions)) as ModeloTipoUsuarioPersona[];
        return lstTipoPersonaUsuario;
    }

    async registar(tipoUsuarioPersona: TipoUsuarioPersona) {
        const requestOptions = new RequestOptions();
        return await this.genericService.servicioRestGenericoPost(tipoUsuarioPersona, CRUD_TIPO_USUARIO_PERSONA, requestOptions) as Sector;
    }

    async insertar(tipoUsuarioPersona: TipoUsuarioPersona) {
        const requestOptions = new RequestOptions();
        return await this.genericService.servicioRestGenericoPost(tipoUsuarioPersona, CRUD_TIPO_USUARIO_PERSONA_INSERTAR, requestOptions) as Sector;
    }


    async obtenerTipoUsuarioPersonaLista(lstUsuario: string[], tipoUsuario: string) {
        const lstTipoPersonaUsuarioRetorno: ModeloTipoUsuarioPersona[] = [];
        const lstTipoPersonaUsuario: ModeloTipoUsuarioPersona[] = await this.obtenerTodos();
        for (const id of lstUsuario) {
            for (const iterador of lstTipoPersonaUsuario) {
                if (iterador.usuario._id === id && iterador.tipoUsuario.descripcion === tipoUsuario) {
                    lstTipoPersonaUsuarioRetorno.push(iterador);
                }
            }
        }
        return lstTipoPersonaUsuarioRetorno;
    }


    async setearTipoUsuarioPersona(lstPedido: Pedido[], tipoUsuario: string) {
        const lstTipoPersonaUsuario: ModeloTipoUsuarioPersona[] = await this.obtenerTodos();
        for (const pedido of lstPedido) {
            pedido.tipoUsuarioPerona = this.obtenerTipoUsuarioPersona(pedido.usuario, tipoUsuario, lstTipoPersonaUsuario);
        }
        return lstPedido;
    }

    obtenerTipoUsuarioPersona(key: string, tipoUsuario: string, lstTipoPersonaUsuario: ModeloTipoUsuarioPersona[]): ModeloTipoUsuarioPersona {
        for (const data of lstTipoPersonaUsuario) {
            if (data.tipoUsuario.descripcion === tipoUsuario && data.usuario._id === key) {
                return data;
            }
        }
    }


    async obtenerTodos() {
        const requestOptions = new RequestOptions();
        const lstTipoPersonaUsuario: ModeloTipoUsuarioPersona[] = (await this.genericService.servicioRestGenericoGet({}, OBTENER_TODOS_PERSONA_TIPO_USUARIO, requestOptions)) as ModeloTipoUsuarioPersona[];
        return lstTipoPersonaUsuario;
    }

}
