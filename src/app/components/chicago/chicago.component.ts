import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }
  humidity: number;
  avgTemp: number;
  highTemp: number;
  lowTemp: number;
  status: string;

  ngOnInit() {
    this.getChicagoWeather();
  }
  getChicagoWeather() {
    // tslint:disable-next-line:prefer-const
    let observable = this.weatherService.getData(4887398);
    observable.subscribe(data => {
      this.humidity = data.main.humidity;
      this.status = data.weather[0].description;
      this.highTemp = data.main.temp_max;
      this.lowTemp = data.main.temp_min;
      this.avgTemp = Math.round((this.highTemp + this.lowTemp) / 2);
    });
  }
}
