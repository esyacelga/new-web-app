import {Component, OnInit} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ImageGeneratorService} from './image-generator.service';
import {ModeloTipoUsuarioPersona} from '../../classes/persona/TipoUsuarioPersona';
import {StorageAppService} from '../../system/generic/service/storage-app.service';

@Component({
    selector: 'app-image-generator',
    templateUrl: './image-generator.component.html',
    styleUrls: ['./image-generator.component.scss'],
})
export class ImageGeneratorComponent implements OnInit {
    imagen: string;

    constructor(private camera: Camera, private svrStorage: StorageAppService,
                private svrImage: ImageGeneratorService) {
    }

    ngOnInit() {
    }

    camara() {
        const options: CameraOptions = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        console.log('Entro a camara procesar camara');
        this.procesarImagen(options);
    }

    libreria() {
        const options: CameraOptions = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.procesarImagen(options);
    }

    async procesarImagen(options: CameraOptions) {
        console.error('Revisar Foto');
        const tipoUsuarioPersona: ModeloTipoUsuarioPersona = (await this.svrStorage.loadStorageObject('usuario')) as ModeloTipoUsuarioPersona;
        this.camera.getPicture(options).then((imageData) => {
            // @ts-ignore
            const img = window.Ionic.WebView.convertFileSrc(imageData);
            this.imagen = img;
            this.svrImage.subirImagen(imageData, tipoUsuarioPersona._id);
        }, (err) => {
            // Handle error
        });
    }


}
