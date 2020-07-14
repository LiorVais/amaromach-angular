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

  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
