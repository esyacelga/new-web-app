import {Injectable} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {ExecuteCallProcedureService} from '../../system/generic/service/execute-call-procedure.service';
import {OBTENER_TIPO_USUARIO_PERSONA_LOGIN} from '../../constantes/ConstanteConsulta';
import {RequestOptions} from '../../system/generic/classes/RequestOptions';
import {CRUD_USUARIO} from '../../constantes/ConstanteTransaccional';
import {PushNotificationService} from '../../system/generic/service/push-notification.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    token: string = null;
    playerId: string = null;

    constructor(private genericService: ExecuteCallProcedureService,
                private svrPush: PushNotificationService,
                private storage: Storage, private navCtrl: NavController,
    ) {
        this.playerId = this.svrPush.playerId;
    }

    async loginUsuario(correo: string, clave: string) {
        const requestOptions = new RequestOptions();
        const usuario = {
            correo, clave
        };
        const data = await this.genericService.servicioRestGenericoGet(usuario, OBTENER_TIPO_USUARIO_PERSONA_LOGIN, requestOptions);
        // @ts-ignore
        if (data && data.usuario) {
            // @ts-ignore
            data.usuario.playerId = this.svrPush.playerId;
            // @ts-ignore
            await this.genericService.servicioRestGenericoGet(data.usuario, CRUD_USUARIO, requestOptions);
        }
        return data;
    }

    async guardarToken(token: string) {
        this.token = token;
        await this.storage.set('token', token);
        await this.validaToken();

    }


    async cargarToken() {
        this.token = await this.storage.get('token') || null;
    }

    async validaToken(): Promise<boolean> {
        await this.cargarToken();
        if (!this.token) {
            this.navCtrl.navigateRoot('/login');
            return Promise.resolve(false);
        } else {
            this.navCtrl.navigateRoot('/main/tabs/tab1');
            return Promise.resolve(true);
        }
    }

}
