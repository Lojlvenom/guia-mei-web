import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private http: HttpClient) { }

  base_get(): Observable<any> {
    return this.http.get(`${baseURL}/show`);
  }

}
