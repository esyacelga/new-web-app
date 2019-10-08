import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManagmentPage } from './managment.page';
import {ComponentModule} from '../../../components/component.module';

const routes: Routes = [
  {
    path: '',
    component: ManagmentPage
  }
];

@NgModule({
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManagmentPage]
})
export class ManagmentPageModule {}
