import {Component, OnInit} from '@angular/core';
import {StorageAppService} from '../../../system/generic/service/storage-app.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-tab3',
    templateUrl: 'settings.page.html',
    styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {

    constructor(private svrStorage: StorageAppService, private navCtrl: NavController) {
    }

    salirSesion() {
        this.svrStorage.eliminarTodo();
        this.navCtrl.navigateRoot('login');
    }

    ngOnInit() {
    }

}
