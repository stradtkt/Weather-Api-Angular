import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'b1d06f71e0d2f85661337cfefe5c2578';
  private darkKey = '966aabdedae19c1a1b563cd08886c44e';
  constructor(private http: HttpClient) { }

  getData(id) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&appid=${this.apiKey}`);
  }
}
