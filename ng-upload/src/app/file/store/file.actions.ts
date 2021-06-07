
import { Action } from '@ngrx/store';

import { FileDisplayModel } from '../models/fileModel';

export enum FileActionTypes {
  LOAD_FILES = '[FILES] Load Files',
  LOAD_FILES_SUCCESS = '[FILES] Load Files Success',
  LOAD_FILES_FAILURE = '[FILES] Load Files Failure',
  ADD_ITEM = '[FILES] Add Item',
  ADD_ITEM_SUCCESS = '[FILES] Add Item Success',
  ADD_ITEM_FAILURE = '[FILES] Add Item Failure',
  ADD_ITEM_STARTED = '[FILES] Add Item Started',
  ADD_ITEM_PROGRESS = '[FILES] Add Item Progress',
  NO_ACTION = '[FILES] No Action',
}

export class LoadFilesAction implements Action {
  readonly type = FileActionTypes.LOAD_FILES
}
export class LoadFilesSuccessAction implements Action {
  readonly type = FileActionTypes.LOAD_FILES_SUCCESS

  constructor(public payload: Array<FileDisplayModel>) { }

}
export class LoadFilesFailureAction implements Action {
  readonly type = FileActionTypes.LOAD_FILES_FAILURE

  constructor(public payload: string) { }
}

export class AddItemAction implements Action {
  readonly type = FileActionTypes.ADD_ITEM

  constructor(public payload: File) { }
}
export class AddItemSuccessAction implements Action {
  readonly type = FileActionTypes.ADD_ITEM_SUCCESS

  constructor(public payload: any) { }
}
export class AddItemFailureAction implements Action {
  readonly type = FileActionTypes.ADD_ITEM_FAILURE

  constructor(public payload: string) {
  }
}

export class AddItemStartedAction implements Action {
  readonly type = FileActionTypes.ADD_ITEM_STARTED

  constructor() {
  }
}

export class AddItemProgressAction implements Action {
  readonly type = FileActionTypes.ADD_ITEM_PROGRESS

  constructor(public progress: number) {
  }
}

export class NoAction implements Action {
  readonly type = FileActionTypes.NO_ACTION

  constructor() {
  }
}



export type FileAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  AddItemStartedAction |
  AddItemProgressAction |
  LoadFilesAction |
  LoadFilesFailureAction |
  LoadFilesSuccessAction |
  NoAction

