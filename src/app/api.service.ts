import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://31.202.52.184:2025';

  constructor(private httpClient: HttpClient) {
  }

  getQuestions() {
    return this.httpClient.get(`${this.API_URL}/api.php?table=questions`);
  }

  getSpeakers() {
    return this.httpClient.get(`${this.API_URL}/api.php?table=speakers`);
  }

  getUsers() {
    return this.httpClient.get(`${this.API_URL}/api.php?table=deputies`);
  }
}
