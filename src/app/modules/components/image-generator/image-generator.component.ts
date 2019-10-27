import {Component, Input, OnInit} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ImageGeneratorService} from './image-generator.service';
import {Util} from '../../system/generic/classes/util';
import {COLOR_TOAST_ERROR} from '../../system/generic/classes/constant';

@Component({
    selector: 'app-image-generator',
    templateUrl: './image-generator.component.html',
    styleUrls: ['./image-generator.component.scss'],
})
export class ImageGeneratorComponent implements OnInit {
    @Input() ruta: string;
    imagen: string;

    constructor(private camera: Camera, private svrImage: ImageGeneratorService, private svr: Util) {
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
        this.camera.getPicture(options).then((imageData) => {
            // @ts-ignore
            const img = window.Ionic.WebView.convertFileSrc(imageData);
            this.imagen = img;
            this.svrImage.subirImagen(imageData, this.ruta);
        }, (err) => {
            this.svr.presentToast('Hubo un error al subir la imagen: ' + err, COLOR_TOAST_ERROR);
            // Handle error
        });
    }


}
