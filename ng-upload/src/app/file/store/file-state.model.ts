import { FileState } from './file.reducer';

export interface AppState {
  readonly files: FileState
}