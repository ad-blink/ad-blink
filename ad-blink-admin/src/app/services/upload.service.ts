import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http'
import { Subject } from 'rxjs'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = "http://192.168.43.226:9000/api/upload"

  constructor(private http: HttpClient) { }

  public upload(files: File[], token: string) {
    var formData: FormData = new FormData();
    files.forEach(file => {


      formData.append('file', file, file.name);

      console.log("FormData");

      console.log(formData)

      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');


      let options = { reportProgress: true };

      const req = new HttpRequest('POST', `${this.url}/${token}`, formData);

      // const req = this.http.post(url, formData).subscribe(data => {
      //   console.log(data)
      // });

      const progress = new Subject<number>();

      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {


          const percentDone = Math.round(100 * event.loaded / event.total);
          console.log(percentDone);


          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {


          console.log("progress.complete()")
          progress.complete();
        }
      });

    });
  }
}
