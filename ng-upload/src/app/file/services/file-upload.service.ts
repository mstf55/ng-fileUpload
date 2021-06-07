import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { FileDisplayModel } from '../models/fileModel';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private API_BASE_URL = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const options = {
      reportProgress: true
    };

    const req = new HttpRequest(
      'POST',
      `${this.API_BASE_URL}/api/files`,
      formData,
      options
    );
    return this.httpClient.request(req);
  }
  public getFiles(): Observable<FileDisplayModel[]> {
    return this.httpClient.get<FileDisplayModel[]>(`${this.API_BASE_URL}/api/files`)
  }
}