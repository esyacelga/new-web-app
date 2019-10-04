import {Component, OnInit} from '@angular/core';
import {Articulo} from '../../../classes/mensajeria/Articulo';
import {TipoArticulo} from '../../../classes/mensajeria/tipo-articulo';
import {ArticuloService} from '../../../services/mensajeria/articulo.service';
import {TipoArticuloClientService} from '../../../services/mensajeria/tipo-articulo-client.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articulo: Articulo;
  tipoArticulo: TipoArticulo;
  lstTipoArticulo: any[];


  constructor(private svcArticulo: ArticuloService, private svcTipoArticulo: TipoArticuloClientService) {
  }

  async ngOnInit() {
    await this.obtenerTipoArticuloTodos();
  }

  selecionar(item: TipoArticulo) {
    this.tipoArticulo = item;
  }


  async obtenerTipoArticuloTodos() {
    // @ts-ignore
    this.lstTipoArticulo = await this.svcTipoArticulo.obtenerTipoArticulos();
  }

}
