
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilePageComponent } from './pages/file/file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }