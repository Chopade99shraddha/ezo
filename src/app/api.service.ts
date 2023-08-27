import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://db.ezobooks.in/kappa/image/task';
  constructor(private http: HttpClient) { }

  getSomeData(): Observable<any> {
    const url = this.apiUrl; // Replace with the actual API endpoint
    return this.http.get(url);
  }
}
