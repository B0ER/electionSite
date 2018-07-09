import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = 'http://31.202.52.184:2026';

  constructor(private httpClient: HttpClient) {
  }

  getQuestions() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=questions`);
  }

  getSpeakers() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=speakers`);
  }

  getUsers() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=deputies`);
  }

  getImages() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=images`);
  }

  insertQuestion(question) {
    return this.httpClient.post(`${this.API_URL}/insertQuestion.php`, question);
  }

  insertSpeaker(speaker) {
    return this.httpClient.post(`${this.API_URL}/insertSpeaker.php`, speaker);
  }

  insertUser(user) {
    return this.httpClient.post(`${this.API_URL}/insertUser.php`, user);
  }
}
