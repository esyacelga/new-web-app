import {NgModule} from '@angular/core';
import {ImageSanitizerPipe} from './image-sanitizer.pipe';
import {ImagenPipe} from './imagen.pipe';
import {DomSanitizerPipe} from './dom-sanitizer.pipe';
import {FilterPipe} from './filter.pipe';
import {FiltroSegmentoPipe} from './filtro-segmento.pipe';
import {SegmentoArticuloPipe} from './segmento-articulo.pipe';
import {SumatoriaArticulosPipe} from './sumatoria-articulos.pipe';

@NgModule({
    declarations: [
        ImagenPipe,
        DomSanitizerPipe,
        ImageSanitizerPipe,
        FilterPipe,
        FiltroSegmentoPipe,
        SegmentoArticuloPipe,
        SumatoriaArticulosPipe,
    ],
    exports: [
        ImagenPipe,
        FilterPipe,
        DomSanitizerPipe,
        ImageSanitizerPipe,
        FiltroSegmentoPipe,
        SegmentoArticuloPipe,
        SumatoriaArticulosPipe
    ]
})
export class PipesModule {
}
