import {Component, OnInit} from '@angular/core';
import {TipoUsuarioService} from '../../../services/persona/tipo-usuario.service';
import {TipoUsuario} from '../../../classes/persona/TipoUsuario';
import {NotificacionModel} from '../../../classes/notificacion/NotificacionModel';
import {NotificacionMasivaService} from '../../../services/notificacion/notificacion-masiva.service';

@Component({
    selector: 'app-notificacion-masiva',
    templateUrl: './notificacion-masiva.page.html',
    styleUrls: ['./notificacion-masiva.page.scss'],
})
export class NotificacionMasivaPage implements OnInit {
    lstTipoUsuario: TipoUsuario[] = [];
    lstNotificacionModel: NotificacionModel[] = [];
    objNotificacion: NotificacionModel;

    constructor(private svtTipoUsuario: TipoUsuarioService, private svrNotificacion: NotificacionMasivaService) {
    }

    async ngOnInit() {
        this.lstTipoUsuario = (await this.svtTipoUsuario.listarTodos()) as TipoUsuario[];
    }

    async crearNuevo(notificacion: NotificacionModel) {
        await this.svrNotificacion.registar(notificacion);
    }

    async obtenerTodos(notificacion: NotificacionModel) {
        this.lstNotificacionModel = (await this.svrNotificacion.obtenerTodos()) as NotificacionModel[];
    }


}
