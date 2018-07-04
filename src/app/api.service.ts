import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:2025';

  constructor(private httpClient: HttpClient) {
  }
}
