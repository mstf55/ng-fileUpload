export interface FileModel {
  size: number;
  name: string;
  uploadDate: string;
}
export interface FileDisplayModel {
  type: string,
  files: Array<FileModel>
}