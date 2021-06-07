import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { of } from 'rxjs';

import * as act from './file.actions';
import { FileUploadService } from '../services/file-upload.service';


@Injectable()
export class ShoppingEffects {

  loadFiles$ = createEffect(() => this.actions$
    .pipe(
      ofType<act.LoadFilesAction>(act.FileActionTypes.LOAD_FILES),
      mergeMap(
        () => this.fileService.getFiles()
          .pipe(
            map((data) => new act.LoadFilesSuccessAction(data)),
            catchError(error => of(new act.LoadFilesFailureAction(error)))
          )
      )
    ));

  addFile$ = createEffect(() => this.actions$
    .pipe(
      ofType<act.AddItemAction>(act.FileActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.fileService.uploadFile(data.payload)
          .pipe(
            map(event => this.getActionFromHttpEvent(event)
            ),
            catchError(errorEvent => of(new act.AddItemFailureAction(errorEvent.error.Message)))
          )
      )));

  private getActionFromHttpEvent(event: HttpEvent<any>) {
    switch (event.type) {
      case HttpEventType.Sent: {
        return new act.AddItemStartedAction();
      }
      case HttpEventType.UploadProgress: {
        return new act.AddItemProgressAction(
          Math.round((100 * event.loaded) / event.total)
        );
      }
      case HttpEventType.Response: {
        if (event.status === 200) {
          return new act.AddItemSuccessAction(event);
        } else {
          return new act.AddItemFailureAction(event.statusText);
        }
      }
      default: {
        return new act.NoAction();
      }
    }
  }

  constructor(
    private actions$: Actions,
    private fileService: FileUploadService
  ) { }
}