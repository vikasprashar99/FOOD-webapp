import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'https://x0nn0tpbnh.execute-api.ap-south-1.amazonaws.com/dev/imageupload/api/files/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('https://x0nn0tpbnh.execute-api.ap-south-1.amazonaws.com/dev/imageupload/api/files/all');
  }
}
