import { FileDisplayModel } from '../models/fileModel';
import { FileActionTypes, FileAction } from './file.actions';

export interface FileState {
  list: FileDisplayModel[],
  loading: boolean,
  message: string;
  isError: boolean;
  progress: number;
}
export const productsFeatureKey = 'files';

const initialState: FileState = {
  list: [],
  loading: false,
  message: '',
  isError: false,
  progress: 0
};

export function FilesReducer(state: FileState = initialState, action: FileAction) {
  switch (action.type) {
    case FileActionTypes.LOAD_FILES:
      return {
        ...state,
        loading: false,
        message: "Retrieving files",
        isError: false
      }
    case FileActionTypes.LOAD_FILES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: true,
        message: "Files retrieved",
        isError: false
      }

    case FileActionTypes.LOAD_FILES_FAILURE:
      return {
        ...state,
        message: "Files retrieved failed",
        isError: true
      }

    case FileActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: false,
        progress: 0,
        message: "Adding File",
        isError: false
      }
    case FileActionTypes.ADD_ITEM_SUCCESS:
      let data = action.payload;
      let newStateList: any = [];

      let index = state.list.findIndex(f => f.type == data.body.type);

      if (index !== -1) {
        let updatedSubFiles = [...state.list[index].files, data.body];
        let updatedList = { ...state.list[index], files: updatedSubFiles };
        newStateList = [
          ...state.list.slice(0, index),
          Object.assign({}, updatedList),
          ...state.list.slice(index + 1)
        ];
      }
      else {
        let freshSubFiles = { type: data.body.type, files: [data.body] }
        newStateList = [...state.list, freshSubFiles]
      }
      return {
        ...state,
        list: newStateList,
        loading: true,
        progress: 100,
        message: "File has been uploaded",
        isError: false,
      };
    case FileActionTypes.ADD_ITEM_PROGRESS:
      return {
        ...state,
        loading: false,
        progress: action.progress,
        message: "Adding the item...",
        isError: false
      };
    case FileActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        message: action.payload,
        isError: true,
        loading: true
      };
    default:
      return state;
  }
}