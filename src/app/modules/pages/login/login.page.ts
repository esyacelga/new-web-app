import {Component, OnInit} from '@angular/core';
import {RegistroTipoUsuarioPersona} from '../../classes/persona/RegistroTipoUsuarioPersona';
import {TipoUsuario} from '../../classes/persona/TipoUsuario';
import {Sector} from '../../classes/persona/Sector';
import {RegistroMensajes} from '../../classes/login/RegistroMensajes';
import {FormGroup} from '@angular/forms';
import {Usuario} from '../../interfaces/interfaces';

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
    ingresoForm;

    registerUser: Usuario = {
        email: '',
        password: '',
        nombre: '',
        avatar: ''
    };


    constructor() {
    }

    ngOnInit() {
    }


}
