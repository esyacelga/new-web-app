import {Component, OnInit} from '@angular/core';
import {ModeloPersona} from '../../../classes/persona/TipoUsuarioPersona';
import {PersonaService} from '../../../services/persona/persona.service';

@Component({
    selector: 'app-rol-persona',
    templateUrl: './rol-persona.page.html',
    styleUrls: ['./rol-persona.page.scss'],
})
export class RolPersonaPage implements OnInit {
    lstPersona: ModeloPersona[];

    constructor(private svrPersona: PersonaService) {
    }

    async ngOnInit() {
        this.lstPersona = await this.svrPersona.obtenerTodos();
        console.log(this.lstPersona);
    }


}
