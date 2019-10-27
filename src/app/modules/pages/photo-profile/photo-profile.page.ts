import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-photo-profile',
    templateUrl: './photo-profile.page.html',
    styleUrls: ['./photo-profile.page.scss'],
})
export class PhotoProfilePage implements OnInit {

    constructor(private modal: ModalController) {
    }

    ngOnInit() {
    }

    salirModal() {
        this.modal.dismiss();
    }
}
