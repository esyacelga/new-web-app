/*
import {EventEmitter, Injectable} from '@angular/core';
import {StorageAppService} from './storage-app.service';
import {OneSignal, OSNotification, OSNotificationPayload} from '@ionic-native/onesignal/ngx';
import {UsuarioService} from '../../../services/persona/usuario.service';

@Injectable({
    providedIn: 'root'
})
export class PushNotificationService {

    mensajes: OSNotificationPayload[] = [];
    pushLitener = new EventEmitter<OSNotificationPayload>(

    );
    async getMensajes() {
        await this.cargarMensajes();
        return [...this.mensajes];
    }

    constructor(private oneSignal: OneSignal, private svrSorage: StorageAppService, private srvUser: UsuarioService) {
        this.cargarMensajes();
    }


    async notificacionRecibida(notifcacion: OSNotification) {
        await this.cargarMensajes();
        const payload = notifcacion.payload;
        const existePush = this.mensajes.find(mensaje =>
            mensaje.notificationID === payload.notificationID);


        if (existePush) {
            return;
        }
        this.mensajes.unshift(payload);
        this.pushLitener.emit(payload);
        console.log('NOTIFICACION A GUARDAR');
        await this.guardarMensajes(this.mensajes);
    }

    guardarMensajes(lstObj: any) {
        this.svrSorage.setStorageObject('mensajes', lstObj);
    }

    configuracionInicial() {
        this.oneSignal.startInit('207a69ab-4d96-44f8-a6ce-828f0eb13cf3', '872578811835');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe((noti) => {
            // do something when notification is received
            console.log('Notificacion recivida:', noti);
            this.notificacionRecibida(noti);
        });

        this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
            // do something when a notification is opened
            console.log('Notificacion abierta:', noti);
            await this.notificacionRecibida(noti.notification);
        });

        console.log('Inicializando ID');
        this.oneSignal.getIds().then(info => {
            console.log(info);
            this.srvUser.playerId = info.userId;

        });
        this.oneSignal.endInit();
    }

    async cargarMensajes() {
        // @ts-ignore
        this.mensajes = await this.svrSorage.loadStorageObject('mensajes') || [];
        return this.mensajes;
    }
}
*/
