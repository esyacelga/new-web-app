import {Component, OnInit, ViewChild} from '@angular/core';
import {RegistroTipoUsuarioPersona} from '../../classes/persona/RegistroTipoUsuarioPersona';
import {TipoUsuario} from '../../classes/persona/TipoUsuario';
import {Sector} from '../../classes/persona/Sector';
import {RegistroMensajes} from '../../classes/login/RegistroMensajes';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../interfaces/interfaces';
import {UsuarioService} from '../../services/persona/usuario.service';
import {NavController, Platform} from '@ionic/angular';
import {StorageAppService} from '../../system/generic/service/storage-app.service';
import {SectorService} from '../../services/persona/sector.service';
import {TipoUsuarioPersonaService} from '../../services/persona/tipo-usuario-persona.service';
import {TipoUsuarioService} from '../../services/persona/tipo-usuario.service';
import {Util} from '../../system/generic/classes/util';
import {COLOR_TOAST_DARK} from '../../system/generic/classes/constant';
import {PushNotificationService} from '../../system/generic/service/push-notification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    objetoLogin = new RegistroTipoUsuarioPersona();
    objTipoUsuario = new TipoUsuario();
    lstSectores: Array<Sector>;
    registoMensajes: RegistroMensajes = new RegistroMensajes();
    error_messages = this.registoMensajes.error_messages;
    loginForm: FormGroup;
    ingresoForm: FormGroup;


    registerUser: Usuario = {
        email: '',
        password: '',
        nombre: '',
        avatar: ''
    };


    // @ts-ignore
    @ViewChild('slidePrincipal') slides: IonSlides;


    construirFormLogin() {
        this.ingresoForm = this.formFuilder.group({
            correo: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ])), clave: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ]))
        });
    }

    construirFormRegistro() {
        this.loginForm = this.formFuilder.group({
            nombres: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(150)
            ])),
            fechaNacimiento: new FormControl('', Validators.compose([
                Validators.required
            ])),
            callePrincipal: new FormControl('', Validators.compose([
                Validators.minLength(2),
                Validators.maxLength(100)
            ])),
            calleSecundaria: new FormControl('', Validators.compose([
                Validators.minLength(2),
                Validators.maxLength(100)
            ])),
            apellidos: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ])),
            segundoApellido: new FormControl('', null),
            sector: new FormControl('', null),
            clave: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ])),
            passwordValidator: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ])),
            correo: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ]))
        }, {validators: this.isEquals('clave', 'passwordValidator')});
    }

    constructor(private formFuilder: FormBuilder, private  util: Util,
                private svrUsuario: UsuarioService,
                private navCtrl: NavController,
                private svrStorage: StorageAppService,
                private svtNotificacion: PushNotificationService,
                private platform: Platform,
                private svrSector: SectorService, private svrTipoUsuario: TipoUsuarioService,
                private svtTipoUsuariPersona: TipoUsuarioPersonaService) {
        this.construirFormRegistro();
        this.construirFormLogin();
    }

    ngOnInit(): void {
        this.slides.lockSwipes(true);
        this.obtenerSectores();

    }

    async obtenerSectores() {
        // @ts-ignore
        this.lstSectores = await this.svrSector.obtenerSectores();
        // @ts-ignore
        this.objTipoUsuario = await this.svrTipoUsuario.buscarRegistro('descripcion', 'CLIENTE');
        console.log(this.lstSectores);
    }

    isEquals(campo: string, campoToValidate: string) {
        return (group: FormGroup) => {
            const pass1 = group.controls[campo].value;
            const pass2 = group.controls[campoToValidate].value;
            if (pass1 === pass2) {
                return null;
            } else {
                return {
                    sonIguales: true
                };
            }
        };
    }


    async login() {
        if (this.ingresoForm.status === 'INVALID') {
            return;
        }
        const data = await this.svrUsuario.loginUsuario(this.ingresoForm.value.correo, this.ingresoForm.value.clave);
        if (data) {

            // navegar al tabs
            console.error(data);
            this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
            if (this.platform.is('cordova')) {
                this.svtNotificacion.configuracionInicial();
            }
            this.svrStorage.setStorageObject(data, 'usuario');
        } else {
            // mostrar alerta de usuario y contraseña no correctos
            this.util.presentToast('Usuario y contraseña no son correctos.', COLOR_TOAST_DARK);
        }
    }


    async registerNewUser() {
        if (this.loginForm.status === 'VALID') {
            const usuarioApp = this.loginForm.value;
            usuarioApp.tipoUsuario = this.objTipoUsuario._id;
            usuarioApp.avatar = this.registerUser.avatar;
            const data = await this.svtTipoUsuariPersona.registar(usuarioApp);
            this.mostrarLogin();
        } else {
            this.util.presentToast('Por favor ingrese la información solcitada', COLOR_TOAST_DARK);
        }
    }

    mostrarRegistro() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }

    mostrarLogin() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }


}
