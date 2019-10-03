import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {StorageAppService} from './modules/system/generic/service/storage-app.service';
import {PushNotificationService} from './modules/system/generic/service/push-notification.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navCtrl: NavController,
        private svrStorage: StorageAppService,
        private svtNotificacion: PushNotificationService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.svrStorage.loadStorageObject('usuario').then((response) => {
                // @ts-ignore
                if (response && response.usuario && response.usuario.clave) {
                    //                    this.usuarioSvc.setAuthenticated(true);
                    this.navCtrl.navigateRoot('main');
                } else {
                    this.navCtrl.navigateRoot('login');
                }
                if (this.platform.is('cordova')) {
                    this.svtNotificacion.configuracionInicial();
                }
                this.statusBar.styleDefault();
                this.splashScreen.hide();
                if (this.platform.is('cordova')) {
                    console.log('Entrando a Notificaciion');
                    this.svtNotificacion.configuracionInicial();
                }
            }, reason => {
                this.navCtrl.navigateRoot('signin');
            });
        });
    }
}
