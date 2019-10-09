import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./modules/pages/tabModule/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {path: '', pathMatch: 'full', redirectTo: 'black'},
    {path: 'login', loadChildren: './modules/pages/login/login.module#LoginPageModule'},
    {path: 'articulo', loadChildren: './modules/pages/mensajeria/articulo/articulo.module#ArticuloPageModule'},
    {path: 'segmento', loadChildren: './modules/pages/mensajeria/segmento/segmento.module#SegmentoPageModule'},
    {path: 'managment', loadChildren: './modules/pages/notificacion/managment/managment.module#ManagmentPageModule'},
    {path: 'sector', loadChildren: './modules/pages/persona/sector/sector.module#SectorPageModule'},
    {path: 'tipo-usuario', loadChildren: './modules/pages/persona/tipo-usuario/tipo-usuario.module#TipoUsuarioPageModule'},
    {path: 'tipo-articulo', loadChildren: './modules/pages/mensajeria/tipo-articulo/tipo-articulo.module#TipoArticuloPageModule'},
    {path: 'black', loadChildren: './modules/pages/login/black/black.module#BlackPageModule'}


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
