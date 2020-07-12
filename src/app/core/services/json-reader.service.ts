import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class JsonReaderService {
  constructor(
    private http: HttpClient,
  ) {}

  getData(url: string): Observable<any> {
    return this.http.get(url);
  }
}
