import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // private apiKey = '908b7eeda3f9791fbeea6a5e228d5196';
  constructor(private http: HttpClient) { }

  getData(cityId) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=908b7eeda3f9791fbeea6a5e228d5196`);
  }
}
