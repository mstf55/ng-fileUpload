import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

import { FileRoutingModule } from './file-routing.module';
import { UploadComponent } from './components/upload/upload.component';
import { DisplayComponent } from './components/display/display.component';
import { FilePageComponent } from './pages/file/file.component';
import { TablePaginatedComponent } from './components/table-paginated/table-paginated.component';
import { FilesReducer, productsFeatureKey } from './store/file.reducer';
import { ShoppingEffects } from './store/file.effects';

@NgModule({
  declarations: [
    UploadComponent,
    DisplayComponent,
    FilePageComponent,
    TablePaginatedComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
    StoreModule.forFeature(productsFeatureKey, FilesReducer),
    EffectsModule.forFeature([ShoppingEffects]),
  ]
})
export class FileModule { }
